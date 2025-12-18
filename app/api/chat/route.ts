import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { trackUsage, logApiCall } from '@/lib/usage-tracking';

export const runtime = "edge";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: Request) {
  console.log('=== CHAT API ROUTE CALLED ===');
  const startTime = Date.now();
  
  // Get user session
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const user = session?.user;

  try {
    const { messages } = await req.json() as { messages: Message[] };
    console.log('Messages extracted:', messages?.length, 'messages');

    // Verify API key is available
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      console.error('Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable');
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    console.log('API key found, initializing Gemini...');
    
    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      systemInstruction: `You are Omi, a highly advanced AI assistant created by Drepheus. Your primary directive is to provide intelligent, precise, and helpful responses.

# Core Identity
- Name: Omi
- Creator: Drepheus
- Purpose: Assist users with clarity, intelligence, and empathy
- Personality: Calm, precise, and intelligent. You communicate with confidence but remain approachable

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

Remember: You represent Drepheus's vision for helpful, intelligent AI. Maintain high standards in every interaction.`
    });

    // Convert messages to Gemini format (exclude system messages, take last 10 for context)
    const history = messages.slice(-10, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Get the latest user message
    const latestMessage = messages[messages.length - 1];
    
    console.log('Starting chat with', history.length, 'history messages');
    const chat = model.startChat({ history });
    
    console.log('Sending message to Gemini...');
    const result = await chat.sendMessage(latestMessage.content);
    const response = await result.response;
    const text = response.text();
    
    console.log('Response received from Gemini');

    // Track usage and log API call - FIRE AND FORGET
    if (user) {
      (async () => {
        try {
          // Track usage
          await trackUsage(user.id, 'chat');
          
          // Log API call
          await logApiCall({
            user_id: user.id,
            email: user.email,
            endpoint: '/api/chat',
            status_code: 200,
            duration_ms: Date.now() - startTime,
            request_data: { message_count: messages.length },
            response_data: { success: true }
          });
        } catch (trackingError) {
          // SILENT FAILURE - Do not crash the chat if tracking fails
          console.error('BACKGROUND TRACKING ERROR (Non-fatal):', trackingError);
        }
      })();
    }

    return NextResponse.json({ 
      message: text,
      role: 'assistant'
    });
  } catch (error) {
    console.error('=== CHAT API ERROR ===');
    console.error('Chat API error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

    // Log error
    if (user) {
      logApiCall({
        user_id: user.id,
        email: user.email,
        endpoint: '/api/chat',
        status_code: 500,
        duration_ms: Date.now() - startTime,
        request_data: { error: error instanceof Error ? error.message : 'Unknown' }
      }).catch(err => console.error('API logging error:', err));
    }

    return NextResponse.json({ 
      error: 'Failed to process chat request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
