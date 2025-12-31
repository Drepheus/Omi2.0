# Omi AI - Tech Stack & Infrastructure

## 📋 Executive Summary
Advanced AI Visual Studio built on Next.js, deployed on Google Cloud Run, using Supabase for data/auth and multiple AI models (Veo, Imagen, Replicate) for media generation.

---

## 🏗️ Architecture Overview

### Deployment Model: **Containerized Serverless**
- **Platform**: Google Cloud Run
- **Container**: Docker (Node.js 18-alpine)
- **Scaling**: Auto-scaling 0 to N instances

### Core Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (Google OAuth)

---

## 💻 Frontend Stack

### Styling & Animation
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: React animations
- **GSAP**: Advanced animations
- **Three.js**: WebGL visual effects

---

## 🔧 Backend Stack

### AI Services
- **Video**: Veo (Google), Replicate
- **Images**: Imagen 3 (Google), Stable Diffusion (Replicate)
- **Avatars**: Custom AI Avatar pipelines

---

## ☁️ Google Cloud Infrastructure

### Services Used
- **Cloud Run**: Hosting the application
- **Cloud Build**: CI/CD
- **Vertex AI**: Advanced model access

---

## 📦 Deployment Workflow

1. **Build**: `gcloud builds submit --tag gcr.io/PROJECT_ID/omi-ai`
2. **Deploy**: `gcloud run deploy omi-ai --image gcr.io/PROJECT_ID/omi-ai`

---
