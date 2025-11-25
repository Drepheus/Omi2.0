import { NextRequest, NextResponse } from 'next/server';
import { getGenerativeModel } from '@/lib/vertex-client';

export const runtime = 'nodejs'; // Vertex SDK requires Node.js runtime

export async function POST(req: NextRequest) {
    try {
        const { message, history } = await req.json();
        const dataStoreId = process.env.VERTEX_DATA_STORE_ID;
        const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;

        if (!dataStoreId || !projectId) {
            return NextResponse.json(
                { error: 'Configuration missing: VERTEX_DATA_STORE_ID or GOOGLE_CLOUD_PROJECT_ID not set' },
                { status: 500 }
            );
        }

        // Use Gemini 1.5 Pro for better RAG reasoning
        const model = getGenerativeModel('gemini-1.5-pro-001');

        // Configure the Vertex AI Search tool (Grounding)
        const tools = [
            {
                retrieval: {
                    vertexAiSearch: {
                        datastore: `projects/${projectId}/locations/global/collections/default_collection/dataStores/${dataStoreId}`,
                    },
                },
            },
        ];

        const chat = model.startChat({
            tools: tools,
            history: history || [],
        });

        const result = await chat.sendMessageStream(message);

        // Create a streaming response
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of result.stream) {
                        const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text;
                        if (text) {
                            controller.enqueue(encoder.encode(text));
                        }
                    }
                    controller.close();
                } catch (err) {
                    console.error('Streaming error:', err);
                    controller.error(err);
                }
            },
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
        });

    } catch (error: any) {
        console.error('Vertex RAG Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
