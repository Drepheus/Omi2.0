"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const models = [
    { name: "Sora", type: "Video Generation", icon: "🎬", color: "from-red-500 to-orange-500" },
    { name: "Gemini 1.5", type: "Multimodal", icon: "✨", color: "from-blue-500 to-cyan-500" },
    { name: "DALL·E 3", type: "Image Generation", icon: "🎨", color: "from-green-500 to-teal-500" },
    { name: "Midjourney", type: "Artistic Image", icon: "🌌", color: "from-purple-500 to-pink-500" },
    { name: "Runway Gen-3", type: "Cinematic Video", icon: "🎥", color: "from-yellow-500 to-orange-500" },
    { name: "Stable Diffusion", type: "Open Source Image", icon: "⚡", color: "from-indigo-500 to-blue-500" },
    { name: "Pika Art", type: "Video Animation", icon: "🐰", color: "from-pink-500 to-rose-500" },
    { name: "Claude 3.5", type: "Reasoning & Code", icon: "🧠", color: "from-orange-500 to-amber-500" },
    { name: "Luma Dream", type: "Video Reality", icon: "💭", color: "from-teal-500 to-emerald-500" },
    { name: "Kling AI", type: "High-Motion Video", icon: "🎞️", color: "from-slate-500 to-gray-500" },
    { name: "Flux.1", type: "Text-to-Image", icon: "🌊", color: "from-cyan-500 to-blue-500" },
    { name: "GPT-4o", type: "Omni Model", icon: "🤖", color: "from-emerald-500 to-green-500" },
    { name: "Imagen 3", type: "Photorealism", icon: "📸", color: "from-blue-600 to-indigo-600" },
    { name: "Veo", type: "1080p Video", icon: "📹", color: "from-red-600 to-rose-600" },
    { name: "Suno", type: "AI Music", icon: "🎵", color: "from-violet-500 to-purple-500" },
    { name: "Udio", type: "Song Generation", icon: "🎶", color: "from-fuchsia-500 to-pink-500" },
    // Duplicate for density
    { name: "Sora", type: "Video Generation", icon: "🎬", color: "from-red-500 to-orange-500" },
    { name: "Gemini 1.5", type: "Multimodal", icon: "✨", color: "from-blue-500 to-cyan-500" },
    { name: "Midjourney", type: "Artistic Image", icon: "🌌", color: "from-purple-500 to-pink-500" },
    { name: "Runway Gen-3", type: "Cinematic Video", icon: "🎥", color: "from-yellow-500 to-orange-500" },
    { name: "Stable Diffusion", type: "Open Source Image", icon: "⚡", color: "from-indigo-500 to-blue-500" },
    { name: "Pika Art", type: "Video Animation", icon: "🐰", color: "from-pink-500 to-rose-500" },
    { name: "Luma Dream", type: "Video Reality", icon: "💭", color: "from-teal-500 to-emerald-500" },
    { name: "Flux.1", type: "Text-to-Image", icon: "🌊", color: "from-cyan-500 to-blue-500" },
];

export function ThreeDMarqueeDemo() {
    return (
        <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-white/5 p-2 ring-1 ring-white/10 dark:bg-black/40 backdrop-blur-md border border-white/10">
            <ThreeDMarquee
                items={models.map((model, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-3 w-full h-full p-4 relative overflow-hidden group">
                        {/* Background Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                        <span className="text-5xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{model.icon}</span>
                        <div className="text-center z-10">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                                {model.name}
                            </h3>
                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest border-t border-white/10 pt-2 mt-1">
                                {model.type}
                            </p>
                        </div>
                    </div>
                ))}
            />
        </div>
    );
}
