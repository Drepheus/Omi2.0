"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ArrowUp, ChevronDown, ChevronUp, X, Cloud, Target, Zap, Cpu } from "lucide-react";
import { Inter } from "next/font/google";
import { useAuth } from "@/context/auth-context";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Chrome/Silver gradient text component with shimmer animation
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

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// Component for videos that play on hover/click
const HoverVideo = ({ src, className = "" }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(err => console.log("Video play interrupted", err));
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.log("Video play interrupted", err));
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className={`rounded-xl overflow-hidden relative group bg-gray-900 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

// Specialized carousel version
const CategoryVideo = ({ src }: { src: string }) => (
  <HoverVideo src={src} className="carousel-item" />
);

// Logo Ticker Component for the scrolling logos
const LogoTicker = () => {
  return (
    <div className="w-full bg-black py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center gap-4 mr-16 shrink-0 z-10 bg-black pr-12 shadow-[30px_0_40px_-5px_#000]">
          <span className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">TRUSTED BY:</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-24 items-center animate-scroll-left whitespace-nowrap w-max">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center pr-24">
                {/* AND THEORY */}
                <span className="text-[#666] font-serif font-bold text-2xl tracking-tighter opacity-80 hover:text-white transition-colors cursor-default">AND THEORY</span>

                {/* Trapdoor Creative */}
                <div className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  <Target className="w-6 h-6 text-gray-400" />
                  <div className="flex flex-col leading-none">
                    <span className="text-gray-400 font-bold text-lg">Trapdoor</span>
                    <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest mt-0.5">Creative</span>
                  </div>
                </div>

                {/* McCANN WORLDGROUP */}
                <div className="flex flex-col items-center leading-none opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  <span className="text-gray-400 font-black text-2xl tracking-tight">McCANN</span>
                  <span className="text-[#555] text-[9px] font-bold tracking-[0.3em] uppercase mt-0.5">WORLDGROUP</span>
                </div>

                {/* Google Cloud */}
                <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  <Cloud className="w-7 h-7 text-gray-400" />
                  <span className="text-gray-400 font-medium text-xl tracking-tight">Google Cloud</span>
                </div>

                {/* Clutch */}
                <span className="text-gray-400 font-serif font-black italic text-4xl opacity-70 hover:opacity-100 hover:text-white transition-all cursor-default scale-y-90">Clutch</span>

                {/* FUTUREBRAND */}
                <span className="text-gray-500 font-light text-xl tracking-[0.6em] hover:text-white transition-colors cursor-default">FUTUREBRAND</span>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

// Section Divider component with animating lines and faded logo
const SectionDivider = () => {
  return (
    <div className="w-full flex items-center justify-center py-20 opacity-30 pointer-events-none overflow-hidden h-24">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 1.8, ease: "circOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-white/50 flex-1 origin-right"
      />
      <div className="mx-12 shrink-0">
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/40">
          <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
        </svg>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 1.8, ease: "circOut" }}
        className="h-[1px] bg-gradient-to-l from-transparent via-white/30 to-white/50 flex-1 origin-left"
      />
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'text-gray-500 group-hover:border-white/20'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "What is Omi AI Studio?",
      answer: "Omi AI Studio is an all-in-one generative AI platform that turns your creative ideas into high-quality, professional videos. From scripting and storyboarding to editing and final delivery, Omi AI simplifies every stage of the video production process. Designed specifically for creative professionals, it offers powerful tools that make advanced storytelling accessible — while remaining intuitive enough for creators at any level. Omi AI Studio is where your vision becomes reality, pushing the boundaries of modern video creation."
    },
    {
      question: "What can I create with Omi AI?",
      answer: "As an all-in-one video generation platform, you can create cinematic videos, precise storyboards, visual concepts, perfect match cuts, and professional-grade animations — all from a simple text prompt or character reference."
    },
    {
      question: "How do I access Omi AI Studio?",
      answer: "No downloads are required — Omi AI Studio is a high-performance web-based platform. Simply sign up on our website to access the studio directly from your browser and start creating immediately."
    },
    {
      question: "Can I use Omi AI on mobile?",
      answer: "Omi AI is optimized for professional desktop use and high-resolution rendering, and is not currently available as a mobile app. For the most precise control and the best creative experience, please access Omi AI Studio from a desktop browser."
    },
    {
      question: "Is Omi AI Studio open-source?",
      answer: "Omi AI Studio is not open-source; we focus on offering a proprietary, secure, and world-class high-performance solution. This allows us to deliver value through continuous innovation and enterprise-grade reliability without the complexities of open-source development."
    },
    {
      question: "Is Omi AI Studio free?",
      answer: "Omi AI Studio offers both free and premium plans. You can start exploring basic features for free, and upgrade to a Pro or Enterprise plan to unlock advanced models, faster generation speeds, and significantly more computing credits."
    },
    {
      question: "How much does Omi AI Studio cost?",
      answer: "Pricing is designed to scale with your creative needs. We offer flexible monthly and annual subscriptions with varying levels of processing power. For complete details on our current plans, please visit our Pricing page."
    }
  ];

  return (
    <section className="relative z-[101] w-full bg-black py-32 px-4 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about the future of AI video.</p>
        </div>

        <div className="bg-[#050505] rounded-[40px] border border-white/5 p-8 md:p-12 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export function OmiAIStudio() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);

  // Handle Try Now button click
  const handleTryNow = () => {
    if (loading) return;
    if (user) {
      router.push('/studio');
    } else {
      router.push('/login?redirect=/studio');
    }
  };

  // Typing animation state
  const [typingText, setTypingText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const prompts = [
    "Cinematic drone shot of a futuristic city",
    "A cute robot painting a canvas in a park",
    "Slow motion water droplets on a rose",
    "Cyberpunk street food vendor at night",
    "An astronaut floating through a nebula",
    "Time-lapse of clouds moving over mountains",
    "A golden retriever playing in autumn leaves",
    "Underwater view of a coral reef with fish",
    "A vintage car driving along a coastal road",
    "A magical library with flying books"
  ];

  useEffect(() => {
    const currentPrompt = prompts[promptIndex % prompts.length];
    const typeSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && typingText === currentPrompt) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setPromptIndex((prev) => prev + 1);
        return;
      }

      setTypingText(prev => {
        if (isDeleting) return prev.slice(0, -1);
        return currentPrompt.slice(0, prev.length + 1);
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, promptIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className={`relative w-full bg-black text-white selection:bg-white/20 ${inter.className}`}>

      <Nav />

      {/* Hero Section */}
      <div className="relative z-10 h-screen w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="min-h-full min-w-full object-cover opacity-70"
          >
            <source src="/videos/RAYVID.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 pt-24 pb-8 md:justify-center md:pt-20">
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-center w-full break-words px-2 animate-on-scroll animate-fade-in-up animated">
              Use Your <br />
              <span className="inline-block font-semibold">
                <ChromeText>Imagination</ChromeText>
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-xs md:max-w-2xl mx-auto font-light text-center leading-relaxed animate-on-scroll animate-fade-in-up animated delay-200">
              Production-ready images and videos with precision, speed, and control
            </p>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-3xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-1 flex flex-col transition-all duration-300 focus-within:bg-black/80 focus-within:border-white/20">
              <div className="flex flex-col min-h-[180px] md:min-h-[140px] p-5">
                <textarea
                  placeholder="Tell me more about your character..."
                  className="w-full bg-transparent text-white placeholder-gray-500 text-lg md:text-xl resize-none focus:outline-none mb-4 font-light"
                  style={{ scrollbarWidth: 'none' }}
                  onChange={(e) => {
                    if (e.target.value.length === 1 && !showInputModal) {
                      setShowInputModal(true);
                      e.target.value = '';
                      e.target.blur();
                    }
                  }}
                />

                <div className="mt-auto flex justify-end items-center pr-2 pb-1">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg shadow-white/10">
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Modal */}
          {showInputModal && (
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
              onClick={() => setShowInputModal(false)}
            >
              <div
                className="relative w-full max-w-sm bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 animate-scale-in border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowInputModal(false)}
                  className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>

                {/* Video Section */}
                <div className="relative aspect-[4/3] bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/film.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] mb-0.5 font-medium">INTRODUCING</p>
                  <h3 className={`text-base font-semibold mb-1.5`}>Omi AI Studio</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                    Stop guessing. Start creating. Omi AI Studio brings world-class AI video and image generation to your fingertips with natural language prompts and character consistency.
                  </p>

                  {/* CTA Button - Refined */}
                  <button
                    onClick={handleTryNow}
                    className="w-full py-2 rounded-lg bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white/80 hover:text-white font-medium text-xs transition-all"
                  >
                    {user ? 'Open Studio' : 'Login to Continue'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Clean branding */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-gray-400 text-sm font-medium tracking-wider">CREATIVE STUDIO</span>
            </div>
          </div>
        </main>
      </div>

      {/* Scrolling Logo Ticker */}
      <LogoTicker />

      <SectionDivider />

      {/* Features Section */}
      <section className="relative z-20 w-full min-h-screen bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 tracking-tight">
            Do it all with <br />
            <span className="inline-block font-semibold">
              <ChromeText>Omi AI Studio</ChromeText>
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Make Videos Card */}
            <div className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-colors w-full max-w-md md:max-w-6xl">
              <div className="p-8 pb-0 text-center">
                <h3 className="text-xl md:text-3xl font-semibold mb-3 md:mb-6">Make Videos</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  Direct the perfect shot with start/end frames. Extend any video or say "loop" to make it loop.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#1a1a1a] mt-auto">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/videos/klingnextgen.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* No Prompt Engineering Section */}
      <section className="relative z-30 w-full min-h-screen bg-black py-24 px-4 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={handleTryNow}
            className="mb-12 px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/20"
          >
            Start Omi AIizing
          </button>

          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight leading-tight">
            No prompt <br />
            engineering needed,
          </h2>

          <div className="relative w-full max-w-md md:max-w-6xl mx-auto aspect-[3/4] md:aspect-[21/9] rounded-[40px] overflow-hidden group mb-12 transition-all duration-500">
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/veo2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <div className="text-5xl md:text-7xl mb-8 tracking-tighter transform -translate-y-8 flex justify-center font-semibold">
                <ChromeText>just ask</ChromeText>
              </div>
              <div className="h-12 flex items-center justify-center">
                <p className="text-lg md:text-2xl text-white/90 font-light tracking-wide">
                  {typingText}<span className="animate-pulse ml-1">|</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Film & Design Carousels */}
      <section className="relative z-40 w-full bg-black py-24 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }
          .carousel-item {
            flex: 0 0 auto;
            width: 280px;
            height: 158px; /* 16:9 */
          }
          @media (min-width: 768px) {
            .carousel-item {
              width: 480px;
              height: 270px;
            }
          }
        `}} />

        {/* Section Header with See More */}
        <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">Categories</h2>
            <p className="text-gray-400 text-base">Explore what you can create with Omi AI</p>
          </div>
          <button
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
          >
            <span className="text-white font-medium">{categoriesExpanded ? 'See Less' : 'See More'}</span>
            {categoriesExpanded ? (
              <ChevronUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>

        {/* Film Section - Always visible */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 animate-on-scroll animate-fade-in-up">Film</h3>
            <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
              View model preference chart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </p>
          </div>

          <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <CategoryVideo src="/videos/film.mp4" />
                <CategoryVideo src="/videos/film2.mp4" />
                <CategoryVideo src="/videos/film3.mp4" />
                <CategoryVideo src="/videos/film5.mp4" />
                <CategoryVideo src="/videos/film6.mp4" />
                <CategoryVideo src="/videos/film7.mp4" />
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Categories */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${categoriesExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Animated Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">Animated</h3>
              <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                Explore animated styles
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </p>
            </div>

            <div className="flex gap-4 w-max animate-scroll-right hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <CategoryVideo src="/videos/ani.mp4" />
                  <CategoryVideo src="/videos/ani1.mp4" />
                  <CategoryVideo src="/videos/ani4.mp4" />
                </div>
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                View model preference chart
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </p>
            </div>

            <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <CategoryVideo src="/videos/design.mp4" />
                  <CategoryVideo src="/videos/design2.mp4" />
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">Products</h3>
              <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                Showcase your products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </p>
            </div>

            <div className="flex gap-4 w-max animate-scroll-right hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <CategoryVideo src="/videos/product.mp4" />
                  <CategoryVideo src="/videos/product1.mp4" />
                  <CategoryVideo src="/videos/product2.mp4" />
                  <CategoryVideo src="/videos/product3.mp4" />
                  <CategoryVideo src="/videos/product4.mp4" />
                  <CategoryVideo src="/videos/product5.mp4" />
                  <CategoryVideo src="/videos/product6.mp4" />
                  <CategoryVideo src="/videos/product7.mp4" />
                </div>
              ))}
            </div>
          </div>

          {/* Music Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">Music</h3>
              <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
                Visualize your sound
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </p>
            </div>

            <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <CategoryVideo src="/videos/music.mp4" />
                  <CategoryVideo src="/videos/music2.mp4" />
                </div>
              ))}
            </div>
          </div>

          {/* And More Section */}
          <div className="mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h3 className="text-4xl md:text-6xl font-semibold text-white mb-4 animate-on-scroll animate-fade-in-up">
                and more...
              </h3>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto animate-on-scroll animate-fade-in-up delay-200">
                Whatever you can imagine, Omi AI can create. Explore endless possibilities across every creative category.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Powered By Section */}
      <section className="relative z-50 w-full min-h-screen bg-black py-32 px-4 flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-3xl md:text-5xl font-semibold leading-snug text-neutral-600 animate-on-scroll animate-blur-in">
            Powered by <span className="text-white">Veo</span>, our world's most capable video generation model. <span className="text-white">Imagen 3</span>, our most advanced image synthesis engine. Integrated with <span className="text-white">Kling AI</span>, <span className="text-white">LumaLabs</span>, <span className="text-white">Sora</span>, <span className="text-white">Wan2.6</span>, <span className="text-white">HY World</span>, <span className="text-white">Seedance</span>, and <span className="text-white">FLUX2</span>.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* New Freedoms Section */}
      <section className="relative z-60 w-full min-h-screen bg-black pb-32 px-4 flex items-center justify-center">
        <div className="relative w-full max-w-md md:max-w-6xl mx-auto aspect-[3/4] md:aspect-[21/9] rounded-[40px] overflow-hidden group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/videos/veo1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 leading-none select-none font-semibold">
            <span className="text-5xl md:text-7xl text-white font-semibold tracking-tighter mb-2">New</span>
            <span className="text-6xl md:text-8xl text-white font-semibold tracking-tighter mb-2">freedoms</span>
            <span className="text-5xl md:text-7xl text-white font-semibold tracking-tighter mb-2">of</span>
            <span className="text-6xl md:text-8xl font-semibold tracking-tighter flex justify-center">
              <ChromeText>imagination</ChromeText>
            </span>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Video Section Showcase */}
      <section className="relative z-[70] w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 tracking-tight animate-on-scroll animate-fade-in-up">
            Seamless <ChromeText>Integration</ChromeText>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto animate-on-scroll animate-fade-in-up delay-200">
            See how Omi AI fits naturally into your creative workflow
          </p>
          <div className="relative w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-white/10 animate-on-scroll animate-scale-fade delay-300">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/videsectionloop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Portrait Video Feature Section */}
      <section className="relative z-[80] w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight animate-on-scroll animate-fade-in-left">
                Create for <br />
                <span className="inline-block">
                  <ChromeText>Every Format</ChromeText>
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-on-scroll animate-fade-in-left delay-200">
                From cinematic widescreen to vertical social content. Omi AI adapts to your vision, not the other way around.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={handleTryNow}
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
                >
                  Try It Free
                </button>
                <button className="px-8 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10" onClick={(e) => { e.preventDefault(); document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  View Examples
                </button>
              </div>
            </div>

            {/* Portrait Video */}
            <div className="order-1 md:order-2 flex justify-center animate-on-scroll animate-fade-in-right delay-300">
              <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/verticalvid.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Text to Image Section */}
      <section className="relative z-[85] w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 tracking-tight animate-on-scroll animate-fade-in-up">
            Text to <ChromeText>Image</ChromeText>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto animate-on-scroll animate-fade-in-up delay-200">
            Transform your words into stunning visuals with unparalleled precision and creativity
          </p>
          <div className="relative w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-white/10 animate-on-scroll animate-scale-fade delay-300">
            <HoverVideo src="/videos/text2image.mp4" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Character Consistency Section */}
      <section className="relative z-[90] w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Portrait Video */}
            <div className="flex justify-center animate-on-scroll animate-fade-in-left">
              <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/samchar.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight animate-on-scroll animate-fade-in-right">
                Character <br />
                <span className="inline-block">
                  <ChromeText>Consistency</ChromeText>
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Keep your characters looking the same across every scene. From the first frame to the last, maintain perfect visual coherence for your stories.
              </p>
              <ul className="space-y-4 text-gray-300 text-left max-w-lg mx-auto md:mx-0">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>Same character, different scenes and poses</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>Preserve facial features and expressions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>Perfect for storytelling and brand mascots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Avatar Demos Section */}
      <section className="relative z-[95] w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-6xl font-semibold text-center mb-6 tracking-tight animate-on-scroll animate-fade-in-up`}>
            AI <ChromeText>Avatars</ChromeText>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto animate-on-scroll animate-fade-in-up delay-200">
            Create lifelike digital humans that speak, move, and express emotions naturally
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Avatar Scene Video */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 bg-[#111] group animate-on-scroll animate-fade-in-up delay-300">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src="/videos/avatarscene.mp4" type="video/mp4" />
              </video>
              <div className="p-4">
                <h3 className={`text-xl font-semibold text-white mb-2`}>Scene Generation</h3>
                <p className="text-gray-400 text-sm">Full avatar in dynamic environments</p>
              </div>
            </div>

            {/* Two Avatars Video */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 bg-[#111] group animate-on-scroll animate-fade-in-up delay-500">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src="/videos/twoavatars.mp4" type="video/mp4" />
              </video>
              <div className="p-4">
                <h3 className={`text-xl font-semibold text-white mb-2`}>Multi-Avatar Conversations</h3>
                <p className="text-gray-400 text-sm">Multiple avatars interacting together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Features Zigzag Section */}
      <section className="relative z-[96] w-full bg-black py-24 px-4 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto space-y-32">

          {/* Feature 1 - Any Style */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 order-2 md:order-1 animate-on-scroll animate-fade-in-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-full mb-6 border border-blue-500/30">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Any Style
              </span>
              <h3 className={`text-3xl md:text-4xl font-semibold mb-5 leading-tight`}>
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">From Cartoons to</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Realistic Scenes</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether you want to animate a drawing, make your pet dance, or bring a <span className="text-blue-400 font-medium">product shot</span> to life, our AI video generator can create videos in any style, while preserving the original context and details.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 animate-on-scroll animate-fade-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] group-hover:border-blue-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                  <source src="/videos/ani.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Feature 2 - Greater Realism */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
            <div className="flex-1 animate-on-scroll animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] group-hover:border-emerald-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                  <source src="/videos/nature.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex-1 animate-on-scroll animate-fade-in-right delay-200">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 rounded-full mb-6 border border-emerald-500/30">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Greater Realism
              </span>
              <h3 className={`text-3xl md:text-4xl font-semibold mb-5 leading-tight`}>
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Add Greater Realism</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">with AI Motion</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Omi AI's artificial intelligence image to video feature uses advanced deep learning to create lifelike, immersive videos. Add drama, realism, or storytelling depth to any static image.
              </p>
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* Generate Without Learning Curve Section */}
      <section className="relative z-[97] w-full bg-black py-24 px-4 overflow-hidden">
        {/* Animated background orb */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-32">
            <div className="flex-1 animate-on-scroll animate-fade-in-left">
              <h2 className={`text-4xl md:text-5xl font-semibold mb-6 leading-tight`}>
                <span className="bg-[length:200%_auto] bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-shimmer">Generate AI videos</span>
                <br />
                <span className="bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">without a learning curve</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Type your idea, add the specifics—like length, platform, voiceover accent, and get AI-generated high-quality videos that put your ideas into focus.
              </p>
              <button
                onClick={handleTryNow}
                className="group px-8 py-3 rounded-full border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                Create now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-blue-500/5">
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                  <source src="/videos/fantasy.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* For Creators/Teams/Developers Section */}
      <section className="relative z-[98] w-full bg-black py-24 px-4">
        <div className="relative max-w-6xl mx-auto">
          <HoverEffect items={[
            {
              title: "For Creators",
              description: "Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.",
              link: "#",
            },
            {
              title: "For Teams",
              description: "Bring your team's best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration and built for business.",
              link: "#",
            },
            {
              title: "For Developers",
              description: "Experience content creation excellence with Omi AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guidelines.",
              link: "#",
            }
          ]} />
        </div>
      </section>

      <SectionDivider />

      {/* Community Section */}
      <section id="community" className="relative z-[99] w-full bg-gradient-to-b from-black via-[#0a0a1a] to-black py-24 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 mb-6 animate-on-scroll animate-fade-in-up">
              Growing Community of Creators
            </span>
            <h2 className={`text-4xl md:text-5xl font-semibold mb-6 leading-tight`}>
              <span className="text-white">Be part of a </span>
              <ChromeText>creative</ChromeText>
              <br />
              <span className="text-white">community! </span>
              <span className="text-3xl">🌍</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Join thousands of creators, artists, and developers pushing the boundaries of AI-generated content.
            </p>
            <a
              href="https://discord.gg/omi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#5865F2]/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord Server
            </a>
          </div>

          {/* Right - Floating Avatars */}
          <div className="flex-1 relative h-[400px] hidden md:block">
            {/* Avatar Grid - scattered floating effect */}
            {[
              { top: '5%', left: '10%', size: 'w-16 h-16', delay: '0s', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
              { top: '0%', left: '35%', size: 'w-14 h-14', delay: '0.5s', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { top: '10%', left: '60%', size: 'w-12 h-12', delay: '1s', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
              { top: '5%', left: '85%', size: 'w-14 h-14', delay: '0.3s', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
              { top: '25%', left: '0%', size: 'w-12 h-12', delay: '0.7s', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
              { top: '30%', left: '25%', size: 'w-16 h-16', delay: '0.2s', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
              { top: '25%', left: '50%', size: 'w-14 h-14', delay: '0.9s', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
              { top: '35%', left: '75%', size: 'w-12 h-12', delay: '0.4s', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
              { top: '50%', left: '5%', size: 'w-14 h-14', delay: '0.6s', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
              { top: '55%', left: '30%', size: 'w-12 h-12', delay: '0.1s', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop' },
              { top: '50%', left: '55%', size: 'w-16 h-16', delay: '0.8s', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop' },
              { top: '55%', left: '80%', size: 'w-14 h-14', delay: '0.35s', avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop' },
              { top: '75%', left: '15%', size: 'w-12 h-12', delay: '0.55s', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd44?w=100&h=100&fit=crop' },
              { top: '70%', left: '40%', size: 'w-14 h-14', delay: '0.25s' },
              { top: '75%', left: '65%', size: 'w-12 h-12', delay: '0.75s' },
              { top: '80%', left: '90%', size: 'w-14 h-14', delay: '0.45s' },
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos.size} rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white/10 overflow-hidden animate-float`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  animationDelay: pos.delay,
                }}
              >
                {pos.avatar ? (
                  <img src={pos.avatar} alt="Community Member" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30" />
                )}
              </div>
            ))}

            {/* Discord Logo Avatars scattered in */}
            <div className="absolute top-[20%] left-[45%] w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center animate-float" style={{ animationDelay: '0.65s' }}>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <div className="absolute top-[60%] left-[20%] w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center animate-float" style={{ animationDelay: '0.85s' }}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose Omi AI Section - Banner Section */}
      <section className="relative z-[100] w-full min-h-[500px] flex items-center justify-center py-24 px-4 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner-bg.png"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-60 scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight uppercase">
            Why companies choose <span className="text-white">Omi AI Studio</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Partner Card */}
            <div className="relative group overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-b from-white/20 to-transparent">
              <div className="relative h-full bg-black/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Official Google Partner</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Verified enterprise-grade reliability and cloud infrastructure scaling.
                </p>
              </div>
            </div>

            {/* Omi AI Card */}
            <div className="relative group overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-b from-purple-500/30 to-transparent">
              <div className="relative h-full bg-black/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="mb-8 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Powered by Omi AI</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advanced scene recognition and perfect character consistency across generations.
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#555] font-bold">Accuracy rate</span>
                </div>
              </div>
            </div>

            {/* Fastest Generation Card */}
            <div className="relative group overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/30 to-transparent">
              <div className="relative h-full bg-black/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="mb-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <Zap className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fastest Generation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Production-ready assets delivered in seconds, not minutes.
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">3x Faster</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#555] font-bold">Than competitors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Section */}
      <section className="relative z-[100] w-full bg-black py-16 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10 animate-on-scroll animate-fade-in-up">Powered by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 animate-on-scroll animate-fade-in-up delay-200">
            <img src="/images/veo3-logo.png" alt="Veo 3" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/images/kling-ai-logo.png" alt="Kling AI" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/images/luma-labs-logo.png" alt="LumaLabs" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/images/percify-logo.png" alt="Percify" className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA Section */}
      <section className="relative z-[101] w-full bg-black py-32 px-4 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-semibold mb-6 leading-tight animate-on-scroll animate-scale-fade`}>
            <span className="text-white">Ready to </span>
            <ChromeText>create</ChromeText>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-on-scroll animate-fade-in-up delay-200">
            Join thousands of creators using Omi AI to bring their imagination to life. Start creating stunning AI-generated videos today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll animate-fade-in-up delay-400">
            <button
              onClick={handleTryNow}
              className="group px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3"
            >
              Get Started Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="/api-docs"
              className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300"
            >
              View API Docs
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
}
