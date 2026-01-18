"use client";

import React from "react";
import { ToolsList, ToolItem } from "@/components/ui/tools-list";
import { FeatureBanner } from "@/components/ui/feature-banner";
import { VideoShowcase, VideoItem } from "@/components/ui/video-showcase";

// --- Data Definitions ---

const mediaTools: ToolItem[] = [
    {
        id: "upscale",
        title: "Image Upscaler",
        description: "Enhance resolution and detail up to 4x instantly.",
        badge: "Popular",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <path d="M16 16l4-4-4-4" />
                <path d="M8 8l-4 4 4 4" />
            </svg>
        ),
        actionLabel: "Start"
    },
    {
        id: "remove-bg",
        title: "Background Remover",
        description: "Remove backgrounds from images with one click.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
            </svg>
        )
    },
    {
        id: "edit-image",
        title: "Magic Edit",
        description: "Edit specific parts of an image using text prompts.",
        badge: "New",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        )
    },
    {
        id: "video-stabilize",
        title: "Video Stabilizer",
        description: "Smooth out shaky footage automatically.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        )
    },
    {
        id: "lip-sync",
        title: "Lip Sync Video",
        description: "Make any character talk with perfect lip synchronization.",
        badge: "Beta",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
        )
    },
    {
        id: "img-to-prompt",
        title: "Image to Prompt",
        description: "Upload an image to get the text prompt that created it.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        )
    }
];

const mediaVideos: VideoItem[] = [
    {
        id: 'sora-2',
        title: 'Sora 2 x Omi',
        provider: 'OpenAI',
        description: 'Each frame embodies realism, drawing viewers into an authentic and relatable world.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=400&auto=format&fit=crop', // Cinematic city
        videoUrl: 'https://cdn.pixabay.com/video/2019/04/20/22909-331668411_large.mp4', // Abstract fluid video
        badge: 'New Model'
    },
    {
        id: 'veo-3',
        title: 'Veo3 x Omi',
        provider: 'Google',
        description: 'Cinematic video generation with realistic people and stories.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop', // Close up face
        videoUrl: 'https://cdn.pixabay.com/video/2021/08/04/83897-583592881_large.mp4', // Person video
        badge: 'New Model'
    },
    {
        id: 'kling-01',
        title: 'Kling O1 x Omi',
        provider: 'Kling',
        description: 'Next-gen, unified multimodal video creation with ultra-detailed control.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop', // Abstract art
        videoUrl: 'https://cdn.pixabay.com/video/2020/05/04/37943-417637841_large.mp4', // Floating shapes
        badge: 'New Model'
    },
    {
        id: 'banana-pro',
        title: 'Nano Banana Pro',
        provider: 'Omi AI',
        description: '4K generations on the best image model yet.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542202229-2d4e68e48937?q=80&w=400&auto=format&fit=crop',
        videoUrl: 'https://cdn.pixabay.com/video/2022/10/19/135252-761962363_large.mp4', // Nature video
    }
];


// --- Main Component ---

export function MediaToolsSection() {
    return (
        <div className="w-full">
            {/* 1. Feature Banner */}
            <FeatureBanner
                title="Create Anything Imaginable"
                subtitle="Turn your wildest ideas into reality with Omi's AI. From lifelike avatars to cinematic videos, if you can dream it, you can create it here."
                ctaText="Start Creating"
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" // Abstract creative image
            />

            {/* 2. Tools List */}
            <ToolsList
                title="Creative Tools"
                viewAllLink="#"
                tools={mediaTools}
            />

            {/* 3. Video Showcase */}
            <VideoShowcase
                title="Latest AI Models"
                viewAllLink="#"
                videos={mediaVideos}
            />
        </div>
    );
}

export default MediaToolsSection;
