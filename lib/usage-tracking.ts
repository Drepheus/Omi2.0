import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// We use the anon key here. For sensitive operations, ensure RLS policies are set correctly.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function trackUsage(userId: string, usageType: 'chat' | 'image_gen' | 'video_gen') {
  if (!userId) return;
  
  try {
    const { error } = await supabase.rpc('increment_usage', {
      p_user_id: userId,
      p_usage_type: usageType
    });
    
    if (error) {
      console.error('Error tracking usage:', error);
    }
  } catch (e) {
    console.error('Exception tracking usage:', e);
  }
}

export async function logApiCall(data: {
  user_id?: string;
  email?: string;
  endpoint: string;
  request_data?: any;
  response_data?: any;
  status_code: number;
  duration_ms: number;
}) {
  try {
    // We use a separate client or just the same one. 
    // Ensure 'api_logs' table has RLS policy allowing insert.
    const { error } = await supabase.from('api_logs').insert({
      ...data,
      created_at: new Date().toISOString()
    });
    
    if (error) {
      console.error('Error logging API call:', error);
    }
  } catch (e) {
    console.error('Exception logging API call:', e);
  }
}
