// Usage tracking disabled for deployment - guest mode only

export async function trackUsage(userId: string, usageType: 'chat' | 'image_gen' | 'video_gen') {
  // Disabled - no Supabase connection
  console.log(`[Guest Mode] Usage tracking disabled: ${usageType}`);
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
  // Disabled - no Supabase connection
  console.log(`[Guest Mode] API log disabled: ${data.endpoint} - ${data.status_code}`);
}
