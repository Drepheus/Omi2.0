# Sentry Error Tracking Setup

Sentry automatically captures all errors and logs from your app (both frontend and backend) and sends them to a dashboard where you (or your AI agent) can view them.

## Setup Steps

### 1. Create Free Sentry Account
1. Go to https://sentry.io/signup/
2. Sign up with GitHub (easiest)
3. Create a new project
4. Select "Node.js" for backend
5. Copy your DSN (looks like: `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`)

### 2. Add Sentry DSN to Vercel Environment Variables
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add two variables:
  - `SENTRY_DSN` = `your-sentry-dsn-here` (for backend)
  - `NEXT_PUBLIC_SENTRY_DSN` = `your-sentry-dsn-here` (for frontend)
5. Redeploy your app

### 3. View Errors in Sentry
- Go to https://sentry.io/
- Click on your project
- All errors will appear in real-time with:
  - Full stack traces
  - User context
  - Request details
  - Breadcrumbs (what happened before the error)

### 4. Access Logs via Vercel CLI (Alternative)
```bash
# Login to Vercel
vercel login

# View real-time logs
vercel logs

# View logs for specific deployment
vercel logs [deployment-url]

# Follow logs in real-time
vercel logs --follow
```

### 5. Best Practice: Use Both
- **Sentry**: For error tracking and debugging
- **Vercel Logs**: For general application logs and performance

## How It Works

### Frontend Errors
Every error in React is automatically sent to Sentry with:
- Component stack trace
- User session replay (you can literally watch what user did before error)
- Browser info

### Backend Errors
Every error in API endpoints is sent to Sentry with:
- Request body/headers
- User ID
- Database query that failed
- Full context

## AI Agent Access

Your Copilot agent can access logs via:
1. **Vercel API**: `GET https://api.vercel.com/v2/deployments/:id/events`
2. **Sentry API**: `GET https://sentry.io/api/0/projects/:org/:project/issues/`

You can give the agent a Sentry auth token to automatically pull errors.

## What You've Already Set Up

✅ Sentry installed (`@sentry/node`, `@sentry/browser`)
✅ Frontend Sentry config (`src/sentry.ts`)
✅ Backend Sentry config (`api/sentry.ts`)
✅ Upload endpoint integrated with Sentry
✅ Vercel CLI installed for log access

## Next Steps

1. Get your Sentry DSN from sentry.io
2. Add it to Vercel environment variables
3. Redeploy
4. Errors will automatically appear in Sentry dashboard

## Example: Testing It

Try uploading a document - any errors will now appear at:
https://sentry.io/issues/

You'll see:
- "Failed to create document record" with full context
- User ID who got the error
- The exact botId and fileName that caused it
- Complete stack trace
