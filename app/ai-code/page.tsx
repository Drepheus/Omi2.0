"use client";

import { useRouter } from 'next/navigation';
import { StickyHeader } from '@/components/ui/sticky-header';
import { AnimatedSectionTitle } from '@/components/ui/animated-section-title';
import CodeModelsCarousel from '@/src/CodeModelsCarousel';
import CodeExpandableCards from '@/src/CodeExpandableCards';
import CodeToolsSection from '@/src/CodeToolsSection';
import '@/src/AIMediaLanding.css';

export default function AICodePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
            </div>

            <StickyHeader
                title="AI Code Studio"
                icon="💻"
                actionLabel="Try Omi Dev Tools →"
                onAction={() => router.push('/custom-omis')}
            />

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero */}
                <div className="text-center mb-24 media-hero">
                    <div className="hero-badge mx-auto">
                        <span className="badge-dot"></span>
                        <span>Powered by Claude, OpenAI, DeepSeek</span>
                    </div>
                    <h2 className="hero-title">
                        <span className="title-line">Vibecoding &</span>
                        <span className="title-line gradient-animated">AI Dev Tools</span>
                    </h2>
                    <p className="hero-subtitle">
                        Accelerate your development workflow with intelligent code generation,
                        refactoring, and automated documentation.
                    </p>
                </div>

                {/* Models Carousel */}
                <section className="mb-24">
                    <div className="mb-8">
                        <AnimatedSectionTitle title="Top Coding Models" icon="🧠" />
                    </div>
                    <CodeModelsCarousel />
                </section>

                {/* Vibecoding Platforms */}
                <section className="mb-24">
                    <CodeExpandableCards />
                </section>

                {/* Tools Section */}
                <section className="mb-24">
                    <CodeToolsSection />
                </section>

                {/* Section */}
                <div className="mb-20">
                    <AnimatedSectionTitle title="Supported Languages" icon="🌐" />
                    <div className="flex flex-wrap gap-4 mt-8">
                        {['TypeScript', 'Python', 'Rust', 'Go', 'JavaScript', 'C++', 'Solidity'].map(lang => (
                            <span key={lang} className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
