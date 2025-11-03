-- Test script to verify admin setup
-- Run this in Supabase SQL Editor to check your admin account

-- 1. Check if you exist in auth.users
SELECT 
  id, 
  email, 
  created_at,
  email_confirmed_at
FROM auth.users 
WHERE email = 'andregreengp@gmail.com';

-- 2. Check if you exist in public.users with correct tier
SELECT 
  id,
  email,
  subscription_tier,
  subscription_status,
  stripe_customer_id,
  created_at
FROM public.users
WHERE id = (SELECT id FROM auth.users WHERE email = 'andregreengp@gmail.com');

-- 3. Test if is_admin_user() function works
-- This should return TRUE when you run it while logged in as admin
SELECT is_admin_user() as am_i_admin;

-- 4. Check if the constraint allows 'ultra'
SELECT 
  con.conname AS constraint_name,
  pg_get_constraintdef(con.oid) AS constraint_definition
FROM pg_constraint con
JOIN pg_class rel ON rel.oid = con.conrelid
JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
WHERE rel.relname = 'users'
  AND con.conname = 'users_subscription_tier_check';

-- 5. Check usage tracking for your account
SELECT 
  usage_type,
  SUM(count) as total_usage,
  COUNT(*) as number_of_records
FROM usage_tracking
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'andregreengp@gmail.com')
GROUP BY usage_type;

-- Expected Results:
-- Query 1: Should show your email exists in auth.users
-- Query 2: Should show subscription_tier = 'ultra'
-- Query 3: Should return TRUE
-- Query 4: Should show constraint includes 'ultra'
-- Query 5: Shows your usage history
