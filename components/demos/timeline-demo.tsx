import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2026",
            content: (
                <div>
                    <p className="font-bold text-xl mb-2 text-white">Omi AI Platform</p>
                    <p className="mb-8 text-neutral-300 text-sm">
                        Jan 2026: Launch of Omi AI, the unified interface for all major LLMs and creative models.
                    </p>
                </div>
            ),
        },
        {
            title: "Late 2025",
            content: (
                <div>
                    <p className="font-bold text-xl mb-2 text-white">Reasoning & Agents</p>
                    <p className="mb-4 text-neutral-300 text-sm">
                        The era of autonomous agents. GPT-5 and Gemini 2.0 set new benchmarks in reasoning and multi-step task execution.
                    </p>
                </div>
            )
        },
        {
            title: "Early 2025",
            content: (
                <div>
                    <p className="font-bold text-xl mb-2 text-white">Sora Public Release</p>
                    <p className="mb-4 text-neutral-300 text-sm">
                        OpenAI's Sora becomes publicly available, revolutionizing video generation with high-fidelity physical simulation.
                    </p>
                </div>
            )
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="font-bold text-xl mb-2 text-white">Multimodal & Speed</p>
                    <div className="flex flex-col gap-4 text-neutral-300 text-sm">
                        <div>
                            <span className="font-semibold text-neutral-200">Dec 2024:</span> Gemini 1.5 Ultra release.
                        </div>
                        <div>
                            <span className="font-semibold text-neutral-200">Sept 2024:</span> OpenAI o1-preview (Strawberry) introduces advanced reasoning chains.
                        </div>
                        <div>
                            <span className="font-semibold text-neutral-200">July 2024:</span> Llama 3.1 405B Open Source Model released.
                        </div>
                        <div>
                            <span className="font-semibold text-neutral-200">June 2024:</span> Claude 3.5 Sonnet defines the new standard for coding and nuance.
                        </div>
                        <div>
                            <span className="font-semibold text-neutral-200">May 2024:</span> GPT-4o launches with native multimodal capabilities and ultra-low latency.
                        </div>
                        <div>
                            <span className="font-semibold text-neutral-200">Feb 2024:</span> Sora Announcement shocks the world with 60s coherent video generation.
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Late 2023",
            content: (
                <div>
                    <p className="font-bold text-xl mb-2 text-white">The Foundation</p>
                    <p className="mb-4 text-neutral-300 text-sm">
                        Dec 2023: Google launches Gemini 1.0, the first natively multimodal model.
                    </p>
                    <p className="mb-4 text-neutral-300 text-sm">
                        Nov 2023: GPT-4 Turbo released with 128k context window.
                    </p>
                </div>
            )
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
