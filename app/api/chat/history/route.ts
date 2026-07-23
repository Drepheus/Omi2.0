import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { db } from '@/src/db';
import { agentSessions, agentMessages } from '@/src/db/schema';
import { eq, desc } from 'drizzle-orm';

// In-memory fallback history store when DB is offline
const inMemorySessions: Record<string, Array<{ id: string; agentId: string; title: string; createdAt: string }>> = {};
const inMemoryMessages: Record<string, Array<{ id: string; role: string; content: string; reasoning?: string; createdAt: string }>> = {};

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

  const { searchParams } = new URL(req.url);
  const agentId = searchParams.get('agentId') || 'openclaw';

  try {
    const sessionsList = await db.select()
      .from(agentSessions)
      .where(eq(agentSessions.userId, userId))
      .orderBy(desc(agentSessions.updatedAt));

    const agentSessionsFiltered = sessionsList.filter(s => s.agentId === agentId);
    
    if (agentSessionsFiltered.length > 0) {
      const activeSession = agentSessionsFiltered[0];
      const messagesList = await db.select()
        .from(agentMessages)
        .where(eq(agentMessages.sessionId, activeSession.id))
        .orderBy(agentMessages.createdAt);

      return NextResponse.json({
        sessions: agentSessionsFiltered,
        activeSessionId: activeSession.id,
        messages: messagesList
      });
    }
  } catch (err: any) {
    console.warn('[History DB Fallback] Fetching history from memory:', err.message);
  }

  // Fallback to local memory history
  const userSessions = inMemorySessions[userId] || [];
  const filtered = userSessions.filter(s => s.agentId === agentId);
  const activeSessionId = filtered.length > 0 ? filtered[0].id : null;
  const messages = activeSessionId ? (inMemoryMessages[activeSessionId] || []) : [];

  return NextResponse.json({
    sessions: filtered,
    activeSessionId,
    messages
  });
}

export async function POST(req: Request) {
  let userId = 'usr_guest';
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (session) {
      userId = session.user.id;
    }
  } catch {}

  const body = await req.json();
  const { sessionId, agentId, role, content, reasoning, title } = body as {
    sessionId?: string;
    agentId?: string;
    role: string;
    content: string;
    reasoning?: string;
    title?: string;
  };

  const targetAgentId = agentId || 'openclaw';
  const targetSessionId = sessionId || `sess_${targetAgentId}_${Date.now()}`;
  const now = new Date();

  // Update in-memory fallback
  if (!inMemorySessions[userId]) {
    inMemorySessions[userId] = [];
  }

  let sess = inMemorySessions[userId].find(s => s.id === targetSessionId);
  if (!sess) {
    sess = {
      id: targetSessionId,
      agentId: targetAgentId,
      title: title || content.slice(0, 30) || 'New Conversation',
      createdAt: now.toISOString()
    };
    inMemorySessions[userId].unshift(sess);
  }

  if (!inMemoryMessages[targetSessionId]) {
    inMemoryMessages[targetSessionId] = [];
  }

  const msgId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  inMemoryMessages[targetSessionId].push({
    id: msgId,
    role,
    content,
    reasoning,
    createdAt: now.toISOString()
  });

  // Try DB insertion
  try {
    const existingSess = await db.select().from(agentSessions).where(eq(agentSessions.id, targetSessionId)).limit(1);
    if (existingSess.length === 0) {
      await db.insert(agentSessions).values({
        id: targetSessionId,
        userId,
        agentId: targetAgentId,
        title: title || content.slice(0, 30) || 'New Conversation',
        createdAt: now,
        updatedAt: now,
      });
    } else {
      await db.update(agentSessions)
        .set({ updatedAt: now })
        .where(eq(agentSessions.id, targetSessionId));
    }

    await db.insert(agentMessages).values({
      id: msgId,
      sessionId: targetSessionId,
      role,
      content,
      reasoning: reasoning || null,
      createdAt: now,
    });
  } catch (dbErr: any) {
    console.warn('[History DB Fallback] Saved to memory store:', dbErr.message);
  }

  return NextResponse.json({
    success: true,
    sessionId: targetSessionId,
    messageId: msgId
  });
}
