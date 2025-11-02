import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomOmis.css';

interface CustomOmisProps {
  onClose?: () => void;
}

interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'idle' | 'working' | 'ready';
  icon: string;
  gradient: string;
}

const CustomOmis: React.FC<CustomOmisProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'output' | 'history' | 'settings'>('output');
  const [activeFlowTab, setActiveFlowTab] = useState<'flow' | 'tab2' | 'tab3' | 'tab4' | 'tab5'>('flow');
  const [prompt, setPrompt] = useState('');
  const [isOrchestrating, setIsOrchestrating] = useState(false);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [researchWorkers, setResearchWorkers] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Available agents
  const agents: Agent[] = [
    {
      id: 'research',
      name: 'Research Agent',
      type: 'Research',
      status: 'ready',
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'coding',
      name: 'Coding Agent',
      type: 'Development',
      status: 'ready',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'planning',
      name: 'Planning Agent',
      type: 'Strategy',
      status: 'ready',
      icon: '📋',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'tavily',
      name: 'Tavily Search Agent',
      type: 'Search',
      status: 'ready',
      icon: '🔍',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'context',
      name: 'Context Manager',
      type: 'Memory',
      status: 'ready',
      icon: '🧠',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'research2',
      name: 'Research Agent II',
      type: 'Research',
      status: 'ready',
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)'
    }
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

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleStartOrchestration = () => {
    if (selectedAgents.length === 0) return;
    setIsOrchestrating(true);
    // TODO: Implement orchestration logic
    setTimeout(() => {
      setIsOrchestrating(false);
    }, 3000);
  };

  return (
    <div className="custom-omis-container" ref={containerRef}>
      {/* Header */}
      <header className="custom-omis-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Custom Omi's</span>
          </div>
          <nav className="header-tabs">
            <button 
              className={`header-tab ${activeTab === 'output' ? 'active' : ''}`}
              onClick={() => setActiveTab('output')}
            >
              Agent Output
            </button>
            <button 
              className={`header-tab ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              History
            </button>
            <button 
              className={`header-tab ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </nav>
        </div>
        <div className="header-right">
          <button className="header-icon-btn" title="Settings">⚙️</button>
          <button className="header-icon-btn" title="Analytics">📊</button>
          <button className="header-icon-btn" title="Export">📤</button>
          <button className="header-icon-btn" title="History">🕐</button>
          {onClose && (
            <button className="close-btn" onClick={onClose}>✕</button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="custom-omis-main">
        {/* Left Panel - Agent Output */}
        <div className="left-panel">
          <div className="output-section">
            <h3 className="section-title">Agent Output (N/A)</h3>
            <div className="output-content">
              <p className="placeholder-text">Agent output will appear here</p>
            </div>
          </div>

          {/* Flow Tabs */}
          <div className="flow-tabs">
            <button 
              className={`flow-tab ${activeFlowTab === 'flow' ? 'active' : ''}`}
              onClick={() => setActiveFlowTab('flow')}
            >
              Interaction Flow
            </button>
            <button 
              className={`flow-tab ${activeFlowTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveFlowTab('tab2')}
            >
              Tab 2
            </button>
            <button 
              className={`flow-tab ${activeFlowTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveFlowTab('tab3')}
            >
              Tab 3
            </button>
            <button 
              className={`flow-tab ${activeFlowTab === 'tab4' ? 'active' : ''}`}
              onClick={() => setActiveFlowTab('tab4')}
            >
              Tab 4
            </button>
            <button 
              className={`flow-tab ${activeFlowTab === 'tab5' ? 'active' : ''}`}
              onClick={() => setActiveFlowTab('tab5')}
            >
              Tab 5
            </button>
          </div>

          {/* Interaction Flow */}
          <div className="interaction-section">
            <h3 className="section-title">Agent Interaction Flow</h3>
            <div className="interaction-content">
              <p className="placeholder-text">No interaction steps recorded yet.</p>
            </div>
          </div>

          {/* Prompt Input */}
          <div className="prompt-section">
            <textarea
              className="prompt-textarea"
              placeholder="Enter your prompt for the research agent..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            />
            <div className="prompt-footer">
              <span className="char-count">{prompt.length} characters</span>
            </div>
            <button 
              className="send-prompt-btn"
              onClick={handleStartOrchestration}
              disabled={!prompt.trim() || selectedAgents.length === 0}
            >
              Send Prompt
            </button>
          </div>
        </div>

        {/* Right Panel - Agent Selection & Orchestration */}
        <div className="right-panel">
          {/* Agent Selection */}
          <div className="agent-selection-section">
            <div className="section-header">
              <h3 className="section-title">Select Agents:</h3>
              <div className="worker-count">
                <span className="worker-label">Research Worker Slots:</span>
                <span className="worker-value">{researchWorkers}</span>
                <div className="worker-controls">
                  <button 
                    className="worker-btn"
                    onClick={() => setResearchWorkers(Math.max(1, researchWorkers - 1))}
                  >
                    −
                  </button>
                  <button 
                    className="worker-btn"
                    onClick={() => setResearchWorkers(Math.min(10, researchWorkers + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="agents-grid">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  className={`agent-card ${selectedAgents.includes(agent.id) ? 'selected' : ''} ${agent.id === 'tavily' ? 'working' : ''}`}
                  onClick={() => handleAgentToggle(agent.id)}
                  style={{ background: agent.gradient }}
                >
                  <div className="agent-icon">{agent.icon}</div>
                  <div className="agent-name">{agent.name}</div>
                  {agent.id === 'tavily' && (
                    <div className="agent-badge">Working</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Orchestration Visualization */}
          <div className="orchestration-section">
            <button 
              className="start-orchestration-btn"
              onClick={handleStartOrchestration}
              disabled={isOrchestrating || selectedAgents.length === 0}
            >
              {isOrchestrating ? (
                <>
                  <div className="spinner"></div>
                  Orchestrating...
                </>
              ) : (
                <>
                  <span className="btn-icon">🚀</span>
                  Start Orchestration
                </>
              )}
            </button>

            <div className="system-status">
              <h4 className="status-title">System Status</h4>
              <div className="status-grid">
                <div className="status-item">
                  <span className="status-label">Active Nodes:</span>
                  <span className="status-value">0/7</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Data Flows:</span>
                  <span className="status-value">3/8</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Status:</span>
                  <span className="status-value ready">Ready</span>
                </div>
              </div>
            </div>

            <div className="metrics-section">
              <div className="metric-card">
                <div className="metric-label">Overall Efficiency</div>
                <div className="metric-value">85%</div>
                <div className="metric-bar">
                  <div className="metric-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Active Agents</div>
                <div className="metric-value">12/15</div>
                <div className="metric-bar">
                  <div className="metric-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Team Cohesion</div>
                <div className="metric-value">92%</div>
                <div className="metric-bar">
                  <div className="metric-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Configuration */}
          <div className="team-config-section">
            <h4 className="config-title">Team Configuration</h4>
            <div className="config-item">
              <span className="config-label">No supervisor selected.</span>
            </div>
            <div className="config-item">
              <span className="config-label">Research Workers (0/3):</span>
              <span className="config-value">No research workers selected.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orchestration Canvas (hidden by default, shown when orchestrating) */}
      {isOrchestrating && (
        <div className="orchestration-canvas">
          <div className="canvas-overlay">
            <div className="neural-network">
              <div className="network-node orchestrator">
                <div className="node-icon">🧠</div>
                <div className="node-label">Neural Orchestrator</div>
              </div>
              <div className="connection-lines">
                {/* SVG lines would go here for connections */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOmis;
