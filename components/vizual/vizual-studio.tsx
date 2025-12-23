"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import { MetallicText } from "./MetallicText";
import { useAuth } from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export function VizualStudio() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle Try Now button click
  const handleTryNow = () => {
    if (loading) return;
    if (user) {
      router.push('/vizual/studio');
    } else {
      router.push('/login?redirect=/vizual/studio');
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

  return (
    <div className={`relative w-full bg-black text-white selection:bg-white/20 ${inter.className}`}>
      
      {/* Hero Section - Sticky */}
      <div className="sticky top-0 z-10 h-screen w-full">
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

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-4 md:py-6'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div 
                onClick={() => router.push('/command-hub')}
                className="cursor-pointer flex items-center gap-2 group"
              >
                 {/* Logo Icon */}
                 <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform group-hover:scale-110 md:w-6 md:h-6">
                  <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
                </svg>
                <div className="font-bold text-lg md:text-xl tracking-tight flex items-center">
                  <MetallicText text="VIZUAL" height={100} />
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                <a href="#" className="hover:text-white transition-colors">STUDIO</a>
                <a href="#" className="hover:text-white transition-colors">API</a>
                <a href="#" className="hover:text-white transition-colors">ENTERPRISE</a>
                <a href="#" className="hover:text-white transition-colors">RESEARCH</a>
                <a href="#" className="hover:text-white transition-colors">COMMUNITY</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <button className="hidden md:block px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-all border border-white/10 backdrop-blur-sm">
                JOIN US
              </button>
              <button 
                onClick={handleTryNow}
                className="px-5 py-2 md:px-6 md:py-2 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors"
              >
                TRY NOW
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 pt-24 pb-8 md:justify-center md:pt-20">
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-center w-full break-words px-2">
              Use Your <br />
              <span className={`${spaceGrotesk.className} inline-block`}>
                <MetallicText text="Imagination" height={300} />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-xs md:max-w-2xl mx-auto font-light text-center leading-relaxed">
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
                  className="w-full bg-transparent text-white placeholder-gray-500 text-xl md:text-2xl resize-none focus:outline-none mb-4 font-light"
                  style={{ scrollbarWidth: 'none' }}
                />
                
                <div className="mt-auto flex justify-end items-center pr-2 pb-1">
                   <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg shadow-white/10">
                      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section className="relative z-20 w-full min-h-screen bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 tracking-tight">
            Do it all with <br />
            <span className={`${spaceGrotesk.className} inline-block`}>
              <MetallicText text="Vizual Studio" height={250} />
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Make Videos Card */}
            <div className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-colors w-full max-w-md md:max-w-6xl">
              <div className="p-8 pb-0 text-center">
                <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Make Videos</h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
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

      {/* No Prompt Engineering Section */}
      <section className="relative z-30 w-full min-h-screen bg-black py-24 px-4 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight leading-tight">
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
              <div className={`${spaceGrotesk.className} text-6xl md:text-8xl mb-8 tracking-tighter transform -translate-y-8 flex justify-center`}>
                <MetallicText text="just ask" height={300} />
              </div>
              <div className="h-12 flex items-center justify-center">
                <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide">
                  {typingText}<span className="animate-pulse ml-1">|</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Film & Design Carousels */}
      <section className="relative z-40 w-full min-h-screen bg-black py-24 overflow-hidden flex flex-col justify-center">
        <style dangerouslySetInnerHTML={{__html: `
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

        {/* Film Section */}
        <div className="mb-24">
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <h3 className={`text-4xl md:text-5xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>Film</h3>
            <p className="text-gray-400 text-lg hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
              View model preference chart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </p>
          </div>
          
          <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* Duplicate items for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/image (45).jpg" alt="Film sample 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/image (52).jpg" alt="Film sample 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/image (59).jpg" alt="Film sample 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/image (63).jpg" alt="Film sample 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                 <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/CYBER DRE.png" alt="Film sample 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Section */}
        <div>
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <h3 className={`text-4xl md:text-5xl font-bold text-white mb-2 ${spaceGrotesk.className}`}>Design</h3>
            <p className="text-gray-400 text-lg hover:text-white cursor-pointer transition-colors inline-flex items-center gap-2">
              View model preference chart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </p>
          </div>
          
          <div className="flex gap-4 w-max animate-scroll-right hover:[animation-play-state:paused]">
             {/* Duplicate items for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/ai.jpg" alt="Design sample 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/samples/little guy.png" alt="Design sample 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/blueprints/dice.png" alt="Design sample 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/blueprints/image (35).jpg" alt="Design sample 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                 <div className="carousel-item rounded-xl overflow-hidden relative group bg-gray-900">
                   <img src="/images/personas/scientist.jpg" alt="Design sample 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="relative z-50 w-full min-h-screen bg-black py-32 px-4 flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <p className={`text-3xl md:text-5xl font-medium leading-snug text-neutral-600 ${spaceGrotesk.className}`}>
            Powered by <span className="text-white">Veo</span>, our world's most capable video generation model, designed for cinema. <span className="text-white">Imagen 3</span>, our most advanced image synthesis engine.
          </p>
        </div>
      </section>

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
            
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 leading-none select-none ${spaceGrotesk.className}`}>
               <span className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-2">New</span>
               <span className="text-6xl md:text-8xl text-white font-bold tracking-tighter mb-2">freedoms</span>
               <span className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-2">of</span>
               <span className="text-6xl md:text-8xl font-bold tracking-tighter flex justify-center">
                  <MetallicText text="imagination" height={300} />
               </span>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="relative z-[100] w-full bg-black border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
               <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
              </svg>
              <span className={`text-2xl font-bold tracking-tight text-white ${spaceGrotesk.className}`}>VIZUAL</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Pioneering the future of generative media. We build tools that empower creators to imagine the impossible.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
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
            <h4 className="text-white font-bold mb-2">powered by <span className={`${playfair.className} italic`}>Omi AI</span></h4>
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
          <p>© 2025 Vizual AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
