import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  return NextResponse.json({ error: "Web search not yet migrated" }, { status: 501 });
}
