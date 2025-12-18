-- Create api_logs table if it doesn't exist
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

CREATE INDEX IF NOT EXISTS idx_api_logs_user_id ON public.api_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_api_logs_created_at ON public.api_logs(created_at);

-- Enable RLS
ALTER TABLE public.api_logs ENABLE ROW LEVEL SECURITY;

-- Create Policies for api_logs
-- (Using DO block to avoid "policy already exists" errors)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'api_logs' AND policyname = 'Service role can do everything on api_logs'
    ) THEN
        CREATE POLICY "Service role can do everything on api_logs" ON public.api_logs USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'api_logs' AND policyname = 'Users can insert their own logs'
    ) THEN
        CREATE POLICY "Users can insert their own logs" ON public.api_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'api_logs' AND policyname = 'Users can view their own logs'
    ) THEN
        CREATE POLICY "Users can view their own logs" ON public.api_logs FOR SELECT USING (auth.uid() = user_id);
    END IF;
END
$$;
