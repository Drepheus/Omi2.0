"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { useGuestMode } from '@/context/guest-mode-context';
import SplashPage from '@/src/SplashPage';

interface LLMModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  capabilities: string[];
  trending: boolean;
  new: boolean;
  icon: string;
  color: string;
}

interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

const trendingModels: LLMModel[] = [
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    description: 'Most capable multimodal model with advanced reasoning and 1M token context',
    capabilities: ['Multimodal', 'Code', 'Reasoning', 'Vision'],
    trending: true,
    new: true,
    icon: '✦',
    color: '#4285F4'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'Omni model with native vision, audio, and text understanding',
    capabilities: ['Multimodal', 'Vision', 'Audio', 'Fast'],
    trending: true,
    new: false,
    icon: '◉',
    color: '#10A37F'
  },
  {
    id: 'claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    description: 'Balanced intelligence with exceptional coding and analysis abilities',
    capabilities: ['Code', 'Analysis', 'Writing', 'Reasoning'],
    trending: true,
    new: false,
    icon: '◈',
    color: '#D97706'
  },
  {
    id: 'llama-3.3-70b',
    name: 'Llama 3.3 70B',
    provider: 'Meta',
    description: 'Open-source powerhouse with strong multilingual capabilities',
    capabilities: ['Open Source', 'Multilingual', 'Code', 'Fast'],
    trending: true,
    new: true,
    icon: '🦙',
    color: '#0668E1'
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'Mistral AI',
    description: 'European frontier model with strong reasoning and efficiency',
    capabilities: ['Reasoning', 'Multilingual', 'Code', 'Efficient'],
    trending: false,
    new: true,
    icon: '◆',
    color: '#FF7000'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    description: 'Cost-effective model rivaling top-tier performance',
    capabilities: ['Code', 'Math', 'Reasoning', 'Efficient'],
    trending: true,
    new: true,
    icon: '◇',
    color: '#6366F1'
  }
];

const latestNews: NewsItem[] = [
  {
    id: '1',
    title: 'Google Announces Gemini 2.5 with Enhanced Reasoning',
    source: 'TechCrunch',
    date: 'Jan 16, 2026',
    category: 'Release',
    url: '#'
  },
  {
    id: '2',
    title: 'OpenAI Previews GPT-5 Architecture Details',
    source: 'The Verge',
    date: 'Jan 15, 2026',
    category: 'Preview',
    url: '#'
  },
  {
    id: '3',
    title: 'Anthropic\'s Claude Achieves New Benchmark Records',
    source: 'Ars Technica',
    date: 'Jan 14, 2026',
    category: 'Benchmark',
    url: '#'
  },
  {
    id: '4',
    title: 'Meta Releases Llama 4 Training Details',
    source: 'Wired',
    date: 'Jan 13, 2026',
    category: 'Open Source',
    url: '#'
  },
  {
    id: '5',
    title: 'DeepSeek V3 Challenges Premium Model Pricing',
    source: 'Bloomberg',
    date: 'Jan 12, 2026',
    category: 'Industry',
    url: '#'
  }
];

export default function OmiChatPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { isGuestMode } = useGuestMode();
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);
  const modelsGridRef = useRef<HTMLDivElement>(null);
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
  }, [updateScrollButtons, isLoaded]);

  const scrollModels = (direction: 'left' | 'right') => {
    if (!modelsGridRef.current) return;
    const scrollAmount = 350; // slightly more than card width
    modelsGridRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
  };

  const handleStartChat = () => {
    // Show the AI Chat interface
    setShowChatInterface(true);
  };

  if (!isLoaded) {
    return (
      <div className="ai-chat-loading">
        <div className="loading-spinner" />
      </div>
    );
  }

  // Show the chat interface when user clicks Start Chat
  if (showChatInterface) {
    return <SplashPage />;
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
          <span className="brand-icon">💬</span>
          <h1 className="brand-title">AI Chat</h1>
        </div>
        <div className="header-actions">
          <button className="start-chat-btn" onClick={handleStartChat}>
            Try AI Chat →
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ai-chat-main">
        {/* Hero Section */}
        <section className="chat-hero">
          <h2 className="hero-title">
            <span className="hero-gradient">Choose Your Intelligence</span>
          </h2>
          <p className="hero-subtitle">
            Access the world's most powerful language models. Select a model below to start a conversation.
          </p>
        </section>

        {/* Models Grid */}
        <section className="models-section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="title-icon">🔥</span>
              Trending Models
            </h3>
            <span className="section-badge">{trendingModels.filter(m => m.trending).length} Hot</span>
          </div>

          <div className="models-scroll-container">
            {canScrollLeft && (
              <button
                className="scroll-arrow scroll-arrow-left"
                onClick={() => scrollModels('left')}
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div
              className="models-grid"
              ref={modelsGridRef}
            >
              {trendingModels.map((model) => (
                <div
                  key={model.id}
                  className={`model-card ${selectedModel === model.id ? 'selected' : ''}`}
                  onClick={() => handleModelSelect(model.id)}
                  style={{ '--model-color': model.color } as React.CSSProperties}
                >
                  <div className="model-card-glow" />
                  <div className="model-card-content">
                    <div className="model-header">
                      <div className="model-icon" style={{ color: model.color }}>
                        {model.icon}
                      </div>
                      <div className="model-badges">
                        {model.new && <span className="badge badge-new">NEW</span>}
                        {model.trending && <span className="badge badge-trending">🔥</span>}
                      </div>
                    </div>
                    <h4 className="model-name">{model.name}</h4>
                    <p className="model-provider">{model.provider}</p>
                    <p className="model-description">{model.description}</p>
                    <div className="model-capabilities">
                      {model.capabilities.map((cap, idx) => (
                        <span key={idx} className="capability-tag">{cap}</span>
                      ))}
                    </div>
                  </div>
                  <div className="model-select-indicator">
                    {selectedModel === model.id ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    ) : (
                      <span className="select-text">Select</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {canScrollRight && (
              <button
                className="scroll-arrow scroll-arrow-right"
                onClick={() => scrollModels('right')}
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
              Latest AI News
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
            <span className="stat-label">Models Available</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">1M+</span>
            <span className="stat-label">Max Context</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">∞</span>
            <span className="stat-label">Conversations</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Available</span>
          </div>
        </section>
      </main>
    </div>
  );
}
