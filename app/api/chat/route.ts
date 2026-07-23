import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { db } from '@/src/db';
import { users, agentConfigs } from '@/src/db/schema';
import { decrypt } from '@/lib/crypto';
import { eq, sql } from 'drizzle-orm';

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // 1. Authenticate user via BetterAuth (with guest mode fallback for local development)
    let userId = 'usr_guest';
    let email = 'guest@example.com';
    let name = 'Guest User';

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (session) {
      userId = session.user.id;
      email = session.user.email;
      name = session.user.name || 'User';
    } else if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Unauthorized. Please sign in to access agent execution.' }, { status: 401 });
    }

    const body = await req.json();
    const { messages, agentId } = body as { messages: any[]; agentId?: string };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const latestMessage = messages[messages.length - 1];
    const userPrompt = latestMessage.content || '';

    // 2. Fetch user's credit balance (with local DB error fallback)
    let creditBalance = 10;
    try {
      let userRecord = await db.select().from(users).where(eq(users.id, userId)).limit(1);
      if (userRecord.length === 0) {
        // Auto-initialize new user record with 10 starting credits if not present
        await db.insert(users).values({
          id: userId,
          name,
          email,
          createdAt: new Date(),
          updatedAt: new Date(),
          creditBalance: 10,
        });
      } else {
        creditBalance = userRecord[0].creditBalance;
      }
    } catch (dbErr: any) {
      console.warn('[DB Fallback] Could not query user credit balance from database, using simulated balance (10):', dbErr.message);
    }

    // 3. Verify user has credit balance > 0
    if (creditBalance <= 0) {
      return NextResponse.json({
        error: 'Payment Required',
        code: 'INSUFFICIENT_CREDITS',
        details: 'Your credit balance is 0. Top up $10 (1,000 credits) to continue agent execution turns.'
      }, { status: 402 });
    }

    // 4. Fetch agent configuration, encrypted API key, and openclaw state from database
    let encryptedKey = '';
    let openclawState = JSON.stringify({ activeAgent: 'openclaw', framework: 'OpenClaw Node SDK' });

    try {
      const configRecord = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);
      if (configRecord.length > 0) {
        if (configRecord[0].encryptedApiKey) {
          encryptedKey = configRecord[0].encryptedApiKey;
        }
        if (configRecord[0].openclawState) {
          openclawState = configRecord[0].openclawState;
        }
      }
    } catch (dbErr: any) {
      console.warn('[DB Fallback] Could not fetch agent config from database:', dbErr.message);
    }

    // 5. Decrypt API Key server-side using ENCRYPTION_KEY (with local dev fallback)
    let apiKey = process.env.OPENAI_API_KEY || 'simulated-dev-key';
    if (encryptedKey) {
      try {
        apiKey = decrypt(encryptedKey);
      } catch (cryptoErr: any) {
        console.warn('[Crypto Warning] Could not decrypt user API key, using dev key fallback:', cryptoErr.message);
        apiKey = process.env.OPENAI_API_KEY || 'simulated-dev-key';
      }
    }

    // 6. Make secure POST request exclusively to Railway OpenClaw Worker URL
    const workerUrl = process.env.RAILWAY_OPENCLAW_WORKER_URL || 'http://localhost:3001';
    const internalSecret = process.env.INTERNAL_API_SECRET || 'dev_internal_secret_key_123';

    let response: Response;
    try {
      response = await fetch(`${workerUrl}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${internalSecret}`,
        },
        body: JSON.stringify({
          apiKey,
          prompt: userPrompt,
          openclawState,
          userId,
          sessionId: `sess_${Date.now()}`,
          agentId: agentId || 'openclaw',
        }),
      });
    } catch (fetchErr: any) {
      return NextResponse.json({
        error: 'Backend Worker Connection Failed',
        code: 'WORKER_CONNECTION_FAILED',
        details: `Could not connect to OpenClaw Node worker at ${workerUrl}. Please verify the Railway worker container is running.`
      }, { status: 503 });
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenClaw Worker execute error:', errText);
      return NextResponse.json({ error: 'OpenClaw worker execution failed', details: errText }, { status: response.status });
    }

    const { task_id } = await response.json();

    // 7. Stream progress and decrement credit balance upon completion
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        let completed = false;
        let lastLogLength = 0;
        let attempts = 0;
        const maxAttempts = 180; // 3 minute timeout limit

        while (!completed && attempts < maxAttempts) {
          attempts++;
          try {
            const taskResponse = await fetch(`${workerUrl}/tasks/${task_id}`, {
              headers: {
                'Authorization': `Bearer ${internalSecret}`,
              },
            });

            if (!taskResponse.ok) {
              controller.enqueue(encoder.encode(`[System Error: Failed to poll task status: ${taskResponse.statusText}]\n`));
              completed = true;
              break;
            }

            const taskData = await taskResponse.json();
            const logs = taskData.logs || '';

            if (logs.length > lastLogLength) {
              const newLogs = logs.slice(lastLogLength);
              controller.enqueue(encoder.encode(newLogs));
              lastLogLength = logs.length;
            }

            if (taskData.openclawState) {
              // Update persistent state back in DB if worker updated it
              try {
                await db.update(agentConfigs)
                  .set({ openclawState: typeof taskData.openclawState === 'string' ? taskData.openclawState : JSON.stringify(taskData.openclawState), updatedAt: new Date() })
                  .where(eq(agentConfigs.userId, userId));
              } catch (dbStateErr: any) {
                console.warn('State sync warning:', dbStateErr.message);
              }
            }

            if (taskData.status === 'SUCCESS') {
              completed = true;
              
              // Decrement user credit balance in database by 1
              try {
                await db.update(users)
                  .set({ creditBalance: sql`${users.creditBalance} - 1` })
                  .where(eq(users.id, userId));
              } catch (dbErr: any) {
                console.error('Failed to decrement credit balance:', dbErr.message);
              }

              controller.enqueue(encoder.encode('\n\n[OpenClaw Worker: Task executed successfully. 1 credit charged.]\n'));
              break;
            }

            if (taskData.status === 'FAILURE') {
              completed = true;
              controller.enqueue(encoder.encode(`\n\n[OpenClaw Worker: Task failed. Details: ${taskData.logs || 'Unknown error'}]\n`));
              break;
            }

          } catch (pollErr: any) {
            console.error('Polling error:', pollErr);
            controller.enqueue(encoder.encode(`[System Error: Polling connection failed: ${pollErr.message}]\n`));
          }

          // Poll every 1.5 seconds
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }

        if (attempts >= maxAttempts) {
          controller.enqueue(encoder.encode('\n\n[System Timeout: OpenClaw execution exceeded timeout limit.]\n'));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error('Error in chat route:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
