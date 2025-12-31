"use client";

import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ChromeText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <span
        className={`bg-clip-text text-transparent animate-chrome-shimmer ${className}`}
        style={{
            backgroundImage: 'linear-gradient(90deg, #666666 0%, #888888 15%, #ffffff 30%, #e8e8e8 45%, #b8b8b8 60%, #888888 75%, #666666 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}
    >
        {children}
    </span>
);

export const Nav = () => {
    const router = useRouter();

    const handleTryNow = () => {
        router.push("/studio");
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div
                        onClick={() => router.push('/')}
                        className="cursor-pointer flex items-center gap-2 group"
                    >
                        <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform group-hover:scale-110 md:w-6 md:h-6">
                            <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
                        </svg>
                        <div className="font-bold text-lg md:text-xl tracking-tight flex items-center">
                            <ChromeText>OMI AI</ChromeText>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                        <a href="/studio" className="hover:text-white transition-colors">STUDIO</a>
                        <a href="/api-docs" className="hover:text-white transition-colors">API</a>
                        <a href="/enterprise" className="hover:text-white transition-colors">ENTERPRISE</a>
                        <a href="/community" className="hover:text-white transition-colors">COMMUNITY</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleTryNow}
                        className="px-5 py-2 md:px-6 md:py-2 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors"
                    >
                        TRY NOW
                    </button>
                </div>
            </div>
        </nav>
    );
};
