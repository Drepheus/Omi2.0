"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DomeGallery from './DomeGallery';
import LogoLoop from './LogoLoop';
import { ShinyText } from '@/components/typography/shiny-text';
import './MediaStudio.css';

interface MediaStudioProps {
  onClose?: () => void;
}

const sidebarTools = [
  { name: 'Home', icon: '🏠', section: 'main' },
  { name: 'Library', icon: '📚', section: 'main' },
  { name: 'Image', icon: '🎨', section: 'AI Tools' },
  { name: 'Video', icon: '🎬', section: 'AI Tools' },
  { name: 'Blueprints', icon: '📋', section: 'AI Tools', badge: 'Beta' },
  { name: 'Flow State', icon: '∞', section: 'AI Tools' },
  { name: 'Realtime Canvas', icon: '⚡', section: 'AI Tools' },
  { name: 'Realtime Generation', icon: '✨', section: 'AI Tools' },
  { name: 'Canvas Editor', icon: '🖼️', section: 'AI Tools' },
  { name: 'Universal Upscaler', icon: '🔍', section: 'AI Tools' },
  { name: 'Models & Training', icon: '🧠', section: 'Advanced' },
  { name: 'Texture Generation', icon: '🎭', section: 'Advanced', badge: 'Alpha' },
];

const categoryTabs = [
  { name: 'Blueprints', icon: '📋' },
  { name: 'Flow State', icon: '∞' },
  { name: 'Video', icon: '🎬' },
  { name: 'Image', icon: '🎨' },
  { name: 'Upscaler', icon: '🔍' },
  { name: 'Canvas Editor', icon: '🖼️' },
  { name: 'More', icon: '⋯' },
];

const featuredBlueprints = [
  { 
    title: 'Amber Haze Portrait', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
  },
  { 
    title: 'Dreamy Polaroid Portrait', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
  },
  { 
    title: 'Tuscan Cinematic Video Portrait', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' 
  },
  { 
    title: 'Blue Room Video Portrait', 
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
  },
  { 
    title: 'Halloween Party', 
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' 
  },
  { 
    title: 'Indie Garden Polaroid', 
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' 
  },
  { 
    title: 'Bold Fisheye Portrait', 
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop', 
    gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)' 
  },
];

const communityFilters = [
  { name: 'Trending', icon: '🔥' },
  { name: 'All', icon: '🌐' },
  { name: 'Video', icon: '🎬' },
  { name: 'Photography', icon: '📷' },
  { name: 'Animals', icon: '🦁' },
  { name: 'Anime', icon: '🎌' },
  { name: 'Architecture', icon: '🏛️' },
  { name: 'Character', icon: '👤' },
  { name: 'Food', icon: '🍕' },
  { name: 'Sci-Fi', icon: '🚀' },
];

export default function MediaStudio({ onClose }: MediaStudioProps) {
  const [activeCategory, setActiveCategory] = useState('Blueprints');
  const [activeFilter, setActiveFilter] = useState('Trending');
  const [activeTool, setActiveTool] = useState('Blueprints');

  return (
    <motion.div 
      className="media-studio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left Sidebar */}
      <div className="media-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-avatar">👤</span>
            <div className="logo-user">
              <span className="user-name">Omi.AI</span>
              <button className="user-dropdown">▼</button>
            </div>
          </div>
          <div className="sidebar-credits">
            <span className="credits-icon">⚡</span>
            <span className="credits-value">150</span>
            <button className="upgrade-btn">Upgrade</button>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarTools.map((tool, index) => (
    <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {tool.section && index > 0 && sidebarTools[index - 1].section !== tool.section && (
                <div className="nav-section-title">{tool.section}</div>
              )}
              <button 
                className={`sidebar-item ${activeTool === tool.name ? 'active' : ''}`}
                onClick={() => setActiveTool(tool.name)}
              >
                <span className="sidebar-icon">{tool.icon}</span>
                <span className="sidebar-label">{tool.name}</span>
                {tool.badge && <span className="tool-badge">{tool.badge}</span>}
              </button>
            </motion.div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-item">
            <span className="sidebar-icon">🆕</span>
            <span className="sidebar-label">What's New</span>
          </button>
        </div>
      </div>

      <motion.div className="media-main-content">
        <motion.button 
          className="close-btn" 
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ✕
        </motion.button>

        {/* Hero Banner */}
        <motion.div 
          className="hero-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="banner-logoloop">
            <LogoLoop
              logos={[
                { node: '✨', title: 'Sparkle' },
                { node: '🎨', title: 'Art' },
                { node: '🎬', title: 'Video' },
                { node: '🖼️', title: 'Image' },
                { node: '📋', title: 'Blueprint' },
                { node: '⭐', title: 'Star' },
                { node: '🎭', title: 'Creative' },
                { node: '🚀', title: 'Launch' }
              ]}
              speed={30}
              direction="left"
              logoHeight={60}
              gap={80}
              fadeOut={true}
              fadeOutColor="#1a0f2e"
              className="banner-logo-animation"
            />
          </div>
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1 className="banner-title">
              Create with Omi <span className="highlight-text"><ShinyText text="Blueprints" speed={8} /></span>
            </h1>
            <p className="banner-subtitle">
              Discover 50+ ready-made workflows for effortless AI creation. All Blueprints 75% off for a limited time!
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div 
          className="category-tabs"
        >
          {categoryTabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              className={`category-tab ${activeCategory === tab.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.name)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Blueprints */}
        <section className="featured-section">
          <div 
            className="section-header"
          >
            <h2 className="section-title">
              <span className="title-highlight"><ShinyText text="Featured" speed={10} /></span> Blueprints
            </h2>
            <button className="view-more-btn">
              View More <span className="arrow">→</span>
            </button>
          </div>

          <div className="dome-gallery-container">
            <DomeGallery
              images={featuredBlueprints.map(bp => ({ src: bp.image, alt: bp.title }))}
              fit={0.5}
              minRadius={500}
              maxRadius={800}
              segments={30}
              dragDampening={5}
              overlayBlurColor="#0a0a0a"
              imageBorderRadius="30px"
              openedImageBorderRadius="30px"
              grayscale={false}
            />
          </div>
        </section>

        {/* Community Creations */}
        <section className="community-section">
          <h2 className="section-title">
            <span className="title-highlight">Community</span> Creations
          </h2>

          <div className="community-filters">
            {communityFilters.map((filter) => (
              <button
                key={filter.name}
                className={`filter-btn ${activeFilter === filter.name ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.icon} {filter.name}
              </button>
            ))}
          </div>

          <div className="community-grid">
            {/* Placeholder for community content */}
            <p className="coming-soon">Community creations coming soon...</p>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
