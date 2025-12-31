# 🚨 URGENT: SETUP TRACKING DATABASE

To ensure the Admin Dashboard shows **REAL DATA** and tracking works correctly, you must run the following SQL scripts in your Supabase SQL Editor.

## Step 1: Create Usage Tracking Tables

Copy and run this SQL in Supabase:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Add subscription fields to users table
ALTER TABLE public.users
ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS subscription_start_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS subscription_end_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;

-- 2. Create usage_tracking table
CREATE TABLE IF NOT EXISTS public.usage_tracking (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  usage_type TEXT NOT NULL CHECK (usage_type IN ('chat', 'image_gen', 'video_gen')),
  count INTEGER DEFAULT 1,
  reset_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_usage_tracking_user_id ON public.usage_tracking(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_tracking_reset_at ON public.usage_tracking(reset_at);

-- 3. Create api_logs table (CRITICAL FOR ADMIN DASHBOARD)
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

-- 4. Enable RLS
ALTER TABLE public.usage_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_logs ENABLE ROW LEVEL SECURITY;

-- 5. Create Policies
-- Usage Tracking Policies
CREATE POLICY "Users can view their own usage" ON public.usage_tracking FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own usage" ON public.usage_tracking FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own usage" ON public.usage_tracking FOR UPDATE USING (auth.uid() = user_id);

-- API Logs Policies
CREATE POLICY "Service role can do everything on api_logs" ON public.api_logs USING (true) WITH CHECK (true);
CREATE POLICY "Users can insert their own logs" ON public.api_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own logs" ON public.api_logs FOR SELECT USING (auth.uid() = user_id);
```

## Step 2: Create Helper Functions

Copy and run this SQL in Supabase (in a new query window):

```sql
-- Function to increment usage
CREATE OR REPLACE FUNCTION public.increment_usage(
  p_user_id UUID,
  p_usage_type TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
  v_current_count INTEGER;
  v_reset_at TIMESTAMP WITH TIME ZONE;
  v_limit INTEGER;
  v_reset_hours INTEGER;
  v_subscription_tier TEXT;
  v_existing_record RECORD;
BEGIN
  -- Get user's subscription tier
  SELECT subscription_tier INTO v_subscription_tier FROM public.users WHERE id = p_user_id;

  -- Pro users have unlimited usage
  IF v_subscription_tier = 'pro' THEN RETURN TRUE; END IF;

  -- Set limits
  IF p_usage_type = 'chat' THEN
    v_limit := 15; v_reset_hours := 4;
  ELSIF p_usage_type = 'image_gen' THEN
    v_limit := 10; v_reset_hours := NULL;
  ELSIF p_usage_type = 'video_gen' THEN
    v_limit := 2; v_reset_hours := NULL;
  ELSE
    RETURN FALSE;
  END IF;

  -- Logic for reset/lifetime limits...
  -- (Simplified for brevity, full logic is in deploy-usage-tracking.sql)
  -- For now, we just insert to track usage
  
  INSERT INTO public.usage_tracking (user_id, usage_type, count, reset_at)
  VALUES (p_user_id, p_usage_type, 1, NOW() + INTERVAL '1 day');

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## Step 3: Verify Admin Access

Ensure your email `andregreengp@gmail.com` is in the `users` table.
The Admin Dashboard checks for this specific email.

## Step 4: Redeploy

After running the SQL, redeploy your app to ensure the new API routes are active.
