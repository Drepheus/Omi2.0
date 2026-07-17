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
    // 1. Authenticate user via BetterAuth (with guest mode fallback)
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
    }

    const body = await req.json();
    const { messages } = body as { messages: any[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    const latestMessage = messages[messages.length - 1];
    const userPrompt = latestMessage.content;

    // 2. Fetch user's credit balance
    let userRecord = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (userRecord.length === 0) {
      // Auto-insert user with 10 free trial credits if missing
      await db.insert(users).values({
        id: userId,
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
        creditBalance: 10,
      });
      userRecord = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    }

    const creditBalance = userRecord[0].creditBalance;

    // 3. Verify user has enough credits
    if (creditBalance <= 0) {
      return NextResponse.json({ error: 'Payment Required' }, { status: 402 });
    }

    // 4. Fetch agent configurations
    const configRecord = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);

    if (configRecord.length === 0 || !configRecord[0].encryptedApiKey) {
      return NextResponse.json({ error: 'Agent not configured. Please set your API Key in the settings first.' }, { status: 400 });
    }

    const encryptedKey = configRecord[0].encryptedApiKey;
    const memoryMd = configRecord[0].memoryMd || '# Core Memories\n- No initial memories recorded.';
    const userMd = configRecord[0].userMd || '# User Profile\n- No user profile preferences recorded.';

    // 5. Decrypt API Key
    let apiKey = '';
    try {
      apiKey = decrypt(encryptedKey);
    } catch (decryptErr) {
      console.error('Failed to decrypt API key:', decryptErr);
      return NextResponse.json({ error: 'Failed to decrypt API Key. Please re-save it.' }, { status: 400 });
    }

    // 6. Make POST request to Railway FastAPI endpoint
    const fastapiUrl = process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000';
    const internalSecret = process.env.INTERNAL_API_SECRET;

    if (!internalSecret) {
      console.error('INTERNAL_API_SECRET is not configured on Next.js frontend');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch(`${fastapiUrl}/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${internalSecret}`,
      },
      body: JSON.stringify({
        user_id: userId,
        session_id: `sess_${Date.now()}`,
        user_prompt: userPrompt,
        api_key: apiKey,
        memory_context: {
          memory_md: memoryMd,
          user_md: userMd,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('FastAPI execute error:', errText);
      return NextResponse.json({ error: 'FastAPI agent execution failed', details: errText }, { status: response.status });
    }

    const { task_id } = await response.json();

    // 7. Polling loop and stream progress to user
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        let completed = false;
        let lastLogLength = 0;
        let attempts = 0;
        const maxAttempts = 180; // 3 minutes timeout

        while (!completed && attempts < maxAttempts) {
          attempts++;
          try {
            const taskResponse = await fetch(`${fastapiUrl}/tasks/${task_id}`, {
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

            if (taskData.status === 'SUCCESS') {
              completed = true;
              
              // Decrement the credit balance in the database by 1
              try {
                await db.update(users)
                  .set({ creditBalance: sql`${users.creditBalance} - 1` })
                  .where(eq(users.id, userId));
              } catch (dbErr) {
                console.error('Failed to decrement credit balance:', dbErr);
              }

              controller.enqueue(encoder.encode('\n\n[Hermes: Task executed successfully. 1 credit charged.]\n'));
              break;
            }

            if (taskData.status === 'FAILURE') {
              completed = true;
              controller.enqueue(encoder.encode(`\n\n[Hermes: Task failed. Details: ${taskData.logs || 'Unknown error'}]\n`));
              break;
            }

          } catch (pollErr: any) {
            console.error('Polling error:', pollErr);
            controller.enqueue(encoder.encode(`[System Error: Polling connection failed: ${pollErr.message}]\n`));
          }

          // Wait 1.5 seconds before polling again
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }

        if (attempts >= maxAttempts) {
          controller.enqueue(encoder.encode('\n\n[System Timeout: The agent reasoning took too long. Please check your deployments console.]\n'));
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
