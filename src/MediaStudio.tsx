import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MediaStudio.css';

interface MediaStudioProps {
  onClose?: () => void;
}

const MediaStudio: React.FC<MediaStudioProps> = ({ onClose }) => {
  const [activeNav, setActiveNav] = useState('Image');
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { icon: '', name: 'Realtime Canvas' },
    { icon: '', name: 'Flow State' },
    { icon: '', name: 'Video' },
    { icon: '', name: 'Image' },
    { icon: '', name: 'Upscaler' },
    { icon: '', name: 'Canvas Editor' },
    { icon: '', name: 'More' }
  ];

  const featuredGuides = [
    {
      category: 'Upscaling',
      title: 'YOUR IMAGES WITH LEONARDO.AI',
      image: 'https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=300&h=200&fit=crop',
      color: 'rgba(138, 43, 226, 0.8)'
    },
    {
      category: 'How to Use',
      title: 'STYLE REFERENCE',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop',
      color: 'rgba(138, 43, 226, 0.8)'
    },
    {
      category: 'Creating',
      title: 'CONSISTENT CHARACTERS',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=200&fit=crop',
      color: 'rgba(255, 0, 255, 0.8)'
    },
    {
      category: 'Using',
      title: 'CONTENT REFERENCE',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop',
      color: 'rgba(138, 43, 226, 0.8)'
    }
  ];

  const filters = [
    { icon: '', name: 'Trending' },
    { icon: '', name: 'All' },
    { icon: '', name: 'Video' },
    { icon: '', name: 'Photography' },
    { icon: '', name: 'Animals' },
    { icon: '', name: 'Anime' },
    { icon: '', name: 'Architecture' },
    { icon: '', name: 'Character' },
    { icon: '', name: 'Food' },
    { icon: '', name: 'Sci-Fi' }
  ];

  const communityCreations = [
    { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', type: 'portrait' },
    { image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=400&fit=crop', type: 'animal' },
    { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', type: 'landscape' },
    { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop', type: 'abstract' },
    { image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop', type: 'portrait' },
    { image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop', type: 'music' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', type: 'landscape' },
    { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop', type: 'tech' }
  ];

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="sora-container" ref={containerRef}>
      <div className="sora-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Meet <span className="hero-brand">Sora 2</span>: Next-gen video creation is here
          </h1>
          <p className="hero-subtitle">
            Turn ideas into immersive, cinematic worlds with authentic motion and perfectly synced audio
          </p>
          <button className="hero-cta">Try Sora 2</button>
        </div>
        {onClose && (
          <button className="sora-close-btn" onClick={onClose}></button>
        )}
      </div>

      <nav className="sora-nav">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${activeNav === item.name ? 'active' : ''}`}
            onClick={() => setActiveNav(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sora-main">
        <section className="featured-section">
          <h2 className="section-title">
            <span className="title-accent">Featured</span> Guides
          </h2>
          <div className="guides-grid">
            {featuredGuides.map((guide, index) => (
              <div key={index} className="guide-card">
                <div className="guide-image-wrapper">
                  <img src={guide.image} alt={guide.title} className="guide-image" />
                  <div className="guide-overlay"></div>
                </div>
                <div className="guide-content">
                  <span className="guide-category" style={{ backgroundColor: guide.color }}>
                    {guide.category}
                  </span>
                  <h3 className="guide-title">{guide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="community-section">
          <h2 className="section-title">
            <span className="title-accent">Community</span> Creations
          </h2>
          
          <div className="filters-container">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`filter-pill ${activeFilter === filter.name ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.name)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span className="filter-label">{filter.name}</span>
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {communityCreations.map((creation, index) => (
              <div key={index} className="gallery-card">
                <img src={creation.image} alt={`Creation ${index + 1}`} className="gallery-image" />
                <div className="gallery-overlay">
                  <button className="like-btn"></button>
                  <button className="bookmark-btn"></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaStudio;
