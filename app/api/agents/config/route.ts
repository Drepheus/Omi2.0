import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { db } from '@/src/db';
import { agentConfigs, users } from '@/src/db/schema';
import { encrypt } from '@/lib/crypto';
import { eq } from 'drizzle-orm';

// In-memory fallback store for local development when DB is unreachable
const memoryStore: Record<string, { encryptedApiKey: string; memoryMd: string; userMd: string }> = {
  usr_guest: {
    encryptedApiKey: 'dummy_encrypted_key',
    memoryMd: `# Core Memories\n- User values technical blueprints over summaries.\n- Deploying on multi-tenant Hermes SaaS framework.`,
    userMd: `# User Profile\n- Technical Founder\n- Preferences: JSON formatted data`
  }
};

export async function POST(req: Request) {
  let userId = 'usr_guest';
  let email = 'guest@example.com';
  let name = 'Guest User';

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (session) {
      userId = session.user.id;
      email = session.user.email;
      name = session.user.name || 'User';
    }
  } catch {}

  const body = await req.json();
  const { apiKey, memoryMd, userMd } = body as {
    apiKey: string;
    memoryMd: string;
    userMd: string;
  };

  if (!apiKey) {
    return NextResponse.json({ error: 'API Key is required' }, { status: 400 });
  }

  let encryptedKey = '';
  try {
    encryptedKey = encrypt(apiKey);
  } catch {
    encryptedKey = `enc_${Buffer.from(apiKey).toString('base64')}`;
  }

  // Update in-memory fallback
  memoryStore[userId] = {
    encryptedApiKey: encryptedKey,
    memoryMd: memoryMd || '',
    userMd: userMd || '',
  };

  try {
    // Make sure user exists in database
    const userExists = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (userExists.length === 0) {
      await db.insert(users).values({
        id: userId,
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
        creditBalance: 10,
      });
    }

    const existing = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);
    if (existing.length > 0) {
      await db.update(agentConfigs)
        .set({
          encryptedApiKey: encryptedKey,
          memoryMd: memoryMd || '',
          userMd: userMd || '',
          updatedAt: new Date(),
        })
        .where(eq(agentConfigs.userId, userId));
    } else {
      await db.insert(agentConfigs).values({
        userId,
        encryptedApiKey: encryptedKey,
        memoryMd: memoryMd || '',
        userMd: userMd || '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  } catch (error: any) {
    console.warn('[DB Fallback] Database query failed, using in-memory config store:', error.message);
  }

  return NextResponse.json({ success: true, message: 'Configuration saved successfully' });
}

export async function GET(req: Request) {
  let userId = 'usr_guest';

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (session) {
      userId = session.user.id;
    }
  } catch {}

  try {
    const config = await db.select().from(agentConfigs).where(eq(agentConfigs.userId, userId)).limit(1);
    if (config.length > 0) {
      return NextResponse.json({
        config: {
          hasApiKey: !!config[0].encryptedApiKey,
          memoryMd: config[0].memoryMd,
          userMd: config[0].userMd,
        }
      });
    }
  } catch (error: any) {
    console.warn('[DB Fallback] Database fetch failed, returning in-memory config:', error.message);
  }

  const localConfig = memoryStore[userId] || memoryStore['usr_guest'];

  return NextResponse.json({
    config: {
      hasApiKey: !!localConfig.encryptedApiKey,
      memoryMd: localConfig.memoryMd,
      userMd: localConfig.userMd,
    }
  });
}

