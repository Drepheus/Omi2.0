import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Orb from './Orb';
import ShinyText from './ShinyText';
import SplashPage from './SplashPage';
import './landing.css';

// Simple landing page with orb background
const LandingPage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartClick = () => {
    setIsTransitioning(true);
    // Wait for fade out animation to complete before showing splash page
    setTimeout(() => {
      setShowSplash(true);
    }, 800); // Match the CSS transition duration
  };

  if (showSplash) {
    return (
      <div className="page-transition fade-in">
        <SplashPage />
      </div>
    );
  }

  return (
    <div className={`landing-container ${isTransitioning ? 'fade-out' : ''}`}>
      <div className="orb-background">
        <Orb 
          hue={220}
          hoverIntensity={0.3}
          rotateOnHover={true}
          forceHoverState={false}
        />
      </div>
      <div className="content">
        <h1>Omi AI</h1>
        <p>Innovating the conversational AI experience</p>
        <div className="button-container">
          <button 
            className="start-button" 
            onClick={handleStartClick}
            disabled={isTransitioning}
          >
            <ShinyText text="Start" speed={3} className="start-button-text" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<LandingPage />);
});