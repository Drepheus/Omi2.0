"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function CodeModelsCarousel() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            {/* Claude 3.5 Sonnet Card */}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] relative overflow-hidden"
                className="relative z-10"
            >
                {/* Gradient Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(135deg, #1e1e1e 0%, #3e1f1a 100%)' // Anthropic-ish colors
                    }}
                />

                <div className="relative z-10 max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🧠</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Anthropic</span>
                    </div>
                    <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Claude 3.5 Sonnet
                    </h2>
                    <p className="mt-4 text-left text-base text-neutral-300">
                        The current SOTA for coding tasks. Exceptional reasoning, massive context window, and artifact generation capabilities.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">#1 Coding</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Reasoning</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">200k Context</span>
                    </div>
                </div>
            </WobbleCard>

            {/* GPT-4o Card */}
            <WobbleCard containerClassName="col-span-1 min-h-[300px] relative overflow-hidden" className="relative z-10">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(160deg, #101010 0%, #0f2e21 100%)' // OpenAI Greenish
                    }}
                />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🤖</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">OpenAI</span>
                    </div>
                    <h2 className="max-w-80 text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        GPT-4o
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-300">
                        The versatile omni model. Fast, reliable, and excellent at Python scripting and data structures.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Fast</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Versatile</span>
                    </div>
                </div>
            </WobbleCard>

            {/* DeepSeek Card */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[250px] relative overflow-hidden" className="relative z-10">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(120deg, #0a0a0a 0%, #1a237e 100%)' // DeepSeek Blue
                    }}
                />
                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🐋</span>
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">DeepSeek</span>
                    </div>
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        DeepSeek V3
                    </h2>
                    <p className="mt-4 max-w-[40rem] text-left text-base text-neutral-300">
                        The open-weights champion. Rivals top proprietary models in coding benchmarks at a fraction of the cost. Excellent for local fine-tuning.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Open Weights</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Cost Efficient</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-neutral-300">Math & Logic</span>
                    </div>
                </div>
            </WobbleCard>
        </div>
    );
}

export default CodeModelsCarousel;
