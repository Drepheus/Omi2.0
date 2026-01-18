"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { useGuestMode } from '@/context/guest-mode-context';
import MediaStudio from '@/src/MediaStudio';
import MediaModelsCarousel from '@/src/MediaModelsCarousel';
import { ThreeDMarqueeDemo } from '@/components/demos/three-d-marquee-demo';
import MediaToolsSection from '@/src/MediaToolsSection';
import { AnimatedSectionTitle } from '@/components/ui/animated-section-title';
import { StickyHeader } from '@/components/ui/sticky-header';

interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  type: 'image' | 'video' | 'audio' | 'avatar';
  features: string[];
  trending: boolean;
  new: boolean;
  icon: string;
  color: string;
  gradient: string;
  previewImage?: string;
}

interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

const aiModels: AIModel[] = [
  {
    id: 'imagen-3',
    name: 'Imagen 3',
    provider: 'Google',
    description: 'State-of-the-art image generation with stunning photorealism',
    type: 'image',
    features: ['4K Resolution', 'Photorealistic', 'Text Rendering', 'Fast'],
    trending: true,
    new: true,
    icon: '🎨',
    color: '#4285F4',
    gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
  },
  {
    id: 'veo-2',
    name: 'Veo 2',
    provider: 'Google',
    description: 'Revolutionary AI video generation with cinematic quality',
    type: 'video',
    features: ['4K Video', '2 Min Length', 'Cinematic', 'Physics'],
    trending: true,
    new: true,
    icon: '🎬',
    color: '#EA4335',
    gradient: 'linear-gradient(135deg, #EA4335 0%, #FBBC04 100%)',
  },
  {
    id: 'dall-e-3',
    name: 'DALL·E 3',
    provider: 'OpenAI',
    description: 'Creative image generation with exceptional prompt understanding',
    type: 'image',
    features: ['HD Quality', 'Creative', 'Text-Accurate', 'Styles'],
    trending: true,
    new: false,
    icon: '✨',
    color: '#10A37F',
    gradient: 'linear-gradient(135deg, #10A37F 0%, #0D8A6F 100%)',
  },
  {
    id: 'sora',
    name: 'Sora',
    provider: 'OpenAI',
    description: 'Text-to-video AI creating realistic and imaginative scenes',
    type: 'video',
    features: ['1080p', '60 Seconds', 'Realistic', 'Motion'],
    trending: true,
    new: true,
    icon: '📽️',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%)',
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney V6',
    provider: 'Midjourney',
    description: 'Artistic image generation with unique aesthetic styles',
    type: 'image',
    features: ['Artistic', 'Styles', 'Upscale', 'Variations'],
    trending: true,
    new: false,
    icon: '🌟',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    provider: 'ElevenLabs',
    description: 'Ultra-realistic AI voice generation and cloning',
    type: 'audio',
    features: ['Voice Clone', 'Multilingual', 'Emotions', 'Fast'],
    trending: true,
    new: false,
    icon: '🎙️',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    provider: 'HeyGen',
    description: 'AI avatar video generation for professional content',
    type: 'avatar',
    features: ['Avatars', 'Lip Sync', 'Templates', 'Voices'],
    trending: false,
    new: false,
    icon: '👤',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
  },
  {
    id: 'stable-diffusion-3',
    name: 'Stable Diffusion 3',
    provider: 'Stability AI',
    description: 'Open-source image generation with exceptional quality',
    type: 'image',
    features: ['Open Source', 'ControlNet', 'LoRA', 'Fast'],
    trending: false,
    new: true,
    icon: '⚡',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  }
];

const latestNews: NewsItem[] = [
  {
    id: '1',
    title: 'Google Veo 2 Sets New Standard for AI Video Generation',
    source: 'TechCrunch',
    date: 'Jan 16, 2026',
    category: 'Video AI',
    url: '#'
  },
  {
    id: '2',
    title: 'OpenAI Expands Sora Access to Enterprise Users',
    source: 'The Verge',
    date: 'Jan 15, 2026',
    category: 'Product',
    url: '#'
  },
  {
    id: '3',
    title: 'Imagen 3 Achieves Human-Level Text Rendering',
    source: 'Wired',
    date: 'Jan 14, 2026',
    category: 'Breakthrough',
    url: '#'
  },
  {
    id: '4',
    title: 'AI Art Market Reaches $10 Billion Valuation',
    source: 'Bloomberg',
    date: 'Jan 13, 2026',
    category: 'Industry',
    url: '#'
  },
  {
    id: '5',
    title: 'Midjourney V7 Preview Teased by CEO',
    source: 'Ars Technica',
    date: 'Jan 12, 2026',
    category: 'Preview',
    url: '#'
  }
];

