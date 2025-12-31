"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const Footer = () => {
    return (
        <footer className={`relative z-[100] w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 ${inter.className}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                {/* Brand Column */}
                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
                        </svg>
                        <span className={`text-2xl font-bold tracking-tight text-white`}>OMI AI</span>
                    </div>
                    <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                        Pioneering the future of generative media. We build tools that empower creators to imagine the impossible.
                    </p>
                </div>

                {/* Links Column */}
                <div className="md:col-span-4 grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="/studio" className="hover:text-white transition-colors">Studio</a></li>
                            <li><a href="/api-docs" className="hover:text-white transition-colors">API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="/enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Video Column */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <h4 className="text-white font-semibold mb-2 text-sm italic">Omi AI Studio</h4>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <source src="/videos/grok-video-163f4b90-6e8d-43d2-88d0-6450a84086c0 (5).mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                <p>© 2025 Omi AI Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
};
