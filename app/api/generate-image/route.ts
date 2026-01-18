
import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';
import { trackUsage, logApiCall } from '@/lib/usage-tracking';

// Initialize Replicate client
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export const runtime = 'edge'; // Optional: Use edge runtime if supported/preferred

export async function POST(req: NextRequest) {
    const startTime = Date.now();

    // Guest mode - auth disabled for deployment
    const user = null;

    try {
        const { prompt, aspectRatio = '3:2' } = await req.json();

        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt is required' },
                { status: 400 }
            );
        }

        if (!process.env.REPLICATE_API_TOKEN) {
            console.error('REPLICATE_API_TOKEN is not set');
            return NextResponse.json(
                { error: 'Server configuration error: API token missing' },
                { status: 500 }
            );
        }

        console.log('Generating image with prompt:', prompt);

        // Using Flux schell (high quality, fast)
        const output = await replicate.run(
            "black-forest-labs/flux-schnell",
            {
                input: {
                    prompt: prompt,
                    aspect_ratio: aspectRatio,
                    output_format: "webp",
                    output_quality: 90
                }
            }
        );

        console.log('Replicate output:', output);

        // Replicate returns an array of output streams/URLs for this model
        // Usually standard output is an array of strings (URLs)
        let imageUrl = '';

        if (Array.isArray(output) && output.length > 0) {
            // It might be a ReadableStream in some contexts, but usually a URL string for this model
            imageUrl = String(output[0]);
        } else if (typeof output === 'string') {
            imageUrl = output;
        } else {
            // Fallback or inspect object
            console.error('Unexpected output format from Replicate:', output);
            return NextResponse.json({ error: 'Failed to parse generation output' }, { status: 500 });
        }

        // Track usage and log API call
        if (user) {
            trackUsage(user.id, 'image_gen').catch(err => console.error('Usage tracking error:', err));

            logApiCall({
                user_id: user.id,
                email: user.email,
                endpoint: '/api/generate-image',
                status_code: 200,
                duration_ms: Date.now() - startTime,
                request_data: { prompt_length: prompt.length, aspect_ratio: aspectRatio },
                response_data: { success: true }
            }).catch(err => console.error('API logging error:', err));
        }

        return NextResponse.json({ imageUrl });

    } catch (error: any) {
        console.error('Image generation error:', error);

        // Log error
        if (user) {
            logApiCall({
                user_id: user.id,
                email: user.email,
                endpoint: '/api/generate-image',
                status_code: 500,
                duration_ms: Date.now() - startTime,
                request_data: { error: error.message || 'Unknown' }
            }).catch(err => console.error('API logging error:', err));
        }

        return NextResponse.json(
            { error: error.message || 'Failed to generate image' },
            { status: 500 }
        );
    }
}
