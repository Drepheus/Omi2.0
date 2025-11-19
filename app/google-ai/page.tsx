"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './google-ai.css';
import { GlowingEffectDemoSecond } from '../../src/components/google-ai/GlowingEffectGrid';

export default function GoogleAIPage() {
  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState('Gemini 3 Pro Preview');



  const recentlyViewed = [
    'Veo Studio',
    'PromptGJ MIDI',
    'Veo',
    'PromptGJ',
    'Video Analyzer',
    'Gemini 85',
    'ChatterBots'
  ];

  return (
    <div className="google-ai-studio-page">
      {/* Sidebar */}
      <aside className="studio-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Google AI Studio</h1>
          <button className="sidebar-toggle">☰</button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <button className="nav-item active">
              <span className="nav-icon">🔨</span>
              Build
            </button>
            <button className="nav-item">
              <span className="nav-icon">▶</span>
              Start
            </button>
            <button className="nav-item">
              <span className="nav-icon">📁</span>
              Gallery
            </button>
            <button className="nav-item">
              <span className="nav-icon">📱</span>
              Your apps
            </button>
            <button className="nav-item">
              <span className="nav-icon">❓</span>
              FAQ
            </button>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Recently viewed</h3>
            {recentlyViewed.map((item, index) => (
              <button key={index} className="nav-item small">
                {item}
              </button>
            ))}
          </div>

          <div className="nav-section">
            <p className="nav-notice">
              Google AI models may make mistakes, so double-check outputs.
            </p>
            <button className="nav-api-btn">
              🔑 Get API key
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="studio-main">
        {/* Close Button */}
        <button className="studio-close-btn" onClick={() => router.push('/google-ai-studio')}>
          ✕
        </button>

        {/* Hero Section */}
        <section className="studio-hero">
          <h1 className="studio-hero-title">
            Build your ideas with <span className="gradient-text">Gemini</span>
          </h1>

          <div className="studio-input-section">
            <div className="input-header">
              <label className="input-label">Describe your idea</label>
            </div>

            <div className="input-container">
              <div className="model-selector">
                <span className="model-icon">🤖</span>
                <span className="model-label">Model:</span>
                <select
                  className="model-dropdown"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option>Gemini 3 Pro Preview</option>
                  <option>Gemini 2.0 Flash</option>
                  <option>Gemini 1.5 Pro</option>
                </select>
              </div>

              <div className="input-controls">
                <button className="control-btn" title="Voice input">🎤</button>
                <button className="control-btn" title="Add image">🖼️</button>
                <div className="input-status">
                  <span className="status-icon">✨</span>
                  <span className="status-text">I'm feeling lucky</span>
                </div>
                <button className="build-btn">Build</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="studio-features">
          <h2 className="features-title">Supercharge your apps with AI</h2>

          <div className="w-full max-w-7xl mx-auto">
            <GlowingEffectDemoSecond />
          </div>
        </section>
      </main>
    </div>
  );
}
