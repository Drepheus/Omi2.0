# Omi AI - Supabase & Vercel Setup Guide

## ✅ Step 1: Install Dependencies (COMPLETED)
Supabase packages have been installed.

## ✅ Step 2: Environment Variables (COMPLETED)
Created `.env.local` file. **ACTION REQUIRED:**
- Open `.env.local` in your editor
- Copy your **anon/public key** from the Supabase screenshot and replace `your_anon_key_here`

## ✅ Step 3: Supabase Client (COMPLETED)
Created `src/supabaseClient.ts` with TypeScript types.

## ✅ Step 4: Database Schema (READY TO RUN)
Created `supabase-schema.sql`. **ACTION REQUIRED:**

### Run this in Supabase:
1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/cnvsdbjsjwqmpugmpmap
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase-schema.sql`
5. Paste into the SQL editor
6. Click **Run** (or press Ctrl+Enter)

This will create:
- ✅ `users` table (synced with auth.users)
- ✅ `conversations` table (chat history)
- ✅ `messages` table (all messages)
- ✅ Row Level Security policies (users only see their own data)
- ✅ Automatic triggers for timestamps
- ✅ Auto-create user profile on signup

---

## 🔐 Step 5: Configure Google OAuth

**ACTION REQUIRED - Follow these steps:**

### A. Get Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if prompted
6. Application type: **Web application**
7. Add authorized redirect URIs:
   ```
   https://cnvsdbjsjwqmpugmpmap.supabase.co/auth/v1/callback
   ```
8. Copy your **Client ID** and **Client Secret**

### B. Configure in Supabase
1. Go to Supabase dashboard: https://supabase.com/dashboard/project/cnvsdbjsjwqmpugmpmap
2. Click **Authentication** in left sidebar
3. Click **Providers** tab
4. Find **Google** provider
5. Toggle it **ON**
6. Paste your **Client ID** and **Client Secret**
7. Click **Save**

---

## 🎨 Step 6: Update Frontend (NEXT)

I'll now update `SplashPage.tsx` to:
- Add Google login button
- Handle authentication state
- Save/load messages from database
- Show user profile

---

## 🚀 Step 7: Deploy to Vercel (FINAL)

After testing locally, we'll:
1. Push code to GitHub
2. Connect Vercel to your repo
3. Add environment variables in Vercel
4. Deploy! 🎉

---

## 📝 Next Steps:
1. ✅ Copy your Supabase anon key to `.env.local`
2. ✅ Run the SQL schema in Supabase SQL Editor
3. ✅ Set up Google OAuth (follow instructions above)
4. ⏳ Let me know when ready - I'll update the frontend code!
