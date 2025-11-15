import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  return NextResponse.json({ error: "RAG query not yet migrated" }, { status: 501 });
}
