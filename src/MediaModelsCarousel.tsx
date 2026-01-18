"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function MediaModelsCarousel() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {/* Imagen 3 Card - spans 2 columns */}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] relative overflow-hidden"
                className="relative z-10"
            >
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 40%, #202020 70%, #252525 100%)'
                    }}
                />
                {/* Logo on far right */}
                <div className="absolute right-10 top-0 bottom-0 w-96 flex items-center justify-center z-10 opacity-20">
                    <svg viewBox="0 0 24 24" className="w-64 h-64 text-white" fill="currentColor">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm0 1.2c-4.638 0-8.4 3.762-8.4 8.4s3.762 8.4 8.4 8.4 8.4-3.762 8.4-8.4-3.762-8.4-8.4-8.4zm0 2.4l1.2 3.6 3.6 1.2-3.6 1.2-1.2 3.6-1.2-3.6-3.6-1.2 3.6-1.2z" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🎨</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Google</span>
                    </div>
                    <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Imagen 3
                    </h2>
                    <p className="mt-4 text-left text-base text-neutral-300">
                        State-of-the-art image generation with stunning photorealism. Creates high-fidelity images with accurate text rendering.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Image</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">4K</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Photorealistic</span>
                    </div>
                </div>
            </WobbleCard>

            {/* Veo 2 Card - single column */}
            <WobbleCard containerClassName="col-span-1 min-h-[300px] relative overflow-hidden" className="relative z-10">
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(160deg, #000000 0%, #151515 50%, #252525 100%)'
                    }}
                />
                {/* Logo on far right */}
                <div className="absolute right-10 top-0 bottom-0 w-80 flex items-center justify-center z-10 opacity-15">
                    <span className="text-[16rem]">🎬</span>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🎥</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Google</span>
                    </div>
                    <h2 className="max-w-80 text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Veo 2
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-300">
                        Revolutionary AI video generation with cinematic quality and physics simulation.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Video</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Cinematic</span>
                    </div>
                </div>
            </WobbleCard>

            {/* Sora Card - spans full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[250px] relative overflow-hidden" className="relative z-10">
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(120deg, #000000 0%, #0a0a0a 30%, #1a1a1a 60%, #2a2a2a 100%)'
                    }}
                />
                {/* Logo on far right */}
                <div className="absolute right-10 top-0 bottom-0 w-[30rem] flex items-center justify-center z-10 opacity-20">
                    <svg viewBox="0 0 24 24" className="w-64 h-64 text-white" fill="currentColor">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944z" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">📽️</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">OpenAI</span>
                    </div>
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Sora
                    </h2>
                    <p className="mt-4 max-w-[40rem] text-left text-base text-neutral-300">
                        Text-to-video AI creating realistic and imaginative scenes from text instructions. Generates videos up to a minute long while maintaining visual quality.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Text-to-Video</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Realistic</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">1080p</span>
                    </div>
                </div>
            </WobbleCard>
        </div>
    );
}

export default MediaModelsCarousel;
