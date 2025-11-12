import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoogleAIStudio.css';

interface GoogleAIStudioProps {
  onClose?: () => void;
}

const studioTools = [
  {
    name: 'Flow',
    description: 'Create dynamic visual stories',
    url: 'https://labs.google/fx/tools/flow',
    icon: '�',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea'
  },
  {
    name: 'MusicFx DJ',
    description: 'Generate unique music mixes',
    url: 'https://labs.google/fx/tools/music-fx-dj',
    icon: '🎵',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb'
  },
  {
    name: 'ImageFx',
    description: 'Transform images with AI',
    url: 'https://labs.google/fx/tools/image-fx',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe'
  },
  {
    name: 'Whisk',
    description: 'Blend creative concepts',
    url: 'https://labs.google/fx/tools/whisk',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    color: '#43e97b'
  }
];

export default function GoogleAIStudio({ onClose }: GoogleAIStudioProps) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleToolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/command-hub');
    }
  };

  return (
    <div className="google-studio-page">
      {/* Animated background */}
      <div className="studio-background">
        <div className="studio-gradient-orb studio-orb-1"></div>
        <div className="studio-gradient-orb studio-orb-2"></div>
        <div className="studio-gradient-orb studio-orb-3"></div>
      </div>

      <button className="studio-close-btn" onClick={handleClose}>
        ✕
      </button>

      <div className="studio-content">
        <div className="studio-header">
          <h1 className="studio-title">
            <span className="studio-google-text">Google</span>
            <span className="studio-labs-text">Labs</span>
          </h1>
          <p className="studio-subtitle">
            Explore the future of AI creativity
          </p>
        </div>

        <div className="studio-tools-grid">
          {studioTools.map((tool) => (
            <div
              key={tool.name}
              className={`studio-tool-card ${hoveredTool === tool.name ? 'hovered' : ''}`}
              onClick={() => handleToolClick(tool.url)}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className="tool-card-glow" style={{ background: tool.gradient }}></div>
              
              <div className="tool-card-content">
                <div className="tool-icon" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-description">{tool.description}</p>
                </div>

                <div className="tool-launch-btn">
                  <span>Launch</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="tool-card-border"></div>
            </div>
          ))}
        </div>

        <div className="studio-footer">
          <p className="studio-footer-text">
            Powered by <span className="gemini-badge">✦ Gemini</span>
          </p>
        </div>
      </div>
    </div>
  );
}