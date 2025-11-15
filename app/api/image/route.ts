import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  return NextResponse.json({ error: "Image generation not yet migrated" }, { status: 501 });
}
