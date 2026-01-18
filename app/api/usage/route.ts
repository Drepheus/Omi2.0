import { NextResponse } from 'next/server';

// Guest mode - usage tracking disabled for deployment
// export const runtime = 'edge';

export async function POST(req: Request) {
  // Guest mode - return success without checking Supabase
  return NextResponse.json({
    canPerform: true,
    isPro: false,
    currentUsage: 0,
    usageLimit: 100,
    success: true
  });
}
