"use client";

import React from "react";
import { ToolsList, ToolItem } from "@/components/ui/tools-list";
import { FeatureBanner } from "@/components/ui/feature-banner";
import { VideoShowcase, VideoItem } from "@/components/ui/video-showcase";

// --- Data Definitions ---

const chatTools: ToolItem[] = [
    {
        id: "summarize",
        title: "Summarize Documents",
        description: "Turn lengthy reports into concise executive summaries.",
        badge: "Popular",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16" />
                <path d="M4 12h10" />
                <path d="M4 18h6" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Advanced NLP algorithms analyze document structure to extract key propositions and generate concise summaries, retaining critical information while reducing reading time by up to 80%."
    },
    {
        id: "rewrite",
        title: "Draft & Paraphrase",
        description: "Instantly adjust tone or rewrite content for different audiences.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M16 6l-4-4-4 4" />
                <path d="M12 2v13" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Leverages sophisticated style transfer models to adapt text to specific tones (formal, casual, persuasive) and complexity levels, perfect for audience targeting."
    },
    {
        id: "grammar",
        title: "Proofreading",
        description: "Ensure professional, error-free communication.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 4v16l13-8z" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Goes beyond basic spell-check with deep linguistic analysis to catch subtle syntax errors, enhance sentence flow, and ensure native-level fluency and professionalism."
    },
    {
        id: "code-explain",
        title: "Code Analysis",
        description: "Debug complex logic or understand codebase architecture.",
        badge: "New",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Parses Abstract Syntax Trees (AST) to deeply understand code logic, identify potential bugs or vulnerabilities, and explain complex algorithms in clear, non-technical language."
    },
    {
        id: "prompt-enhance",
        title: "Prompt Engineering",
        description: "Optimize your inputs for the best AI results.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Applies expert prompt engineering heuristics to refine your raw inputs, adding necessary context and constraints to yield the highest quality generative outputs."
    },
    {
        id: "translate",
        title: "Translation",
        description: "Communicate seamlessly across 50+ languages.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        actionLabel: "Read More",
        tooltipContent: "Utilizes Neural Machine Translation (NMT) with deep contextual awareness to provide accurate, culturally nuanced translations between over 50 global languages."
    }
];

const chatVideos: VideoItem[] = [
    {
        id: 'chat-reasoning',
        title: 'O1 Reasoning Chain',
        provider: 'OpenAI',
        description: 'Watch the model break down complex logic puzzles step-by-step.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2023/10/26/186638-878457632_large.mp4',
        badge: 'New Model'
    },
    {
        id: 'chat-coding',
        title: 'Copilot X Coding',
        provider: 'GitHub',
        description: 'Real-time full stack application generation from a single prompt.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2019/04/24/23011-332483109_large.mp4',
        badge: 'Demo'
    },
    {
        id: 'chat-creative',
        title: 'Creative Writing Assistant',
        provider: 'Anthropic',
        description: 'Collaborative story writing with Claude 3.5 Sonnet.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2020/07/02/43663-435759178_large.mp4',
    },
    {
        id: 'chat-translate',
        title: 'Live Interpretation',
        provider: 'Meta',
        description: 'Seamless real-time translation of technical documents.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1523726491678-bf852e717f63?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2019/05/20/23780-337583769_large.mp4',
    }
];

export function ChatToolsSection() {
    return (
        <div className="w-full">
            <FeatureBanner
                title="Thinking fast and slow"
                subtitle="Experience the next generation of reasoning models that think before they speak. Solve complex problems with chain-of-thought processing."
                ctaText="Start Reasoning"
            />

            <ToolsList
                title="Chat Use Cases"
                viewAllLink="#"
                tools={chatTools}
            />

            <VideoShowcase
                title="Reasoning Capabilities"
                viewAllLink="#"
                videos={chatVideos}
            />
        </div>
    );
}

export default ChatToolsSection;
