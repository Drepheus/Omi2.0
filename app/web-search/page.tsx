"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { useGuestMode } from '@/context/guest-mode-context';
import WebSearch from '@/src/WebSearch';

interface SearchEngine {
  id: string;
  name: string;
  provider: string;
  description: string;
  features: string[];
  trending: boolean;
  new: boolean;
  icon: string;
  color: string;
  url?: string;
}

interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

const trendingEngines: SearchEngine[] = [
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    provider: 'Perplexity',
    description: 'AI-powered search engine that delivers accurate answers with sources',
    features: ['Real-time', 'Citations', 'AI Summary', 'Pro Search'],
    trending: true,
    new: false,
    icon: '🔮',
    color: '#20C997',
    url: 'https://www.perplexity.ai/'
  },
  {
    id: 'chatgpt-browse',
    name: 'ChatGPT Browse',
    provider: 'OpenAI',
    description: 'Browse the web with GPT-4o context and understanding',
    features: ['GPT-4o', 'Real-time', 'Conversational', 'Images'],
    trending: true,
    new: true,
    icon: '🌐',
    color: '#10A37F',
    url: 'https://chatgpt.com/'
  },
  {
    id: 'gemini-search',
    name: 'Gemini Search',
    provider: 'Google',
    description: 'Google\'s AI-powered search with multimodal understanding',
    features: ['Multimodal', 'Google Data', 'Real-time', 'Images'],
    trending: true,
    new: true,
    icon: '✦',
    color: '#4285F4',
    url: 'https://gemini.google.com/'
  },
  {
    id: 'you-search',
    name: 'You.com',
    provider: 'You.com',
    description: 'Private AI search with personalized results and apps',
    features: ['Privacy', 'Apps', 'AI Modes', 'No Ads'],
    trending: false,
    new: false,
    icon: '🔍',
    color: '#6366F1',
    url: 'https://you.com/'
  },
  {
    id: 'phind',
    name: 'Phind',
    provider: 'Phind',
    description: 'AI search engine optimized for developers and technical queries',
    features: ['Developer', 'Code', 'Technical', 'Fast'],
    trending: true,
    new: false,
    icon: '⚡',
    color: '#FF7000',
    url: 'https://www.phind.com/'
  },
  {
    id: 'tavily',
    name: 'Tavily',
    provider: 'Tavily',
    description: 'Search API optimized for AI agents and LLM applications',
    features: ['API', 'Agents', 'Accurate', 'Fast'],
    trending: true,
    new: true,
    icon: '🎯',
    color: '#8B5CF6',
    url: 'https://tavily.com/'
  }
];

const latestNews: NewsItem[] = [
  {
    id: '1',
    title: 'Perplexity Launches New Pro Search Features',
    source: 'TechCrunch',
    date: 'Jan 16, 2026',
    category: 'Product',
    url: '#'
  },
  {
    id: '2',
    title: 'Google Integrates Gemini into Search Results',
    source: 'The Verge',
    date: 'Jan 15, 2026',
    category: 'Update',
    url: '#'
  },
  {
    id: '3',
    title: 'OpenAI\'s Search Tool Challenges Google Dominance',
    source: 'Wired',
    date: 'Jan 14, 2026',
    category: 'Industry',
    url: '#'
  },
  {
    id: '4',
    title: 'AI Search Engines See 300% Growth in 2025',
    source: 'Bloomberg',
    date: 'Jan 13, 2026',
    category: 'Report',
    url: '#'
  },
  {
    id: '5',
    title: 'Privacy-First AI Search Gains Momentum',
    source: 'Ars Technica',
    date: 'Jan 12, 2026',
    category: 'Trend',
    url: '#'
  }
];

