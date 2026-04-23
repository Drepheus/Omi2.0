"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DotGrid from './DotGrid';

import './AgentsPage.css';

interface AgentsPageProps {
  onClose?: () => void;
}

interface Component {
  id: string;
  name: string;
  category: string;
  icon: string;
}

const componentCategories = [
  {
    name: 'Autonomous Agents',
    components: [
      { id: 'openclaw', name: 'OpenClaw', icon: '🦅' },
      { id: 'hermes', name: 'Hermes', icon: '⚡' },
      { id: 'agentzero', name: 'AgentZero', icon: '🤖' }
    ]
  },
  {
    name: 'Specialized Agents',
    components: [
      { id: 'researcher', name: 'Deep Researcher', icon: '🔍' },
      { id: 'coder', name: 'DevAgent', icon: '💻' }
    ]
  }
];

export default function AgentsPage({ onClose }: AgentsPageProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Autonomous Agents');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Autonomous Agents']);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push('/command-hub');
    }
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="workflow-builder">
      {/* Left Sidebar - Components Panel */}
      <aside className="workflow-sidebar">
        <div className="workflow-sidebar-header">
          <div className="workflow-logo">
            <span className="workflow-logo-icon">🤖</span>
            <span className="workflow-logo-text">Agents</span>
          </div>
        </div>

        <div className="workflow-search-container">
          <input
            type="text"
            className="workflow-search"
            placeholder="Search agents"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="workflow-search-icon">🔍</span>
        </div>

        <nav className="workflow-categories">
          {componentCategories.map((category) => (
            <div key={category.name} className="workflow-category">
              <button
                className={`workflow-category-header ${expandedCategories.includes(category.name) ? 'expanded' : ''}`}
                onClick={() => toggleCategory(category.name)}
              >
                <span className="workflow-category-name">{category.name}</span>
                <span className="workflow-category-arrow">›</span>
              </button>
              {expandedCategories.includes(category.name) && (
                <div className="workflow-category-items">
                  {category.components.length > 0 ? (
                    category.components
                      .filter(comp =>
                        comp.name.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((component) => (
                        <button key={component.id} className="workflow-component-item">
                          <span className="workflow-component-icon">{component.icon}</span>
                          <span className="workflow-component-name">{component.name}</span>
                        </button>
                      ))
                  ) : (
                    <div className="workflow-empty-category">
                      <button className="workflow-add-button">+</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Canvas Area */}
      <main className="workflow-canvas">
        <header className="workflow-header">
          <div className="workflow-header-left">
            <span className="workflow-auto-save">
              <span className="workflow-save-icon">☁️</span>
              Auto-Saved 15:32:28
            </span>
          </div>
          <div className="workflow-header-right">
            <button className="workflow-btn workflow-btn-secondary">
              <span className="workflow-btn-icon">🐛</span>
              Debug Off
            </button>
            <button className="workflow-btn workflow-btn-secondary">
              <span className="workflow-btn-icon">▶️</span>
              Test
            </button>
            <button className="workflow-btn workflow-btn-primary">Upgrade</button>
            <button className="workflow-btn workflow-btn-secondary">
              <span className="workflow-btn-icon">🚀</span>
              Deploy
            </button>
          </div>
        </header>

        <div className="workflow-canvas-content drag-drop-area">
          <div className="workflow-overlay">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
              <h2 className="workflow-overlay-title">Deploy Agents</h2>
              <p className="workflow-overlay-desc">Drag and drop agents here to configure and deploy autonomous AI agents.</p>
              <div className="workflow-overlay-actions pointer-events-auto">
                <button className="workflow-overlay-btn primary">Get Started</button>
                <button className="workflow-overlay-btn">Choose Template</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="workflow-footer">
          <div className="workflow-footer-actions">
            <button className="workflow-footer-btn" title="Collapse">
              <span className="workflow-footer-icon">✕</span>
              Collapse
            </button>
            <button className="workflow-footer-btn" title="Prettify">
              <span className="workflow-footer-icon">✨</span>
              Prettify
            </button>
            <button className="workflow-footer-btn" title="Inspect">
              <span className="workflow-footer-icon">🔍</span>
              Inspect
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
