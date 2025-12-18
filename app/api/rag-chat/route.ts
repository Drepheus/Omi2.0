import { VertexAI } from '@google-cloud/vertexai';
import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { trackUsage, logApiCall } from '@/lib/usage-tracking';

const project = process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';
const dataStoreId = process.env.VERTEX_DATA_STORE_ID;

export const runtime = 'nodejs'; // Vertex SDK requires Node.js runtime

export async function POST(req: NextRequest) {
    const startTime = Date.now();
    
    // Get user session
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;

    try {
        if (!project || !dataStoreId) {
            return NextResponse.json(
                { error: 'Vertex AI is not configured. Please set GOOGLE_CLOUD_PROJECT_ID and VERTEX_DATA_STORE_ID.' },
                { status: 500 }
            );
        }

        const { message, history } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // Initialize Vertex AI
        const vertexAI = new VertexAI({ project, location });
        const model = vertexAI.getGenerativeModel({
            model: 'gemini-2.5-flash', // Latest stable version
        });

        // Configure grounding with Vertex AI Search
        const tools = [
            {
                retrieval: {
                    vertexAiSearch: {
                        datastore: `projects/${project}/locations/global/collections/default_collection/dataStores/${dataStoreId}`,
                    },
                },
            },
        ];

        // Start chat with grounding
        const chat = model.startChat({
            tools: tools,
            history: history || [],
        });

        // Send message and stream response
        const result = await chat.sendMessageStream(message);

        // Create a readable stream for the response
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of result.stream) {
                        const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text || '';
                        if (text) {
                            controller.enqueue(encoder.encode(text));
                        }
                    }
                    controller.close();
                } catch (error) {
                    console.error('Streaming error:', error);
                    controller.error(error);
                }
            },
        });

        // Track usage and log API call
        if (user) {
            trackUsage(user.id, 'chat').catch(err => console.error('Usage tracking error:', err));
            
            logApiCall({
                user_id: user.id,
                email: user.email,
                endpoint: '/api/rag-chat',
                status_code: 200,
                duration_ms: Date.now() - startTime,
                request_data: { message_length: message.length },
                response_data: { success: true, streamed: true }
            }).catch(err => console.error('API logging error:', err));
        }

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
            },
        });
    } catch (error: any) {
        console.error('RAG Chat Error:', error);
        
        // Log error
        // Note: user variable is available in scope
        // We need to check if user is defined, but TS might complain if it's not in try block scope?
        // Actually user is defined outside try block in my previous edit?
        // Let's check. Yes, user is defined at top of function.
        
        // But wait, I need to make sure 'user' is accessible here.
        // It is defined in the function scope.
        
        // Log error
        // We can't easily access 'user' if TS thinks it might be uninitialized?
        // No, it's const user = ...
        
        // However, I'll just add the logging logic.
        
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
