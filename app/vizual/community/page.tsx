"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, MessageCircle, Share2, Sparkles, TrendingUp, Play, Image as ImageIcon, Grid3X3, Filter } from "lucide-react";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Chrome/Silver gradient text component
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

// Sample community creations data
const communityCreations = [
  { id: 1, type: "video", src: "/videos/film.mp4", author: "StudioPro", likes: 2453, prompt: "Cinematic sunrise over a misty mountain range" },
  { id: 2, type: "video", src: "/videos/ani.mp4", author: "AnimeMaster", likes: 1892, prompt: "Anime hero transformation sequence" },
  { id: 3, type: "video", src: "/videos/product.mp4", author: "BrandLab", likes: 3201, prompt: "Luxury perfume bottle floating in water" },
  { id: 4, type: "video", src: "/videos/film2.mp4", author: "CinematicAI", likes: 987, prompt: "Film noir detective walking through rain" },
  { id: 5, type: "video", src: "/videos/design.mp4", author: "DesignFlow", likes: 1567, prompt: "Abstract fluid art motion graphics" },
  { id: 6, type: "video", src: "/videos/ani1.mp4", author: "TokyoDreams", likes: 2891, prompt: "Cyberpunk city with neon lights" },
  { id: 7, type: "video", src: "/videos/product1.mp4", author: "ProductViz", likes: 743, prompt: "Sneaker rotating on black background" },
  { id: 8, type: "video", src: "/videos/film3.mp4", author: "VFXWizard", likes: 1234, prompt: "Slow motion water splash with dramatic lighting" },
  { id: 9, type: "video", src: "/videos/music.mp4", author: "SoundScape", likes: 2156, prompt: "Music visualizer with pulsing geometry" },
  { id: 10, type: "video", src: "/videos/design2.mp4", author: "ArtisticAI", likes: 876, prompt: "Geometric patterns morphing into nature" },
  { id: 11, type: "video", src: "/videos/film5.mp4", author: "DreamMaker", likes: 3456, prompt: "Fantasy castle emerging from clouds" },
  { id: 12, type: "video", src: "/videos/product2.mp4", author: "LuxuryViz", likes: 654, prompt: "Watch commercial with light reflections" },
  { id: 13, type: "video", src: "/videos/ani4.mp4", author: "AnimeStudio", likes: 1789, prompt: "Magical girl power-up transformation" },
  { id: 14, type: "video", src: "/videos/film6.mp4", author: "SciFiLab", likes: 2345, prompt: "Spaceship flying through asteroid field" },
  { id: 15, type: "video", src: "/videos/music2.mp4", author: "BeatVisuals", likes: 987, prompt: "EDM music video with abstract shapes" },
  { id: 16, type: "video", src: "/videos/product3.mp4", author: "TechReview", likes: 1123, prompt: "Smartphone product reveal animation" },
];

const categories = [
  "All", "Film", "Animated", "Products", "Design", "Music", "Sci-Fi", "Nature", "Abstract"
];

const filters = [
  { name: "Trending", icon: <TrendingUp className="w-4 h-4" /> },
  { name: "All", icon: <Grid3X3 className="w-4 h-4" /> },
  { name: "Video", icon: <Play className="w-4 h-4" /> },
];

export default function CommunityPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("Trending");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className={`relative w-full min-h-screen bg-black text-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div 
              onClick={() => router.push('/vizual')}
              className="cursor-pointer flex items-center gap-2 group"
            >
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform group-hover:scale-110 md:w-6 md:h-6">
                <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
              </svg>
              <div className="font-bold text-lg md:text-xl tracking-tight flex items-center">
                <ChromeText>VIZUAL</ChromeText>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              <a href="/vizual/studio" className="hover:text-white transition-colors">STUDIO</a>
              <a href="/vizual/api" className="hover:text-white transition-colors">API</a>
              <a href="/vizual/enterprise" className="hover:text-white transition-colors">ENTERPRISE</a>
              <a href="/vizual/community" className="text-white transition-colors">COMMUNITY</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push('/vizual/studio')}
              className="px-5 py-2 md:px-6 md:py-2 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              CREATE
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-28 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${spaceGrotesk.className}`}>
            <span className="text-purple-400">Community</span> Creations
          </h1>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Trending</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Type Filters */}
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.name
                      ? "bg-white text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {filter.icon}
                  <span>{filter.name}</span>
                </button>
              ))}
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10" />
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === category
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {communityCreations.map((creation, index) => {
              // Vary heights for masonry effect
              const heights = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-[5/4]"];
              const heightClass = heights[index % heights.length];
              
              return (
                <div 
                  key={creation.id}
                  className="break-inside-avoid group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(creation.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative ${heightClass} rounded-2xl overflow-hidden bg-gray-900`}>
                    {/* Video/Image */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={creation.src} type="video/mp4" />
                    </video>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Author Badge - Top */}
                    <div className={`absolute top-4 left-4 flex items-center gap-2 transition-all duration-300 ${
                      hoveredCard === creation.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                        {creation.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{creation.author}</span>
                    </div>
                    
                    {/* Like Badge - Top Right */}
                    <div className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 ${
                      hoveredCard === creation.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}>
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{creation.likes.toLocaleString()}</span>
                    </div>
                    
                    {/* Bottom Content */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                      hoveredCard === creation.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}>
                      <p className="text-sm text-gray-200 line-clamp-2 mb-4">
                        {creation.prompt}
                      </p>
                      
                      {/* Remix Button */}
                      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-sm flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all">
                        <Sparkles className="w-4 h-4" />
                        Remix
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center pb-20">
        <button className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 font-medium transition-all">
          Load More Creations
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
            </svg>
            <span className={`font-bold ${spaceGrotesk.className}`}>VIZUAL</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Vizual. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