export default function AISearchPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { isGuestMode } = useGuestMode();
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSearchInterface, setShowSearchInterface] = useState(false);
  const enginesGridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (!user && !isGuestMode) {
      router.push('/login');
      return;
    }
    setIsLoaded(true);
  }, [user, isGuestMode, router]);

  // Update scroll button visibility
  const updateScrollButtons = useCallback(() => {
    if (!enginesGridRef.current) return;
    const container = enginesGridRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  }, []);

  useEffect(() => {
    const container = enginesGridRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons, isLoaded]);

  const scrollEngines = (direction: 'left' | 'right') => {
    if (!enginesGridRef.current) return;
    const scrollAmount = 350;
    enginesGridRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleEngineSelect = (engineId: string) => {
    setSelectedEngine(engineId);
  };

  const handleEngineClick = (engine: SearchEngine) => {
    if (engine.url) {
      window.open(engine.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleStartSearch = () => {
    setShowSearchInterface(true);
  };

  if (!isLoaded) {
    return (
      <div className="ai-chat-loading">
        <div className="loading-spinner" />
      </div>
    );
  }

  // Show the search interface when user clicks Try AI Search
  if (showSearchInterface) {
    return <WebSearch onClose={() => setShowSearchInterface(false)} />;
  }

  return (
    <div className="ai-chat-page">
      {/* Background Effects */}
      <div className="ai-chat-bg">
        <div className="bg-gradient-1" />
        <div className="bg-gradient-2" />
        <div className="bg-noise" />
      </div>

      {/* Header */}
      <header className="ai-chat-header">
        <button className="back-button" onClick={() => router.push('/command-hub')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Command Hub</span>
        </button>
        <div className="header-brand">
          <span className="brand-icon">🌐</span>
          <h1 className="brand-title">AI Search</h1>
        </div>
        <div className="header-actions">
          <button className="start-chat-btn" onClick={handleStartSearch}>
            Try AI Search →
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ai-chat-main">
        {/* Hero Section */}
        <section className="chat-hero">
          <h2 className="hero-title">
            <span className="hero-gradient">Search Smarter</span>
          </h2>
          <p className="hero-subtitle">
            Explore the best AI-powered search engines. Get intelligent answers with sources, not just links.
          </p>
        </section>

        {/* Search Engines Grid */}
        <section className="models-section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="title-icon">🔥</span>
              Trending Search Engines
            </h3>
            <span className="section-badge">{trendingEngines.filter(e => e.trending).length} Hot</span>
          </div>

          <div className="models-scroll-container">
            {canScrollLeft && (
              <button
                className="scroll-arrow scroll-arrow-left"
                onClick={() => scrollEngines('left')}
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div
              className="models-grid"
              ref={enginesGridRef}
            >
              {trendingEngines.map((engine) => (
                <div
                  key={engine.id}
                  className={`model-card ${selectedEngine === engine.id ? 'selected' : ''}`}
                  onClick={() => handleEngineSelect(engine.id)}
                  style={{ '--model-color': engine.color } as React.CSSProperties}
                >
                  <div className="model-card-glow" />
                  <div className="model-card-content">
                    <div className="model-header">
                      <div className="model-icon" style={{ color: engine.color }}>
                        {engine.icon}
                      </div>
                      <div className="model-badges">
                        {engine.new && <span className="badge badge-new">NEW</span>}
                        {engine.trending && <span className="badge badge-trending">🔥</span>}
                      </div>
                    </div>
                    <h4 className="model-name">{engine.name}</h4>
                    <p className="model-provider">{engine.provider}</p>
                    <p className="model-description">{engine.description}</p>
                    <div className="model-capabilities">
                      {engine.features.map((feature, idx) => (
                        <span key={idx} className="capability-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                  <div className="model-select-indicator">
                    <button
                      className="visit-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEngineClick(engine);
                      }}
                    >
                      Visit →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {canScrollRight && (
              <button
                className="scroll-arrow scroll-arrow-right"
                onClick={() => scrollEngines('right')}
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="title-icon">📰</span>
              AI Search News
            </h3>
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

        {/* Quick Stats */}
        <section className="stats-section">
          <div className="stat-card">
            <span className="stat-value">6</span>
            <span className="stat-label">Search Engines</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">AI</span>
            <span className="stat-label">Powered</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">📚</span>
            <span className="stat-label">With Sources</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">⚡</span>
            <span className="stat-label">Real-time</span>
          </div>
        </section>
      </main>
    </div>
  );
}
