"use client";

import React from "react";
import { ToolsList, ToolItem } from "@/components/ui/tools-list";
import { FeatureBanner } from "@/components/ui/feature-banner";
import { VideoShowcase, VideoItem } from "@/components/ui/video-showcase";

// --- Data Definitions ---

const searchTools: ToolItem[] = [
    {
        id: "research",
        title: "Deep Research",
        description: "Compile a comprehensive report from multiple sources.",
        badge: "Pro",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        actionLabel: "Start"
    },
    {
        id: "fact-check",
        title: "Fact Checker",
        description: "Verify claims against trusted news sources instantly.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        )
    },
    {
        id: "trends",
        title: "Trend Analyzer",
        description: "Visualize search trends and data over time.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        )
    },
    {
        id: "compare",
        title: "Product Comparison",
        description: "Generate comparison tables for products or services.",
        badge: "New",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        )
    },
    {
        id: "news",
        title: "News Briefing",
        description: "Get a daily summary of headlines tailored to you.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
            </svg>
        )
    },
    {
        id: "academic",
        title: "Academic Search",
        description: "Find peer-reviewed papers and scholastic articles.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    }
];

const searchVideos: VideoItem[] = [
    {
        id: 'search-deep',
        title: 'Deep Research Mode',
        provider: 'Perplexity',
        description: 'Analyzing 50+ academic papers to generate a single comprehensive report.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2021/04/18/71449-538877546_large.mp4', // Data scanning video
        badge: 'Pro Feature'
    },
    {
        id: 'search-browse',
        title: 'Live Web Browsing',
        provider: 'OpenAI',
        description: 'Real-time navigation and extraction of live data from websites.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2020/05/25/40149-424930104_large.mp4', // Typing search video
    },
    {
        id: 'search-multimodal',
        title: 'Gemini Multimodal Search',
        provider: 'Google',
        description: 'Searching video content by describing specific scenes or actions.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2016/09/13/4946-182697224_large.mp4', // Eye/Lens video
        badge: 'New'
    },
    {
        id: 'search-agents',
        title: 'Autonomous Agents',
        provider: 'Tavily',
        description: 'Multiple AI agents collaborating to fact-check complex claims.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2023/11/12/188863-883907775_large.mp4', // Network nodes video
    }
];


// --- Main Component ---

export function SearchToolsSection() {
    return (
        <div className="w-full">
            {/* 1. Feature Banner */}
            <FeatureBanner
                title="Knowledge at the speed of thought"
                subtitle="Stop searching and start finding. Our deep research agents scan, verify, and synthesize information from across the web in seconds."
                ctaText="Start Research"
            />

            {/* 2. Tools List */}
            <ToolsList
                title="Search Tools"
                viewAllLink="#"
                tools={searchTools}
            />

            {/* 3. Video Showcase */}
            <VideoShowcase
                title="Search Capabilities"
                viewAllLink="#"
                videos={searchVideos}
            />
        </div>
    );
}

export default SearchToolsSection;
