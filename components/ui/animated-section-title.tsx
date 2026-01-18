"use client";
import React from "react";

interface AnimatedSectionTitleProps {
    title: string;
    icon?: string; // Optional icon/emoji
}

export function AnimatedSectionTitle({ title, icon }: AnimatedSectionTitleProps) {
    return (
        <div className="flex items-center justify-start mb-8 ml-4 lg:ml-0">
            <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-1 text-lg font-semibold text-white backdrop-blur-3xl whitespace-nowrap">
                    {icon && <span className="mr-2 text-2xl">{icon}</span>}
                    {title}
                </span>
            </div>
        </div>
    );
}