const mediaCategories = [
  { id: 'all', name: 'All Models', icon: '✦', count: aiModels.length },
  { id: 'image', name: 'Image', icon: '🖼️', count: aiModels.filter(m => m.type === 'image').length },
  { id: 'video', name: 'Video', icon: '🎬', count: aiModels.filter(m => m.type === 'video').length },
  { id: 'audio', name: 'Audio', icon: '🎵', count: aiModels.filter(m => m.type === 'audio').length },
  { id: 'avatar', name: 'Avatar', icon: '👤', count: aiModels.filter(m => m.type === 'avatar').length },
];

export default function AIMediaStudioPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { isGuestMode } = useGuestMode();
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStudioInterface, setShowStudioInterface] = useState(false);
  const modelsGridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const filteredModels = selectedCategory === 'all'
    ? aiModels
    : aiModels.filter(m => m.type === selectedCategory);

  useEffect(() => {
    if (!user && !isGuestMode) {
      router.push('/login');
      return;
    }
    setIsLoaded(true);
  }, [user, isGuestMode, router]);

  // Update scroll button visibility
  const updateScrollButtons = useCallback(() => {
    if (!modelsGridRef.current) return;
    const container = modelsGridRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  }, []);

  useEffect(() => {
    const container = modelsGridRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons, isLoaded, selectedCategory]);

  const scrollModels = (direction: 'left' | 'right') => {
    if (!modelsGridRef.current) return;
    const scrollAmount = 380;
    modelsGridRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
  };

  const handleStartStudio = () => {
    setShowStudioInterface(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return '🖼️';
      case 'video': return '🎬';
      case 'audio': return '🎵';
      case 'avatar': return '👤';
      default: return '✦';
    }
  };

  if (!isLoaded) {
    return (
      <div className="ai-media-loading">
        <div className="loading-orb">
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <span className="orb-icon">🎨</span>
        </div>
      </div>
    );
  }

  // Show the studio interface when user clicks Try Omi Studio
  if (showStudioInterface) {
    return <MediaStudio onClose={() => setShowStudioInterface(false)} />;
  }

  return (
    <div className="ai-media-page">
      {/* Animated Background */}
      <div className="ai-media-bg">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-grid"></div>
        <div className="bg-noise"></div>
      </div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      {/* Header */}
      <StickyHeader
        title="AI Media Studio"
        icon="🎨"
        actionLabel="Try Omi Studio →"
        onAction={handleStartStudio}
      />

      {/* Main Content */}
      <main className="ai-media-main">
        {/* Hero Section */}
        <section className="media-hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Powered by Google, OpenAI & More</span>
            </div>
            <h2 className="hero-title">
              <span className="title-line">Create</span>
              <span className="title-line gradient-animated">Stunning AI Media</span>
            </h2>
            <p className="hero-subtitle">
              Generate images, videos, audio, and avatars with the world's most powerful AI models.
            </p>
          </div>

          {/* Stats Pills */}
          <div className="hero-stats">
            <div className="stat-pill">
              <span className="stat-icon">🖼️</span>
              <span className="stat-value">4</span>
              <span className="stat-label">Image Models</span>
            </div>
            <div className="stat-pill">
              <span className="stat-icon">🎬</span>
              <span className="stat-value">2</span>
              <span className="stat-label">Video Models</span>
            </div>
            <div className="stat-pill">
              <span className="stat-icon">🎵</span>
              <span className="stat-value">1</span>
              <span className="stat-label">Audio Model</span>
            </div>
            <div className="stat-pill">
              <span className="stat-icon">👤</span>
              <span className="stat-value">1</span>
              <span className="stat-label">Avatar Model</span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="filter-tabs">
            {mediaCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-name">{cat.name}</span>
                <span className="tab-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Models Grid */}
        <section className="models-section">
          <div className="section-header">
            <AnimatedSectionTitle title="Trending Models" icon="🔥" />
            <span className="section-badge">3 Trending</span>
          </div>

          <MediaModelsCarousel />
        </section>

        {/* Creative Models Section */}
        <section className="expandable-cards-section">
          <div className="section-header">
            <AnimatedSectionTitle title="Creative Models" icon="🎨" />
          </div>
          <ThreeDMarqueeDemo />
        </section>

        {/* Tools Section */}
        <section className="tools-section">
          <MediaToolsSection />
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="section-header">
            <AnimatedSectionTitle title="AI Media News" icon="📰" />
            <span className="section-badge live">
              <span className="live-indicator" />
              Live
            </span>
          </div>

          <div className="news-ticker-container">
            <div className="news-list">
              {latestNews.map((news) => (
                <a key={news.id} href={news.url} className="news-item">
                  <span className="news-category">{news.category}</span>
                  <span className="news-title">{news.title}</span>
                  <span className="news-meta">
                    <span className="news-source">{news.source}</span>
                    <span className="news-divider">•</span>
                    <span className="news-date">{news.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
