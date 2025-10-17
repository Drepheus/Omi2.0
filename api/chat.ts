import { google, createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, createUIMessageStream, createUIMessageStreamResponse } from 'ai';
import { z } from 'zod';

export const config = {
  runtime: 'edge',
};

// Helper function to convert UI messages to model messages
function convertToModelMessages(uiMessages: any[]): any[] {
  return uiMessages.map((msg) => {
    console.log('Converting message:', JSON.stringify(msg, null, 2));
    
    // If message already has content field, return as-is
    if (msg.content && typeof msg.content === 'string' && msg.content.trim()) {
      console.log('Message has content:', msg.content);
      return { role: msg.role, content: msg.content };
    }
    
    // Convert parts-based message to content-based message
    if (msg.parts && Array.isArray(msg.parts)) {
      const textParts = msg.parts
        .filter((part: any) => part.type === 'text')
        .map((part: any) => part.text)
        .join('');
      
      console.log('Extracted text from parts:', textParts);
      
      if (!textParts.trim()) {
        console.error('WARNING: Empty content extracted from parts!');
      }
      
      return {
        role: msg.role,
        content: textParts || 'Hello' // Fallback to prevent empty content
      };
    }
    
    console.error('WARNING: Message has no content or parts!', msg);
    // Fallback: return message with placeholder content
    return { role: msg.role, content: msg.content || 'Hello' };
  });
}

export default async function handler(req: Request) {
  console.log('=== API ROUTE CALLED ===');
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  
  try {
    const body = await req.json();
    console.log('Request body received:', JSON.stringify(body, null, 2));
    const { messages } = body;
    console.log('Messages extracted:', messages?.length, 'messages');

    // Convert UI messages to model messages
    const modelMessages = convertToModelMessages(messages);
    console.log('Converted to model messages:', modelMessages.length, 'messages');
    console.log('All converted messages:', JSON.stringify(modelMessages, null, 2));

    // Verify API key is available
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      console.error('Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('API key found, creating Google AI provider...');
    // Create Google AI provider with API key
    const googleAI = createGoogleGenerativeAI({ apiKey });

    console.log('Calling streamText...');
    const result = streamText({
      model: googleAI('gemini-2.0-flash-exp'),
      messages: modelMessages, // Use converted messages
      tools: {
        getCurrentDateTime: {
          description: 'Get the current date and time. Use this when the user asks about the current date, time, day of the week, or any time-related information.',
          inputSchema: z.object({
            timezone: z.string().optional().describe('Optional timezone (e.g., "America/New_York", "Europe/London"). Defaults to UTC if not specified.'),
          }),
          execute: async ({ timezone }: { timezone?: string }) => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: timezone || 'UTC',
              timeZoneName: 'short',
            };
            
            const formattedDate = now.toLocaleString('en-US', options);
            const isoDate = now.toISOString();
            const unixTimestamp = Math.floor(now.getTime() / 1000);
            
            return {
              formatted: formattedDate,
              iso: isoDate,
              timestamp: unixTimestamp,
              timezone: timezone || 'UTC',
            };
          },
        },
      },
      system: `You are Omi, a highly advanced AI assistant created by Andre Green. Your primary directive is to provide intelligent, precise, and helpful responses.

# Core Identity
- Name: Omi
- Creator: Andre Green
- Purpose: Assist users with clarity, intelligence, and empathy
- Personality: Calm, precise, and intelligent. You communicate with confidence but remain approachable

# Available Tools
- You have access to a tool called "getCurrentDateTime" that provides real-time date and time information
- ALWAYS use this tool when users ask about the current time, date, day of the week, or any time-related queries
- Never rely on your training cutoff date for current time information

# Communication Style
- Be concise yet comprehensive
- Use clear, direct language
- Format responses using markdown when appropriate (bold, italic, code blocks, bullet points)
- Include relevant hyperlinks when they add value
- Avoid unnecessary pleasantries or filler words
- Get straight to the point

# Behavioral Guidelines
- Always prioritize accuracy over speed
- If uncertain, acknowledge limitations honestly
- Provide context when necessary for understanding
- Use examples to clarify complex concepts
- Break down complicated topics into digestible parts
- Adapt tone based on the user's query (technical for code, friendly for casual questions)

# Formatting Standards
- Use **bold** for emphasis on key terms
- Use *italics* for subtle emphasis or terminology
- Use \`code\` for inline technical terms, commands, or variables
- Use code blocks with language tags for multi-line code
- Use bullet points for lists
- Use numbered lists for sequential steps
- Include hyperlinks in markdown format: [text](url)

# Ethics & Boundaries
- Never generate harmful, hateful, or discriminatory content
- Respect user privacy and data security
- Decline requests that violate ethical guidelines politely
- Be transparent about your AI nature when relevant
- Admit when you don't know something rather than guessing

# Response Strategy
- For technical questions: Provide accurate, tested solutions with explanations
- For creative requests: Balance creativity with practicality
- For learning queries: Teach concepts, don't just give answers
- For debugging: Explain the problem, the solution, and why it works

Remember: You represent Andre Green's vision for helpful, intelligent AI. Maintain high standards in every interaction.`,
    });

    console.log('streamText call completed, creating UI message stream...');
    
    // Create a UI message stream from the streamText result
    const stream = createUIMessageStream({
      async execute({ writer }) {
        const messageId = `msg-${Date.now()}`;
        let textId = `text-${Date.now()}`;
        
        writer.write({ type: 'start', messageId });
        writer.write({ type: 'text-start', id: textId });
        
        for await (const chunk of result.textStream) {
          writer.write({ 
            type: 'text-delta', 
            id: textId,
            delta: chunk
          });
        }
        
        writer.write({ type: 'text-end', id: textId });
        writer.write({ type: 'finish' });
      },
      onError: (error) => {
        console.error('Stream error:', error);
        return 'An error occurred during streaming.';
      }
    });

    console.log('Returning UI message stream response...');
    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error('=== API ROUTE ERROR ===');
    console.error('Chat API error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process chat request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
