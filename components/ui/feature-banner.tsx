"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureBannerProps {
    title: string;
    subtitle: string;
    ctaText: string;
    imageSrc?: string; // Optional image/graphic on the right
    onCtaClick?: () => void;
}

export function FeatureBanner({ title, subtitle, ctaText, imageSrc, onCtaClick }: FeatureBannerProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-16 mt-8">
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#0d0d0d] border border-neutral-800 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-start max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-neutral-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        onClick={onCtaClick}
                        className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
                    >
                        {ctaText}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Decorative Graphic/Image Area */}
                {imageSrc ? (
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center">
                        <img src={imageSrc} alt="Feature" className="max-w-full h-auto object-contain rounded-xl shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-all duration-500" />
                    </div>
                ) : (
                    /* Fallback Abstract Graphic if no image provided */
                    <div className="relative w-full md:w-1/3 h-64 md:h-80 opacity-50">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[100px]" />
                        <div className="absolute right-0 top-10 w-40 h-56 bg-neutral-800 rounded-xl border border-neutral-700 transform rotate-12 z-10" />
                        <div className="absolute right-10 top-0 w-40 h-56 bg-neutral-900 rounded-xl border border-neutral-700 transform -rotate-6 z-20" />
                        <div className="absolute right-20 top-20 w-40 h-56 bg-neutral-950 rounded-xl border border-neutral-700 transform -rotate-12 z-0" />
                    </div>
                )}
            </div>
        </div>
    );
}
