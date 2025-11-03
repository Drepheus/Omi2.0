import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MediaStudio.css';

interface MediaStudioProps {
  onClose?: () => void;
}

type MediaType = 'image' | 'video' | 'audio' | 'avatar';

const MediaStudio: React.FC<MediaStudioProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<MediaType>('image');
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('Standard');
  const [ratio, setRatio] = useState('Square');
  const [outputs, setOutputs] = useState(2);
  const [isGenerating, setIsGenerating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Art styles for the right panel
  const artStyles = [
    { name: 'Photo', image: '📷', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: 'Anime', image: '🎌', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: 'Digital Art', image: '🎨', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: '3D CGI', image: '🎭', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { name: 'Pop Art', image: '🎪', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { name: 'Standard Style', image: '✨', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }
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

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    
    // TODO: Integrate with your AI generation API
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="media-studio-container" ref={containerRef}>
      {/* Header */}
      <header className="media-studio-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Omi</span>
          </div>
          <nav className="nav-tabs">
            <button className="nav-tab">Explore</button>
            <button className="nav-tab active">Image</button>
            <button className="nav-tab">Video</button>
            <button className="nav-tab">Audio</button>
            <button className="nav-tab">Avatars</button>
            <button className="nav-tab">Templates</button>
          </nav>
        </div>
        <div className="header-right">
          <button className="header-btn">Pricing</button>
          <button className="header-btn">Discord</button>
          <div className="credits-badge">
            <span className="credits-icon">⚡</span>
            <span className="credits-amount">1,800</span>
          </div>
          {onClose && (
            <button className="close-btn" onClick={onClose}>✕</button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="media-studio-main">
        {/* Left Sidebar - Creation Tools */}
        <aside className="left-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">CREATION TOOLS</h3>
            <div className="creation-tools-list">
              <button className="tool-item">
                <span className="tool-icon">🖼️</span>
                <span className="tool-name">Image to Video</span>
              </button>
              <button className="tool-item active">
                <span className="tool-icon">T</span>
                <span className="tool-name">Text to Video</span>
                <span className="tool-badge">Audio</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">🎨</span>
                <span className="tool-name">AI Image</span>
                <span className="tool-badge nano-banana">Nano Banana</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">👤</span>
                <span className="tool-name">AI Avatar</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">✂️</span>
                <span className="tool-name">AI Video Editor</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">⭐</span>
                <span className="tool-name">AI Effect</span>
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">WORKFLOWS</h3>
            <div className="workflows-list">
              <button className="tool-item">
                <span className="tool-icon">📹</span>
                <span className="tool-name">Video Clone AI</span>
                <span className="tool-badge beta">Beta</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">📢</span>
                <span className="tool-name">AI Ad</span>
              </button>
              <button className="tool-item">
                <span className="tool-icon">🎬</span>
                <span className="tool-name">AI Director</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Center Area - Canvas and Controls */}
        <main className="center-content">
          {/* Canvas */}
          <div className="canvas-area">
            <div className="canvas-placeholder">
              <div className="canvas-icon">🎨</div>
              <p className="canvas-text">Describe your image...</p>
            </div>
          </div>

          {/* Generation Controls */}
          <div className="generation-panel">
            <div className="generation-header">
              <div className="generation-tabs">
                <button className="gen-tab active">
                  <span className="gen-tab-icon">✨</span>
                  Text to Image
                </button>
              </div>
              <button className="add-tab-btn">+</button>
            </div>

            <div className="prompt-area">
              <textarea
                className="prompt-input"
                placeholder="Describe your image..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
              />
              <div className="prompt-footer">
                <button className="enhance-btn">
                  <span className="enhance-icon">✨</span>
                  Enhance
                </button>
                <div className="char-count">0/500</div>
              </div>
            </div>

            <div className="generation-settings">
              <div className="setting-group">
                <label className="setting-label">Model</label>
                <select className="setting-select" value={model} onChange={(e) => setModel(e.target.value)}>
                  <option>Standard</option>
                  <option>Pro</option>
                  <option>Ultra</option>
                </select>
              </div>
              <div className="setting-group">
                <label className="setting-label">Ratio</label>
                <select className="setting-select" value={ratio} onChange={(e) => setRatio(e.target.value)}>
                  <option>Square</option>
                  <option>Portrait</option>
                  <option>Landscape</option>
                  <option>Widescreen</option>
                </select>
              </div>
              <div className="setting-group">
                <label className="setting-label">Outputs</label>
                <div className="outputs-control">
                  <button className="output-btn" onClick={() => setOutputs(Math.max(1, outputs - 1))}>−</button>
                  <span className="output-value">{outputs}</span>
                  <button className="output-btn" onClick={() => setOutputs(Math.min(4, outputs + 1))}>+</button>
                </div>
              </div>
            </div>

            <button
              className="generate-btn"
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
            >
              {isGenerating ? (
                <>
                  <div className="spinner"></div>
                  Generating...
                </>
              ) : (
                <>
                  <span className="generate-icon">✨</span>
                  Generate
                  <span className="credits-cost">{outputs * 4} Credits</span>
                </>
              )}
            </button>
          </div>
        </main>

        {/* Right Sidebar - Art Styles */}
        <aside className="right-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Art Style</h3>
            <div className="art-styles-grid">
              {artStyles.map((style, index) => (
                <button key={index} className="art-style-card" style={{ background: style.gradient }}>
                  <div className="art-style-preview">{style.image}</div>
                  <div className="art-style-name">{style.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="photo-model-card">
              <div className="model-badge">Photo Model: Standard</div>
            </div>
          </div>
        </aside>
      </div>

      {/* History Tabs */}
      <div className="history-tabs">
        <button className="history-tab active">
          <span className="history-icon">✨</span>
          Generate
        </button>
        <button className="history-tab">
          <span className="history-icon">🕐</span>
          History
        </button>
      </div>
    </div>
  );
};

export default MediaStudio;
