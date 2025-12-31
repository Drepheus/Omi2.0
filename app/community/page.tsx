"use client";

import { Nav } from "@/components/omi/Nav";
import { Footer } from "@/components/omi/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Heart, Share2, Award, Zap, Camera, Users, Sparkles, Filter, MoreHorizontal, Play, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import React, { useState } from "react";

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

export default function CommunityPage() {
    const scrollRef = useScrollAnimation();
    const [activeFilter, setActiveFilter] = useState("all");

    const showcaseItems = [
        { id: 1, type: "video", url: "/videos/nature.mp4", creator: "@arc_design", likes: "1.2k", category: "nature", badge: "Featured" },
        { id: 2, type: "video", url: "/videos/ani.mp4", creator: "@pixel_mancer", likes: "850", category: "animated", badge: "Trending" },
        { id: 3, type: "video", url: "/videos/fantasy.mp4", creator: "@void_render", likes: "2.4k", category: "fantasy", badge: "Masterpiece" },
        { id: 4, type: "video", url: "/videos/avatarscene.mp4", creator: "@meta_human", likes: "1.5k", category: "avatar", badge: "Realism" },
        { id: 5, type: "video", url: "/videos/twoavatars.mp4", creator: "@digital_soul", likes: "940", category: "avatar", badge: "New" },
        { id: 6, type: "video", url: "/videos/nature.mp4", creator: "@vision_ai", likes: "3.1k", category: "nature", badge: "Popular" }
    ];

    const filteredItems = activeFilter === "all"
        ? showcaseItems
        : showcaseItems.filter(item => item.category === activeFilter);

    return (
        <div ref={scrollRef} className="min-h-screen bg-black text-white selection:bg-white/20 font-sans leading-relaxed">
            <Nav />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-purple-950/20 via-[#030303] to-black pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-bold tracking-[0.3em] uppercase text-purple-400 mb-10">
                            <Sparkles size={12} /> The Future is Social
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-10 leading-[0.95]">
                            Built by <br />
                            <ChromeText className="italic">Dreamers</ChromeText>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Welcome to the epicenter of AI creativity. Join a global collective of over 100,000 artists redefining the boundaries of human imagination.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://discord.gg/omi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-5 rounded-full bg-[#5865F2] text-white font-bold text-xl overflow-hidden shadow-[0_10px_40px_rgba(88,101,242,0.3)] transition-all hover:scale-105"
                            >
                                <div className="relative z-10 flex items-center gap-3">
                                    <MessageCircle size={24} />
                                    Explore the Discord
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </a>
                            <button className="px-12 py-5 rounded-full border border-white/10 text-white font-semibold text-xl hover:bg-white/5 transition-all backdrop-blur-md">
                                View Weekly Winners
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Community Stats Card Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-on-scroll animate-fade-in-up">
                    <div className="p-10 rounded-[40px] bg-[#050505] border border-white/5 relative overflow-hidden group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <Users className="mx-auto mb-6 text-blue-400" size={32} />
                            <div className="text-5xl font-bold mb-2">112k+</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Global Members</div>
                        </div>
                    </div>
                    <div className="p-10 rounded-[40px] bg-[#050505] border border-white/5 relative overflow-hidden group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <Sparkles className="mx-auto mb-6 text-purple-400" size={32} />
                            <div className="text-5xl font-bold mb-2">4.5M</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Daily Masterpieces</div>
                        </div>
                    </div>
                    <div className="p-10 rounded-[40px] bg-[#050505] border border-white/5 relative overflow-hidden group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <Star className="mx-auto mb-6 text-emerald-400" size={32} />
                            <div className="text-5xl font-bold mb-2">4.9/5</div>
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Creator Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Spotlight - YouTube Carousel Row */}
            <section className="py-24 bg-black/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Community <ChromeText>Spotlights</ChromeText></h2>
                        <p className="text-gray-500 text-sm mt-2">Latest cinematic masterpieces from our top creators.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory">
                        {[
                            "https://www.youtube.com/embed/znhQlxYiOh8",
                            "https://www.youtube.com/embed/wI3y3dVQJtc",
                            "https://www.youtube.com/embed/ux4kvzBLPNM",
                            "https://www.youtube.com/embed/5tJdUObO-Uw",
                            "https://www.youtube.com/embed/3CJ6yrMr1uc",
                            "https://www.youtube.com/embed/-OarJ1RwgD0"
                        ].map((url, i) => (
                            <div key={i} className="flex-none w-[350px] md:w-[600px] aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 snap-center group relative shadow-2xl">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={url}
                                    title={`Community Video ${i + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl group-hover:border-white/20 transition-colors" />
                            </div>
                        ))}
                    </div>
                    {/* Visual markers or indicators could go here if needed */}
                </div>

                <style jsx>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </section>

            {/* Dynamic Gallery Section */}
            <section className="py-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 animate-on-scroll animate-fade-in-up">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">Curated <ChromeText>Gallery</ChromeText></h2>
                            <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Observe the pinnacle of AI-human collaboration. These works represent the leading edge of current generative technologies.</p>
                        </div>

                        {/* Gallery Filters */}
                        <div className="flex flex-wrap gap-3">
                            {['all', 'nature', 'animated', 'fantasy', 'avatar'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeFilter === filter
                                        ? "bg-white text-black border-white"
                                        : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[800px]">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative group rounded-[32px] overflow-hidden bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all cursor-crosshair shadow-2xl"
                                >
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[8px] font-bold uppercase tracking-widest text-white">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto opacity-70 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
                                    >
                                        <source src={item.url} type="video/mp4" />
                                    </video>

                                    {/* Overlay Interaction */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 border-2 border-white/20" />
                                                <div>
                                                    <p className="text-sm font-bold text-white tracking-wide">{item.creator}</p>
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Artist Pro</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-5 text-gray-400">
                                                <button className="flex items-center gap-2 hover:text-pink-500 transition-colors group/heart">
                                                    <Heart size={20} className="group-hover/heart:fill-pink-500" />
                                                    <span className="text-xs font-bold">{item.likes}</span>
                                                </button>
                                                <button className="hover:text-white transition-colors">
                                                    <Share2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="text-center mt-32">
                        <button className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all">
                            Load More Creation
                        </button>
                    </div>
                </div>
            </section>

            {/* Community Programs - Enhanced */}
            <section className="py-40 bg-zinc-950 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="animate-on-scroll animate-fade-in-left">
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] block mb-8">Ecosystem & Rewards</span>
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-10 leading-[0.95]">Join the <br /><ChromeText>Elite Creators</ChromeText></h2>
                            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12">
                                We're looking for the next generation of visual storytellers. Join our creator program and gain access to resources that turn visions into reality.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Award className="text-blue-400" />, title: "Beta Model Access", desc: "Test VEO-4 and IMAGEN-Next before the world." },
                                    { icon: <Zap className="text-purple-400" />, title: "Compute Grants", desc: "Get monthly GPU credits to fuel your biggest ideas." },
                                    { icon: <Camera className="text-emerald-400" />, title: "Featured Spotlights", desc: "Get your work seen by millions through our channels." }
                                ].map((p, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                            {p.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1 tracking-wide">{p.title}</h4>
                                            <p className="text-gray-500 text-sm font-light">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-16 px-12 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                Apply for Creator Program
                            </button>
                        </div>

                        <div className="animate-on-scroll animate-fade-in-right relative">
                            <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full" />
                            <div className="relative aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                                    alt="Abstract AI art"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-12 left-12 p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 max-w-[280px]">
                                    <p className="text-gray-300 text-sm italic font-light">"Omi AI changed how I think about motion design. It's not just a tool, it's a collaborator."</p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-white/20" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Sarah Chen, Creative Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Community CTA */}
            <section className="py-40 bg-white text-black text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-10 leading-[0.9]">The Movement <br />Needs <span className="italic">You</span>.</h2>
                        <p className="text-gray-500 text-base md:text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                            Don't just watch the future happen. Build it with us. The most exciting creations are yet to be imagined.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-16 py-6 rounded-full bg-black text-white font-bold text-2xl hover:bg-neutral-800 transition-all hover:scale-110 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                                Launch the Studio
                            </button>
                            <button className="px-16 py-6 rounded-full border-2 border-black/10 text-black font-bold text-2xl hover:bg-black hover:text-white transition-all">
                                Read the Blog
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
