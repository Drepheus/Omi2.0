import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MediaStudio.css';

interface MediaStudioProps {
  onClose?: () => void;
}

const MediaStudio: React.FC<MediaStudioProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Generate');
  const [activeGenTab, setActiveGenTab] = useState('Image');
  const [activeTool, setActiveTool] = useState('txt2img');
  const [prompt, setPrompt] = useState('');
  const [numOutputs, setNumOutputs] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navTabs = ['Generate', 'History', 'Collections'];

  const creationTools = [
    { icon: '🎨', name: 'Text to Image', id: 'txt2img' },
    { icon: '🖼️', name: 'Image to Image', id: 'img2img' },
    { icon: '🎬', name: 'Text to Video', id: 'txt2vid', badge: 'NEW' },
    { icon: '📹', name: 'Image to Video', id: 'img2vid' },
    { icon: '🔊', name: 'Text to Audio', id: 'txt2audio' },
    { icon: '🎵', name: 'Music Generation', id: 'music' },
    { icon: '✨', name: 'AI Upscaler', id: 'upscale' },
    { icon: '🎭', name: 'Face Swap', id: 'faceswap', badge: 'BETA' }
  ];

  const workflows = [
    { icon: '🏞️', name: 'Landscape Pro', id: 'landscape' },
    { icon: '👤', name: 'Portrait Studio', id: 'portrait' },
    { icon: '🎨', name: 'Artistic Style', id: 'artistic' },
    { icon: '🌟', name: 'Fantasy Realm', id: 'fantasy' }
  ];

  const artStyles = [
    { emoji: '🎨', name: 'Artistic' },
    { emoji: '📸', name: 'Photorealistic' },
    { emoji: '🌸', name: 'Anime' },
    { emoji: '✨', name: 'Fantasy' },
    { emoji: '🎬', name: 'Cinematic' },
    { emoji: '🌈', name: 'Vibrant' }
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Generation complete! (This is a demo)');
    }, 3000);
  };

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
    <div className="media-studio-container" ref={containerRef}>
      {/* Header */}
      <header className="media-studio-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">MEDIA STUDIO</span>
          </div>
          
          <div className="nav-tabs">
            {navTabs.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="header-right">
          <button className="header-btn">📚 Tutorials</button>
          <div className="credits-badge">
            <span className="credits-icon">⚡</span>
            <span className="credits-amount">1,250</span>
          </div>
          {onClose && (
            <button className="close-btn" onClick={onClose}>✕</button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="media-studio-main">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Creation Tools</h3>
            <div className="creation-tools-list">
              {creationTools.map((tool) => (
                <button
                  key={tool.id}
                  className={`tool-item ${activeTool === tool.id ? 'active' : ''}`}
                  onClick={() => setActiveTool(tool.id)}
                >
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                  {tool.badge && (
                    <span className={`tool-badge ${tool.badge.toLowerCase()}`}>
                      {tool.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Workflows</h3>
            <div className="workflows-list">
              {workflows.map((workflow) => (
                <button key={workflow.id} className="tool-item">
                  <span className="tool-icon">{workflow.icon}</span>
                  <span className="tool-name">{workflow.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Center Content */}
        <div className="center-content">
          {/* Canvas Area */}
          <div className="canvas-area">
            <div className="canvas-placeholder">
              <div className="canvas-icon">🎨</div>
              <div className="canvas-text">Your creation will appear here</div>
            </div>
          </div>

          {/* Generation Panel */}
          <div className="generation-panel">
            <div className="generation-header">
              <div className="generation-tabs">
                <button
                  className={`gen-tab ${activeGenTab === 'Image' ? 'active' : ''}`}
                  onClick={() => setActiveGenTab('Image')}
                >
                  <span className="gen-tab-icon">🖼️</span>
                  Image
                </button>
                <button
                  className={`gen-tab ${activeGenTab === 'Video' ? 'active' : ''}`}
                  onClick={() => setActiveGenTab('Video')}
                >
                  <span className="gen-tab-icon">🎬</span>
                  Video
                </button>
              </div>
              <button className="add-tab-btn">+</button>
            </div>

            <div className="prompt-area">
              <textarea
                className="prompt-input"
                placeholder="Describe what you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
              />
              <div className="prompt-footer">
                <button className="enhance-btn">
                  <span className="enhance-icon">✨</span>
                  Enhance Prompt
                </button>
                <span className="char-count">{prompt.length}/500</span>
              </div>
            </div>

            <div className="generation-settings">
              <div className="setting-group">
                <label className="setting-label">Aspect Ratio</label>
                <select className="setting-select">
                  <option>16:9 Landscape</option>
                  <option>9:16 Portrait</option>
                  <option>1:1 Square</option>
                  <option>4:3 Standard</option>
                </select>
              </div>

              <div className="setting-group">
                <label className="setting-label">Quality</label>
                <select className="setting-select">
                  <option>Ultra HD</option>
                  <option>High Definition</option>
                  <option>Standard</option>
                </select>
              </div>

              <div className="setting-group">
                <label className="setting-label">Outputs</label>
                <div className="outputs-control">
                  <button
                    className="output-btn"
                    onClick={() => setNumOutputs(Math.max(1, numOutputs - 1))}
                  >
                    -
                  </button>
                  <span className="output-value">{numOutputs}</span>
                  <button
                    className="output-btn"
                    onClick={() => setNumOutputs(Math.min(4, numOutputs + 1))}
                  >
                    +
                  </button>
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
                  <span className="spinner"></span>
                  Generating...
                </>
              ) : (
                <>
                  <span className="generate-icon">⚡</span>
                  Generate
                  <span className="credits-cost">-10 ⚡</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Art Styles</h3>
            <div className="art-styles-grid">
              {artStyles.map((style, idx) => (
                <div key={idx} className="art-style-card">
                  <div className="art-style-preview">{style.emoji}</div>
                  <div className="art-style-name">{style.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="photo-model-card">
              <div className="model-badge">🤖 Model: Phoenix v2</div>
            </div>
          </div>
        </aside>
      </div>

      {/* History Tabs */}
      <div className="history-tabs">
        <button className="history-tab active">
          <span className="history-icon">🖼️</span>
          Images
        </button>
        <button className="history-tab">
          <span className="history-icon">🎬</span>
          Videos
        </button>
        <button className="history-tab">
          <span className="history-icon">🎵</span>
          Audio
        </button>
      </div>
    </div>
  );
};

export default MediaStudio;
