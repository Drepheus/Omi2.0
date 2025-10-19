import { tavily } from '@tavily/core';
import { google, createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, createUIMessageStream, createUIMessageStreamResponse } from 'ai';

export const config = {
  runtime: 'edge',
};

// Helper function to convert UI messages to model messages
function convertToModelMessages(uiMessages: any[]): any[] {
  return uiMessages.map((msg) => {
    if (msg.content && typeof msg.content === 'string' && msg.content.trim()) {
      return { role: msg.role, content: msg.content };
    }
    
    if (msg.parts && Array.isArray(msg.parts)) {
      const textParts = msg.parts
        .filter((part: any) => part.type === 'text')
        .map((part: any) => part.text)
        .join('');
      
      return {
        role: msg.role,
        content: textParts || 'Hello'
      };
    }
    
    return { role: msg.role, content: msg.content || 'Hello' };
  });
}

export default async function handler(req: Request) {
  console.log('=== DEEPSEARCH API ROUTE CALLED ===');
  
  try {
    const body = await req.json();
    const { messages } = body;
    
    // Get the latest user message (the search query)
    const modelMessages = convertToModelMessages(messages);
    const lastUserMessage = [...modelMessages].reverse().find(m => m.role === 'user');
    const searchQuery = lastUserMessage?.content || '';
    
    console.log('DeepSearch query:', searchQuery);

    // Verify API keys
    const tavilyApiKey = process.env.TAVILY_API_KEY;
    const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    
    if (!tavilyApiKey || !googleApiKey) {
      console.error('Missing API keys');
      return new Response(
        JSON.stringify({ error: 'API keys not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Initialize Tavily client
    const tavilyClient = tavily({ apiKey: tavilyApiKey });
    
    console.log('Performing Tavily search...');
    
    // Perform deep search with Tavily
    const searchResults = await tavilyClient.search(searchQuery, {
      searchDepth: 'advanced', // Use advanced search for deeper results
      maxResults: 5,
      includeAnswer: true, // Get AI-generated answer
      includeRawContent: false,
    });
    
    console.log('Tavily search completed:', searchResults.results?.length, 'results');

    // Format search results for context
    let searchContext = '';
    
    if (searchResults.answer) {
      searchContext += `## Quick Answer\n${searchResults.answer}\n\n`;
    }
    
    if (searchResults.results && searchResults.results.length > 0) {
      searchContext += `## Sources Found\n`;
      searchResults.results.forEach((result: any, index: number) => {
        searchContext += `\n### ${index + 1}. ${result.title}\n`;
        searchContext += `**URL:** ${result.url}\n`;
        searchContext += `**Content:** ${result.content}\n`;
        if (result.score) {
          searchContext += `**Relevance:** ${(result.score * 100).toFixed(1)}%\n`;
        }
      });
    }

    // Create enhanced system prompt with search results
    const enhancedSystemPrompt = `You are Omi, a highly advanced AI assistant created by Andre Green, now in **DeepSearch Mode**.

# DeepSearch Mode
You have access to real-time web search results from Tavily. Use this information to provide comprehensive, up-to-date answers.

# Search Results Context
${searchContext}

# Instructions
- Synthesize information from the search results above
- Cite specific sources when referencing information
- Provide URLs as markdown links: [Source Title](URL)
- If the search results are insufficient, acknowledge what's available and what's missing
- Combine your knowledge with the search results for the most comprehensive answer
- Format your response clearly with headings, bullet points, and proper citations

# Communication Style
- Be precise and fact-based
- Include source citations for claims
- Use **bold** for emphasis
- Use bullet points for lists
- Provide actionable insights when possible

Remember: You're in DeepSearch mode, so leverage the web search results to give the most current and accurate information possible.`;

    // Create Google AI provider
    const googleAI = createGoogleGenerativeAI({ apiKey: googleApiKey });

    console.log('Calling streamText with search context...');
    
    // Stream response with enhanced context
    const result = streamText({
      model: googleAI('gemini-2.0-flash-exp'),
      messages: modelMessages,
      system: enhancedSystemPrompt,
    });

    console.log('Creating UI message stream...');
    
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
        return 'An error occurred during DeepSearch.';
      }
    });

    console.log('Returning DeepSearch response...');
    return createUIMessageStreamResponse({ stream });
    
  } catch (error) {
    console.error('=== DEEPSEARCH API ERROR ===');
    console.error('Error:', error);
    console.error('Stack:', error instanceof Error ? error.stack : 'No stack trace');
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process DeepSearch request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
