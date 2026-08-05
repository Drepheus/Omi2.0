import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { db } from '@/src/db';
import { users, agentConfigs } from '@/src/db/schema';
import { decryptApiKey } from '@/lib/crypto';
import { eq, sql } from 'drizzle-orm';

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // 1. Auth & Session Check via BetterAuth
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in to access agent execution.' },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const body = await req.json();
    const { messages, systemPrompt: customSystemPrompt } = body as {
      messages: Array<{ role: string; content: string }>;
      systemPrompt?: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const latestMessage = messages[messages.length - 1];
    const userPrompt = latestMessage.content || '';

    // 2. Database Lookup (Neon + Drizzle) for user credit balance & agent configs
    const userRecord = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    const creditBalance = userRecord.length > 0 ? userRecord[0].creditBalance : 0;

    const configRecord = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);
    let encryptedApiKey = '';
    let openclawState: any = null;

    if (configRecord.length > 0) {
      encryptedApiKey = configRecord[0].encryptedApiKey || '';
      if (configRecord[0].openclawState) {
        try {
          openclawState = typeof configRecord[0].openclawState === 'string'
            ? JSON.parse(configRecord[0].openclawState)
            : configRecord[0].openclawState;
        } catch {
          openclawState = { raw: configRecord[0].openclawState };
        }
      }
    }

    const isBYOK = Boolean(encryptedApiKey && encryptedApiKey.trim().length > 0);

    // 3. Credit Verification: If creditBalance <= 0 and user is not BYOK, return 402
    if (creditBalance <= 0 && !isBYOK) {
      return NextResponse.json(
        {
          error: 'Payment Required',
          code: 'INSUFFICIENT_CREDITS',
          details: 'Your credit balance is 0. Top up $10 (1,000 credits) or configure your own API key (BYOK) to continue.'
        },
        { status: 402 }
      );
    }

    // 4. Key Decryption: Decrypt stored API key using decryptApiKey or fallback
    let apiKey = '';
    if (isBYOK) {
      try {
        apiKey = decryptApiKey(encryptedApiKey);
      } catch (cryptoErr: any) {
        console.error('[Crypto Error] Failed to decrypt user stored API key:', cryptoErr.message);
        return NextResponse.json(
          { error: 'Failed to decrypt user API key configuration.' },
          { status: 500 }
        );
      }
    } else {
      apiKey = process.env.OPENAI_API_KEY || '';
    }

    // 5. Worker Execution Call to Hetzner VM / Container Backend
    const workerUrl = process.env.OPENCLAW_WORKER_URL || 'http://5.78.197.8:8080';
    const internalSecret = process.env.INTERNAL_API_SECRET || 'your_super_secret_token_123';

    let workerResponse: Response;
    try {
      workerResponse = await fetch(`${workerUrl}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${internalSecret}`,
        },
        body: JSON.stringify({
          userId,
          prompt: userPrompt,
          apiKey,
          systemPrompt: customSystemPrompt || 'You are an autonomous OpenClaw AI agent working on behalf of the user.',
          openclawState
        }),
      });
    } catch (fetchErr: any) {
      console.error('[Worker Connection Error]:', fetchErr.message);
      return NextResponse.json(
        {
          error: 'Backend Worker Connection Failed',
          code: 'WORKER_CONNECTION_FAILED',
          details: `Could not connect to OpenClaw worker at ${workerUrl}. Please verify the container service is running.`
        },
        { status: 503 }
      );
    }

    if (!workerResponse.ok) {
      const errText = await workerResponse.text();
      console.error('[Worker Execution Failed]:', errText);
      return NextResponse.json(
        { error: 'OpenClaw worker execution failed', details: errText },
        { status: workerResponse.status }
      );
    }

    const workerResult = await workerResponse.json();

    // 6. Credit Deduction & Persistent State Sync
    if (workerResult.success) {
      // Deduct 1 credit atomically if user is using platform credits (non-BYOK)
      if (!isBYOK && creditBalance > 0) {
        try {
          await db
            .update(users)
            .set({
              creditBalance: sql`${users.creditBalance} - 1`,
              updatedAt: new Date()
            })
            .where(eq(users.id, userId));
        } catch (dbErr: any) {
          console.error('[Credit Deduction Error]:', dbErr.message);
        }
      }

      // Update openclawState in database if returned by worker
      if (workerResult.updatedState) {
        try {
          const stateStr = typeof workerResult.updatedState === 'string'
            ? workerResult.updatedState
            : JSON.stringify(workerResult.updatedState);

          if (configRecord.length > 0) {
            await db
              .update(agentConfigs)
              .set({ openclawState: stateStr, updatedAt: new Date() })
              .where(eq(agentConfigs.userId, userId));
          } else {
            await db.insert(agentConfigs).values({
              userId,
              openclawState: stateStr,
              updatedAt: new Date()
            });
          }
        } catch (stateErr: any) {
          console.warn('[State Sync Warning]:', stateErr.message);
        }
      }
    }

    // Stream logs & output back to client for real-time console rendering
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        if (workerResult.logs && Array.isArray(workerResult.logs)) {
          for (const logItem of workerResult.logs) {
            controller.enqueue(encoder.encode(`[${logItem.type.toUpperCase()}] ${logItem.description}\n`));
          }
        }
        controller.enqueue(encoder.encode(`\n💬 ${workerResult.output || 'Execution complete.'}\n`));
        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error('Error in chat route handler:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
