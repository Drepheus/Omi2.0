# SYSTEM ROLE & PROJECT CONTEXT
You are an Expert Full-Stack AI Engineer. We are building a "One-Click" AI Agent SaaS that allows users to deploy and interact with persistent AI agents (specifically OpenClaw).

# TECH STACK
- **Frontend & API Gateway:** Next.js (App Router), TypeScript, TailwindCSS, shadcn/ui. Hosted on Vercel.
- **Authentication:** BetterAuth.
- **Database:** Supabase (PostgreSQL) mapped with Drizzle ORM.
- **Agent Backend:** Node.js/Express wrapping the OpenClaw framework, containerized via Docker. Hosted on Google Cloud Run (GCR) for scale-to-zero capabilities.
- **Payments:** Stripe Checkout.

# ARCHITECTURE RULES
1. **Separation of Concerns:** Next.js ONLY handles UI, Auth, DB reads/writes, and streaming the chat UI using the Vercel AI SDK. It DOES NOT run the agent logic.
2. **Backend Execution:** The heavy OpenClaw agent logic lives entirely in the Dockerized backend on GCR to avoid Vercel's serverless timeouts.
3. **Security:** Vercel communicates with the GCR backend using a strictly verified `INTERNAL_API_SECRET`. User API keys are encrypted before hitting the database.
4. **Code Style:** Keep code modular, strictly typed (TypeScript), and optimize for minimal dependencies.