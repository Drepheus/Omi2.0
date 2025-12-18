-- ========================================
-- API LOGS SETUP - Deploy to Supabase
-- ========================================

-- Create api_logs table
CREATE TABLE IF NOT EXISTS public.api_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  email TEXT,
  endpoint TEXT NOT NULL,
  request_data JSONB,
  response_data JSONB,
  status_code INTEGER,
  duration_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_api_logs_user_id ON public.api_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_api_logs_endpoint ON public.api_logs(endpoint);
CREATE INDEX IF NOT EXISTS idx_api_logs_created_at ON public.api_logs(created_at);

-- Enable RLS
ALTER TABLE public.api_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Admins can view all logs (assuming admin check is done in app or via a role)
-- For now, we'll allow authenticated users to insert their own logs (via server-side client)
-- But typically logs are inserted by the service role key, so RLS might not apply for insertion if using service role.
-- If using authenticated client, we need insert policy.

CREATE POLICY "Service role can do everything on api_logs"
  ON public.api_logs
  USING (true)
  WITH CHECK (true);

-- Allow users to view their own logs (optional)
CREATE POLICY "Users can view their own logs"
  ON public.api_logs FOR SELECT
  USING (auth.uid() = user_id);
