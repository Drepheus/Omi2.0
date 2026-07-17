import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { db } from '@/src/db';
import { agentConfigs, users } from '@/src/db/schema';
import { encrypt } from '@/lib/crypto';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
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
    const { apiKey, memoryMd, userMd } = body as {
      apiKey: string;
      memoryMd: string;
      userMd: string;
    };

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key is required' }, { status: 400 });
    }

    const encryptedKey = encrypt(apiKey);

    // Make sure user exists in database (especially for guest fallback)
    const userExists = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (userExists.length === 0) {
      await db.insert(users).values({
        id: userId,
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
        creditBalance: 10, // free trial credits
      });
    }

    // Check if configuration already exists
    const existing = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);

    if (existing.length > 0) {
      // Update
      await db.update(agentConfigs)
        .set({
          encryptedApiKey: encryptedKey,
          memoryMd: memoryMd || '',
          userMd: userMd || '',
          updatedAt: new Date(),
        })
        .where(eq(agentConfigs.userId, userId));
    } else {
      // Insert
      await db.insert(agentConfigs).values({
        userId,
        encryptedApiKey: encryptedKey,
        memoryMd: memoryMd || '',
        userMd: userMd || '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return NextResponse.json({ success: true, message: 'Configuration saved successfully' });
  } catch (error: any) {
    console.error('Error saving agent config:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    let userId = 'usr_guest';

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (session) {
      userId = session.user.id;
    }

    const config = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);

    if (config.length === 0) {
      return NextResponse.json({ config: null });
    }

    return NextResponse.json({
      config: {
        hasApiKey: !!config[0].encryptedApiKey,
        memoryMd: config[0].memoryMd,
        userMd: config[0].userMd,
      }
    });
  } catch (error: any) {
    console.error('Error fetching agent config:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
