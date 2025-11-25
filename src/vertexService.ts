/**
 * Service for interacting with Vertex AI RAG endpoints
 */

export interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

export async function chatWithVertexRAG(
    message: string,
    history: ChatMessage[],
    onChunk: (text: string) => void
): Promise<void> {
    try {
        const response = await fetch('/api/rag-chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                history,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get response from Vertex AI');
        }

        if (!response.body) {
            throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            onChunk(chunk);
        }
    } catch (error) {
        console.error('Vertex RAG Chat Error:', error);
        throw error;
    }
}
