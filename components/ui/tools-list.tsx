"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "./animated-section-title";

export interface ToolItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    badge?: string;
    actionLabel?: string;
    tooltipContent?: string;
    onClick?: () => void;
}

interface ToolsListProps {
    title?: string;
    viewAllLink?: string;
    tools: ToolItem[];
}

export function ToolsList({ title = "Tools", viewAllLink, tools }: ToolsListProps) {
    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6">
            <div className="flex justify-between items-end mb-6">
                <AnimatedSectionTitle title={title} />
                {viewAllLink && (
                    <a
                        href={viewAllLink}
                        className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                        View All
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </a>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group relative flex items-start p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300"
                    >
                        <div className="mr-4 p-2 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors text-zinc-400 group-hover:text-white">
                            {tool.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-zinc-200 group-hover:text-white transition-colors text-base">
                                    {tool.title}
                                </h3>
                                {tool.badge && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-white/10 text-zinc-300 border border-white/5">
                                        {tool.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                                {tool.description}
                            </p>
                        </div>

                        <div className="self-center ml-4 relative">
                            <button
                                onClick={tool.onClick}
                                className="px-4 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all duration-300 whitespace-nowrap peer"
                            >
                                {tool.actionLabel || "Read More"}
                            </button>

                            {tool.tooltipContent && (
                                <div className="absolute bottom-full right-0 mb-3 w-64 p-3 bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl text-xs text-zinc-300 opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 transform translate-y-2 peer-hover:translate-y-0">
                                    <div className="mb-1 font-semibold text-white">Learn More</div>
                                    {tool.tooltipContent}
                                    {/* Arrow */}
                                    <div className="absolute -bottom-1 right-6 w-2 h-2 bg-zinc-950 border-r border-b border-zinc-800 transform rotate-45"></div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
