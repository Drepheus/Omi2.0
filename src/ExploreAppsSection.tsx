"use client";

import React, { useState } from "react";
import { AnimatedSectionTitle } from "@/components/ui/animated-section-title";
import { Terminal, Layers, Scale, Network, X, ExternalLink } from "lucide-react";

interface AppItem {
    id: string;
    title: string;
    url: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
}

const apps: AppItem[] = [
    {
        id: "vercel-sdk",
        title: "Vercel AI SDK",
        url: "https://ai-sdk.dev/playground",
        description: "Interactive playground to test and compare AI models with Vercel's SDK.",
        icon: <Terminal size={32} strokeWidth={1.5} />,
        gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    },
    {
        id: "multiple-chat",
        title: "MultipleChat",
        url: "https://multiplechat.ai/?_gl=1*dqsrhz*_gcl_au*MTY4OTkwNTE2LjE3Njg3MTE2MjE.",
        description: "Chat with multiple AI models simultaneously in a single interface.",
        icon: <Layers size={32} strokeWidth={1.5} />,
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
    {
        id: "chat-comparison",
        title: "Chat Comparison",
        url: "https://web.chatcomparison.ai/",
        description: "Directly compare responses from different LLMs side-by-side.",
        icon: <Scale size={32} strokeWidth={1.5} />,
        gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    },
    {
        id: "chathub",
        title: "ChatHub",
        url: "https://app.chathub.gg/",
        description: "All-in-one chatbot client for ChatGPT, Bing, Bard, and more.",
        icon: <Network size={32} strokeWidth={1.5} />,
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    },
];

export function ExploreAppsSection() {
    const [activeApp, setActiveApp] = useState<AppItem | null>(null);

    return (
        <div className="w-full py-12">
            <div className="mb-8">
                <AnimatedSectionTitle title="Explore Apps" icon="🚀" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apps.map((app) => (
                    <div
                        key={app.id}
                        onClick={() => setActiveApp(app)}
                        className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 cursor-pointer hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                        {/* Hover Gradient Background */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{ background: app.gradient }}
                        />

                        <div className="relative z-10 flex flex-col items-start h-full">
                            <div
                                className="mb-4 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white group-hover:scale-110 transition-transform duration-300"
                                style={{ color: 'white' }}
                            >
                                {app.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                {app.title}
                            </h3>

                            <p className="text-sm text-neutral-400 mb-4 flex-grow line-clamp-3">
                                {app.description}
                            </p>

                            <div className="flex items-center text-xs font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors mt-auto">
                                Open App <ExternalLink size={12} className="ml-1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Browser Modal */}
            {activeApp && (
                <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="w-full h-full max-w-7xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative">
                        {/* Browser Header */}
                        <div className="h-14 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between px-4 shrink-0 z-10">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded-lg border border-neutral-800 text-sm text-neutral-400 min-w-[300px]">
                                    <span className="w-4 h-4"><ExternalLink size={14} /></span>
                                    <span className="truncate">{activeApp.url}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={activeApp.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 text-xs font-medium bg-indigo-500/10 text-indigo-400 rounded-md hover:bg-indigo-500/20 transition-colors"
                                >
                                    Open in New Tab
                                </a>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveApp(null);
                                    }}
                                    className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Iframe Content */}
                        <div className="flex-1 bg-white relative">
                            <iframe
                                src={activeApp.url}
                                className="w-full h-full border-0 absolute inset-0"
                                title={activeApp.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
                                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExploreAppsSection;
