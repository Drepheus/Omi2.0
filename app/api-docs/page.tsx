"use client";

import { Nav } from "@/components/omi/Nav";
import { Footer } from "@/components/omi/Footer";
import { motion, useScroll } from "framer-motion";
import { Code, Terminal, Zap, Shield, Rocket, Cpu, Layers, Globe, MousePointer2, Play, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import React from "react";

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

export default function ApiDocsPage() {
    const scrollRef = useScrollAnimation();

    const codeSnippet = `const response = await fetch('https://api.omi.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: "Cinematic drone shot of an island",
    model: "veo-3",
    aspect_ratio: "16:9",
    motion_bucket_id: 127
  })
});

const data = await response.json();
console.log(data.video_url);`;

    return (
        <div ref={scrollRef} className="min-h-screen bg-black text-white selection:bg-white/20">
            <Nav />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent blur-3xl pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-8 mx-auto">
                            <Sparkles size={12} /> API v1.0 NOW IN BETA
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-[1.1]">
                            Engineered for <br />
                            <ChromeText>Infinite Creativity</ChromeText>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                            The world's most advanced visual generation engine, now accessible via a single endpoint. Build the future of media in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="group relative px-10 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                                <span className="relative z-10">Get Your API Key</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="px-10 py-4 rounded-full border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
                                Developer Discord
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Highlight Section */}
            <section className="py-24 border-y border-white/5 bg-[#030303]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center animate-on-scroll animate-fade-in-up">
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold"><ChromeText>1.2s</ChromeText></div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Avg Latency</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold"><ChromeText>99.9%</ChromeText></div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Uptime SLA</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold"><ChromeText>4k</ChromeText></div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Max Resolution</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold"><ChromeText>Global</ChromeText></div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Edge Deployment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Side Info */}
                    <div className="lg:col-span-4 space-y-16">
                        <div className="animate-on-scroll animate-fade-in-left">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Real-time Synthesis</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                Our inference engine is optimized for high-throughput applications. Generate videos and images at the speed of thought.
                            </p>
                        </div>
                        <div className="animate-on-scroll animate-fade-in-left delay-200">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                                <Layers size={20} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Unified Schema</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                One JSON format for everything. Whether you're generating nature shots or complex UI designs, the interface stays consistent.
                            </p>
                        </div>
                        <div className="animate-on-scroll animate-fade-in-left delay-400">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                <Globe size={20} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Infinite Scaling</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                Built on Google Cloud's hyper-scale infrastructure. We handle the clusters so you can handle the creativity.
                            </p>
                        </div>
                    </div>

                    {/* Code Showcase */}
                    <div className="lg:col-span-8 animate-on-scroll animate-fade-in-right">
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[32px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                            <div className="relative bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-3">
                                        <Terminal size={16} className="text-blue-400" />
                                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Omi AI SDK / Node.js</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    </div>
                                </div>
                                <div className="p-10">
                                    <pre className="text-sm md:text-base text-gray-400 font-mono leading-relaxed overflow-x-auto selection:bg-blue-500/30">
                                        <code className="block">
                                            {codeSnippet.split('\n').map((line, i) => (
                                                <span key={i} className="block group/line">
                                                    <span className="inline-block w-8 text-gray-700 select-none">{i + 1}</span>
                                                    <span className="text-gray-300">{line}</span>
                                                </span>
                                            ))}
                                        </code>
                                    </pre>
                                </div>
                                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Inference Response: 200 OK</span>
                                    <button className="text-[10px] text-blue-400 font-bold uppercase tracking-widest hover:text-white transition-colors">Copy to Clipboard</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Specialized Documentation Grid */}
            <section className="bg-[#020202] py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 animate-on-scroll animate-fade-in-up">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">The <ChromeText>Standard</ChromeText> for Generative Media</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">Built by developers, for developers. Every detail designed for maximum efficiency.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-on-scroll animate-fade-in-up delay-100 group p-12 rounded-[40px] bg-black border border-white/5 hover:border-blue-500/20 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <Code size={120} />
                            </div>
                            <div className="relative z-10">
                                <Code className="mb-8 text-blue-400" size={32} />
                                <h4 className="text-2xl font-semibold mb-4">REST Endpoints</h4>
                                <p className="text-gray-500 leading-relaxed mb-8">Standard HTTP endpoints with comprehensive documentation and Postman support.</p>
                                <div className="flex flex-col gap-3 text-sm text-gray-400">
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" /> /v1/video/generate</div>
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" /> /v1/image/edit</div>
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" /> /v1/models/list</div>
                                </div>
                            </div>
                        </div>

                        <div className="animate-on-scroll animate-fade-in-up delay-300 group p-12 rounded-[40px] bg-black border border-white/5 hover:border-purple-500/20 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <Rocket size={120} />
                            </div>
                            <div className="relative z-10">
                                <Rocket className="mb-8 text-purple-400" size={32} />
                                <h4 className="text-2xl font-semibold mb-4">Official SDKs</h4>
                                <p className="text-gray-500 leading-relaxed mb-8">Native libraries for Node.js, Python, and Go with full type safety and async support.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5">npmjs</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5">pypi</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5">go-get</span>
                                </div>
                            </div>
                        </div>

                        <div className="animate-on-scroll animate-fade-in-up delay-500 group p-12 rounded-[40px] bg-black border border-white/5 hover:border-emerald-500/20 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <Terminal size={120} />
                            </div>
                            <div className="relative z-10">
                                <Terminal className="mb-8 text-emerald-400" size={32} />
                                <h4 className="text-2xl font-semibold mb-4">Webhooks</h4>
                                <p className="text-gray-500 leading-relaxed mb-8">Never poll for results again. Get notified instantly when your media is ready for delivery.</p>
                                <div className="w-full bg-white/5 h-20 rounded-2xl border border-white/5 p-4 flex items-center justify-center">
                                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        LISTENING FOR EVENTS_
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Callout */}
            <section className="py-40 relative overflow-hidden bg-white text-black">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-10 tracking-tight">Stop Building <br />Infrastructure. Start <span className="italic">Creating</span>.</h2>
                    <p className="text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Omi AI API handles the GPU clusters, the data stores, and the complex deep learning pipelines so you can focus on building amazing products.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-5 rounded-full bg-black text-white font-bold text-xl hover:bg-neutral-800 transition-all hover:scale-105 shadow-2xl">
                            Start Building Now
                        </button>
                        <button className="px-12 py-5 rounded-full bg-transparent text-black font-bold text-xl border-2 border-black/10 hover:border-black transition-all">
                            Chat with an Engineer
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
