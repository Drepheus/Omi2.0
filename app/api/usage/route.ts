import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    const body = await req.json();
    const { userId, usageType } = body;

    if (!userId || !usageType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify the user matches the session (security check)
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'check') {
      // Call the RPC function can_user_perform_action
      const { data, error } = await supabase.rpc('can_user_perform_action', {
        p_user_id: userId,
        p_usage_type: usageType
      });

      if (error) throw error;

      // The RPC returns a single row with columns matching the interface
      // But RPC returns an array of rows usually, or a single object if single() is used?
      // Let's assume it returns an array of objects.
      // The RPC signature: RETURNS TABLE (can_perform BOOLEAN, current_usage INTEGER, usage_limit INTEGER, reset_at TIMESTAMP)
      
      const result = Array.isArray(data) ? data[0] : data;
      
      // Check if user is pro (we can get this from the RPC result if we modified it, or fetch user)
      // Actually the RPC handles the logic.
      // We need to map the RPC result to UsageCheckResult interface
      
      return NextResponse.json({
        canPerform: result.can_perform,
        isPro: result.usage_limit > 1000, // Heuristic based on the 999999 limit set in SQL
        currentUsage: result.current_usage,
        usageLimit: result.usage_limit,
        resetAt: result.reset_at
      });
    } 
    
    else if (action === 'increment') {
      // Call the RPC function increment_usage
      const { data, error } = await supabase.rpc('increment_usage', {
        p_user_id: userId,
        p_usage_type: usageType
      });

      if (error) throw error;

      // increment_usage returns BOOLEAN (true if success, false if limit reached)
      if (data === true) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json({ success: false, limitReached: true }, { status: 403 });
      }
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Usage API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
