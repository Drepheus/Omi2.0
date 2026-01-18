"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface StickyHeaderProps {
    title: string;
    icon?: React.ReactNode;
    backLink?: string;
    backLabel?: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export function StickyHeader({
    title,
    icon,
    backLink = "/command-hub",
    backLabel = "Command Hub",
    actionLabel,
    onAction,
    className
}: StickyHeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Check initial scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 transition-all duration-300 ease-in-out ${isScrolled
                ? "bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 shadow-lg pt-3 pb-3"
                : "bg-transparent border-b border-transparent pt-6 pb-6"
                } ${className || ""}`}
        >
            {/* Left: Back Button */}
            <button
                onClick={() => router.push(backLink)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${isScrolled
                    ? "bg-zinc-900/50 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                    : "bg-black/20 border-white/5 text-zinc-400 hover:bg-black/40 hover:text-white backdrop-blur-sm"
                    }`}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="hidden md:inline font-medium text-sm">{backLabel}</span>
            </button>

            {/* Center: Title */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                {icon && <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{icon}</span>}
                <h1 className="text-sm font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-white uppercase font-mono animate-pulse">
                    {title}
                </h1>
            </div>

            {/* Right: Action Button */}
            <div className="flex items-center gap-4 min-w-[100px] justify-end">
                {actionLabel && onAction && (
                    <button
                        onClick={onAction}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isScrolled
                            ? "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5"
                            : "bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur-sm"
                            }`}
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
        </header>
    );
}
