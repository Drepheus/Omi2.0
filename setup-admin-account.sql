-- Set admin account to Ultra tier with unlimited access
-- Admin email: andregreengp@gmail.com

-- First, find the user ID for the admin account
DO $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Get the admin user ID
  SELECT id INTO admin_user_id
  FROM auth.users
  WHERE email = 'andregreengp@gmail.com';

  -- If user exists, set up Ultra subscription
  IF admin_user_id IS NOT NULL THEN
    
    -- Insert or update subscription to Ultra tier
    INSERT INTO user_subscriptions (
      user_id,
      tier,
      stripe_customer_id,
      stripe_subscription_id,
      status,
      created_at,
      updated_at
    ) VALUES (
      admin_user_id,
      'ultra',
      'admin_override',
      'admin_override',
      'active',
      NOW(),
      NOW()
    )
    ON CONFLICT (user_id) 
    DO UPDATE SET
      tier = 'ultra',
      status = 'active',
      updated_at = NOW();

    -- Set usage tracking with unlimited limits (high numbers)
    INSERT INTO usage_tracking (
      user_id,
      chats,
      images,
      videos,
      web_searches,
      period_start,
      period_end,
      created_at,
      updated_at
    ) VALUES (
      admin_user_id,
      0,
      0,
      0,
      0,
      date_trunc('month', CURRENT_DATE),
      date_trunc('month', CURRENT_DATE) + INTERVAL '1 month',
      NOW(),
      NOW()
    )
    ON CONFLICT (user_id, period_start)
    DO UPDATE SET
      updated_at = NOW();

    RAISE NOTICE 'Admin account % set to Ultra tier with unlimited access', admin_user_id;
  ELSE
    RAISE NOTICE 'Admin user with email andregreengp@gmail.com not found. Please sign up first.';
  END IF;
END $$;

-- Create a function to always give admin unlimited access (bypass all limits)
CREATE OR REPLACE FUNCTION is_admin_user(check_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = check_user_id
    AND email = 'andregreengp@gmail.com'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add comment for documentation
COMMENT ON FUNCTION is_admin_user IS 'Returns true if user is admin (andregreengp@gmail.com) - bypasses all feature limits';
