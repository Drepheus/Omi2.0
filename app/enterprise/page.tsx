"use client";

import { Nav } from "@/components/omi/Nav";
import { Footer } from "@/components/omi/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Users, Zap, BarChart3, Lock, Settings, CheckCircle2, Globe, Cpu, Rocket, Briefcase, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import React, { useRef } from "react";

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

export default function EnterprisePage() {
    const scrollRef = useScrollAnimation();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <div ref={scrollRef} className="min-h-screen bg-black text-white selection:bg-white/20 leading-relaxed font-sans">
            <Nav />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[200px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-6xl mx-auto relative z-10 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-10">
                            Enterprise Grade AI Studio
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-10 leading-[0.95]">
                            Production Ready <br />
                            <ChromeText>Creative Scale</ChromeText>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                            Transform your media production with the world's most capable AI visual studio. Built for security, designed for teams, and optimized for global scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                Contact Sales
                            </button>
                            <button className="px-12 py-5 rounded-full border border-white/20 text-white font-semibold text-xl hover:bg-white/10 transition-all backdrop-blur-md">
                                Book Platform Demo
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Floating elements for visual depth */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-600 animate-bounce cursor-pointer">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-gray-600 to-transparent" />
                </div>
            </section>

            {/* Trust & Presence Section */}
            <section className="py-32 border-y border-white/5 bg-[#030303] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-500 text-xs uppercase tracking-[0.5em] mb-20">Empowering Global Innovation Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale hover:opacity-50 transition-all duration-1000">
                        <div className="text-3xl font-bold tracking-tighter">TECHNE GROUP</div>
                        <div className="text-3xl font-bold tracking-tighter">ORBITAL SYSTEMS</div>
                        <div className="text-3xl font-bold tracking-tighter">SYNTHETIC MEDIA</div>
                        <div className="text-3xl font-bold tracking-tighter">QUANTUM LABS</div>
                    </div>
                </div>
            </section>

            {/* Core Advantages */}
            <section className="py-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="animate-on-scroll animate-fade-in-left">
                            <h2 className="text-2xl md:text-4xl font-semibold mb-8 tracking-tight">Security Without <ChromeText>Compromise</ChromeText></h2>
                            <p className="text-gray-400 text-base md:text-lg mb-12 font-light leading-relaxed">
                                We've built Omi AI from the ground up to meet the most stringent enterprise requirements. Your data, your models, and your creativity are protected by multi-layered defense.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Single Sign-On (SSO)", desc: "SAML, OAuth, and LDAP integration.", icon: <Lock size={20} /> },
                                    { title: "Isolated Workspaces", desc: "Private environments for every department.", icon: <ShieldAlert size={20} /> },
                                    { title: "Compliance Ready", desc: "Built with SOC2 and HIPAA standards in mind.", icon: <CheckCircle2 size={20} /> }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-6 group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 text-white">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="animate-on-scroll animate-fade-in-right relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[48px] blur-2xl opacity-50" />
                            <div className="relative aspect-square bg-[#050505] rounded-[48px] border border-white/10 p-12 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-blue-500 rounded-full" />
                                    <h3 className="text-3xl font-semibold">Global Infrastructure</h3>
                                    <p className="text-gray-500 font-light">Deploy across 25+ regions with zero-latency inference and local data residency options.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="text-xs text-blue-400 font-bold mb-2 uppercase tracking-widest">Inference Edge</div>
                                        <div className="text-2xl font-semibold text-white">2.4ms</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="text-xs text-purple-400 font-bold mb-2 uppercase tracking-widest">GPU Clusters</div>
                                        <div className="text-2xl font-semibold text-white">5,000+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-40 bg-[#020202] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 animate-on-scroll animate-fade-in-up">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">Tailored <ChromeText>Solutions</ChromeText></h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Specific tools for specific industry needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Media & Entertainment",
                                desc: "Accelerate pre-visualization and production cycles with hyper-realistic scene generation.",
                                icon: <Rocket />,
                                delay: "100"
                            },
                            {
                                title: "E-Commerce & Retail",
                                desc: "Generate infinite product variations and lifestyle shots in seconds for your entire catalog.",
                                icon: <Briefcase />,
                                delay: "300"
                            },
                            {
                                title: "Advertising Agencies",
                                desc: "Create production-quality assets for any style, allowing for rapid A/B testing at scale.",
                                icon: <Handshake />,
                                delay: "500"
                            }
                        ].map((sol, i) => (
                            <div key={i} className={`animate-on-scroll animate-fade-in-up delay-${sol.delay} p-12 rounded-[40px] bg-black border border-white/5 hover:border-white/20 transition-all duration-700 group`}>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    {sol.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{sol.desc}</p>
                                <div className="mt-10 pt-10 border-t border-white/5">
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">Case Study →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-60 relative overflow-hidden bg-white text-black text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tighter leading-[0.9]">Transform the Future <br />of Your <span className="italic">Production</span>.</h2>
                        <p className="text-gray-500 text-base md:text-lg mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                            Join the elite creative teams already using Omi AI to change how they imagine, create, and deliver visual content.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-16 py-6 rounded-full bg-black text-white font-bold text-2xl hover:bg-neutral-800 transition-all hover:scale-105 shadow-2xl active:scale-95">
                                Book Enterprise Consultation
                            </button>
                        </div>
                        <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                            <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> SOC2 COMPLIANT</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> SAML SSO</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> DEDICATED SUPPORT</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
