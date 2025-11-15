# Fix OAuth "Try Again" Error on Vercel Deployment

## Problem
After deploying to Vercel, Google OAuth redirects to `localhost:3000` instead of your Vercel URL, causing a "try again" error page.

## Root Cause
Your Google Cloud Console has `http://localhost:3000` configured as a redirect URI instead of your Vercel deployment URL.

## Solution Steps

### 1. Get Your Vercel Deployment URL
- Go to your Vercel dashboard: https://vercel.com/dashboard
- Find your project "Omi-AI"
- Copy the production URL (e.g., `https://omi-ai-xxx.vercel.app`)

### 2. Update Google Cloud Console

1. Go to https://console.cloud.google.com/
2. Select your project
3. Navigate to **APIs & Services** → **Credentials**
4. Click on your OAuth 2.0 Client ID
5. In **Authorized JavaScript origins**, add:
   ```
   https://omi-ai-xxx.vercel.app
   ```
   (Replace with your actual Vercel URL)

6. In **Authorized redirect URIs**, add:
   ```
   https://omi-ai-xxx.vercel.app
   https://cnysdbjajxnpmrugnpme.supabase.co/auth/v1/callback
   ```
   
7. **Important**: Remove or keep `http://localhost:5175` for local development only

8. Click **Save**

### 3. Update Supabase Configuration

1. Go to https://supabase.com/dashboard/project/cnysdbjajxnpmrugnpme
2. Navigate to **Authentication** → **URL Configuration**
3. Update **Site URL** to:
   ```
   https://omi-ai-xxx.vercel.app
   ```

4. In **Redirect URLs**, add:
   ```
   https://omi-ai-xxx.vercel.app/**
   http://localhost:5175/** (for local development)
   ```

5. Click **Save**

### 4. Test the Fix

1. Visit your Vercel URL: `https://omi-ai-xxx.vercel.app`
2. Click "Start" → "Sign in with Google"
3. Select your Google account and accept permissions
4. You should now be redirected back to your Vercel app successfully!

## Current URLs in Your Callback

From your error URL, I can see:
```
http://localhost:3000/#access_token=eyJ...
```

This means Google is redirecting to `localhost:3000`, but your app should be on your Vercel URL.

## Debug Checklist

✅ **Vercel environment variables set correctly**:
- `NEXT_PUBLIC_SUPABASE_URL` = `https://cnysdbjajxnpmrugnpme.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (your anon key)

⚠️ **Google Cloud Console needs update**:
- Replace `localhost:3000` with your Vercel URL in Authorized JavaScript origins
- Replace `localhost:3000` with your Vercel URL in Authorized redirect URIs

⚠️ **Supabase needs update**:
- Set Site URL to your Vercel URL
- Add your Vercel URL to Redirect URLs

## Expected Behavior After Fix

1. User clicks "Sign in with Google" on Vercel deployment
2. User is redirected to Google sign-in page
3. User selects account and accepts permissions
4. Google redirects to: `https://omi-ai-xxx.vercel.app/#access_token=...`
5. App processes the OAuth callback and logs user in
6. User sees chat interface

## Guest Mode Issue

If guest mode AI is not responding, check browser console for:
1. Gemini API calls being made
2. Any CORS errors
3. API key validity
4. Network requests in DevTools

The code now includes extensive logging - open DevTools Console to see:
- "handleSubmit called" when you send a message
- "Calling Gemini API..." before API request
- "Got AI Response" with the response content
- Any errors will be logged and shown in an alert
