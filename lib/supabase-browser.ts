"use client";

import type { SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;
let initAttempted = false;

export function getBrowserSupabaseClient(): SupabaseClient | null {
  if (initAttempted) {
    return browserClient;
  }

  initAttempted = true;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Guest mode - Supabase not configured
  if (!url || !anonKey) {
    console.log('[Guest Mode] Supabase not configured - running without auth');
    return null;
  }

  // Only import and create client if env vars exist
  import("@supabase/supabase-js").then(({ createClient }) => {
    browserClient = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }).catch(err => {
    console.error('Failed to initialize Supabase:', err);
  });

  return browserClient;
}
