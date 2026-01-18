"use client";

import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

export function getBrowserSupabaseClient(): SupabaseClient {
  if (!browserClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // During build time, env vars may not be available
    // Return a placeholder that will be properly initialized at runtime
    if (!url || !anonKey) {
      // Check if we're in build/SSG mode vs actual runtime
      if (typeof window === 'undefined') {
        // Server-side during build - return a mock that won't be used
        // The real client will be created on the client side
        console.warn('Supabase environment variables not found during build. Client will initialize at runtime.');
        return null as unknown as SupabaseClient;
      }
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
      );
    }

    browserClient = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }

  return browserClient!;
}
