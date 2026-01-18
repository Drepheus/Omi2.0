"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "./animated-section-title";

export interface VideoItem {
    id: string;
    title: string;
    provider: string;
    description: string;
    videoUrl: string; // URL to mp4/webm
    thumbnailUrl?: string; // Fallback image
    badge?: string;
}

interface VideoShowcaseProps {
    title?: string;
    viewAllLink?: string;
    videos: VideoItem[];
}

export function VideoShowcase({ title = "Latest AI Models", viewAllLink, videos }: VideoShowcaseProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
            <div className="flex justify-between items-end mb-8">
                <AnimatedSectionTitle title={title} />
                {viewAllLink && (
                    <a
                        href={viewAllLink}
                        className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                        View All
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </a>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videos.map((video, index) => (
                    <VideoCard key={video.id} video={video} index={index} />
                ))}
            </div>
        </div>
    );
}

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay might be blocked
            });
        }
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-3 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                {video.badge && (
                    <div className="absolute top-2 right-2 z-20 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white border border-white/10">
                        {video.badge}
                    </div>
                )}

                {/* Thumbnail Image (Visible when not playing) */}
                <img
                    src={video.thumbnailUrl || "/api/placeholder/400/225"}
                    alt={video.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Video Element */}
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Play Icon Overlay (Optional) */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-white text-sm font-semibold leading-tight group-hover:text-blue-400 transition-colors">
                    {video.title}
                </h3>
                <p className="text-neutral-500 text-xs font-medium">
                    {video.provider}
                </p>
                <p className="text-neutral-400 text-xs line-clamp-2 mt-0.5 leading-relaxed">
                    {video.description}
                </p>
            </div>
        </motion.div>
    );
}
