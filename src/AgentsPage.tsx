"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Server,
  Play,
  Square,
  Clock,
  Activity,
  ChevronRight,
  Plus,
  Settings,
  Terminal,
  Globe,
  Zap,
  Shield,
  Database,
  Cpu,
  HardDrive,
  BarChart3,
  ArrowUpRight,
  Key,
  FileText,
  DollarSign,
  Send,
  Loader2,
  RefreshCw,
  Coins
} from 'lucide-react';

import './AgentsPage.css';

interface Agent {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: string;
  status: 'idle' | 'running' | 'stopped' | 'error';
  category: string;
  tags: string[];
}

interface Deployment {
  id: string;
  agentName: string;
  agentIcon: string;
  status: 'provisioning' | 'running' | 'stopped' | 'error';
  vmName: string;
  ipAddress: string;
  uptime: string;
  cpu: number;
  memory: number;
  deployedAt: string;
}

const agentCatalog: Agent[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    icon: '🦅',
    description: 'Autonomous web scraper and data extraction agent with advanced parsing',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['scraping', 'data', 'automation']
  },
  {
    id: 'hermes',
    name: 'Hermes',
    icon: '⚡',
    description: 'Stateless messaging and context synchronization agent for multi-tenant SaaS loops',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['messaging', 'celery', 'sync', 'supa']
  },
  {
    id: 'agentzero',
    name: 'AgentZero',
    icon: '🤖',
    description: 'General purpose autonomous agent with tool-use and reasoning capabilities',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['reasoning', 'tools', 'multi-modal']
  },
  {
    id: 'researcher',
    name: 'Deep Researcher',
    icon: '🔍',
    description: 'Autonomous research agent that performs deep web research and synthesis',
    type: 'Specialized',
    status: 'idle',
    category: 'specialized',
    tags: ['research', 'search', 'analysis']
  },
  {
    id: 'coder',
    name: 'DevAgent',
    icon: '💻',
    description: 'AI coding agent for automated code generation, review, and refactoring',
    type: 'Specialized',
    status: 'idle',
    category: 'specialized',
    tags: ['code', 'review', 'development']
  }
];

const initialDeployments: Deployment[] = [
  {
    id: 'dep-1',
    agentName: 'OpenClaw',
    agentIcon: '🦅',
    status: 'running',
    vmName: 'omivm-us-east-1',
    ipAddress: '104.28.45.12',
    uptime: '14d 7h 32m',
    cpu: 12,
    memory: 28,
    deployedAt: '2026-06-24T10:30:00Z'
  }
];

const categoryMeta: Record<string, { icon: string; color: string }> = {
  autonomous: { icon: '🤖', color: '#a78bfa' },
  specialized: { icon: '⚙️', color: '#60a5fa' },
  premium: { icon: '⭐', color: '#fbbf24' }
};

export default function AgentsPage({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dashboard & Deployments State
  const [deployments, setDeployments] = useState<Deployment[]>(initialDeployments);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showDeployModal, setShowDeployModal] = useState(false);
  
  // Hermes Configuration Form State
  const [apiKey, setApiKey] = useState('');
  const [memoryMd, setMemoryMd] = useState(`# Core Memories
- User values technical blueprints over summaries.
- Deploying on multi-tenant Hermes SaaS framework.`);
  const [userMd, setUserMd] = useState(`# User Profile
- Technical Founder
- Preferences: JSON formatted data`);
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [hasSavedConfig, setHasSavedConfig] = useState(false);

  // Credit Balance State
  const [credits, setCredits] = useState<number>(0);
  const [isSimulatingStripe, setIsSimulatingStripe] = useState(false);

  // Console Overlay State
  const [showConsole, setShowConsole] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string>('Hermes Terminal initialized. Awaiting commands...');
  const [consoleInput, setConsoleInput] = useState('');
  const [isConsoleExecuting, setIsConsoleExecuting] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Load configuration and mock user credits on mount
  useEffect(() => {
    fetchAgentConfig();
    fetchUserCredits();
  }, []);

  // Scroll logs to bottom
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleLogs]);

  const fetchAgentConfig = async () => {
    try {
      const res = await fetch('/api/agents/config');
      if (res.ok) {
        const data = await res.json();
        if (data.config) {
          setHasSavedConfig(data.config.hasApiKey);
          if (data.config.memoryMd) setMemoryMd(data.config.memoryMd);
          if (data.config.userMd) setUserMd(data.config.userMd);
        }
      }
    } catch (err) {
      console.error('Failed to load agent config:', err);
    }
  };

  const fetchUserCredits = async () => {
    // Simply fetch database session or create user to show credits
    try {
      // Direct call to API which creates user record on route access
      const res = await fetch('/api/agents/config');
      if (res.ok) {
        // Trigger chat config fetch or simple api call to see balance
        // We'll simulate fetching credits from user record
        const userRes = await fetch('/api/agents/config'); // triggers fallback insert
        if (userRes.ok) {
          // Let's set initial credits
          setCredits(prev => prev === 0 ? 10 : prev);
        }
      }
    } catch (err) {
      console.error('Failed to fetch user credits:', err);
    }
  };

  const handleDeployAgent = async () => {
    if (!selectedAgent) return;

    if (selectedAgent.id === 'hermes') {
      setIsSavingConfig(true);
      try {
        const res = await fetch('/api/agents/config', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: apiKey || 'dummy-test-key-simulated', // Allow fallback for testing
            memoryMd,
            userMd,
          }),
        });

        if (res.ok) {
          setHasSavedConfig(true);
        } else {
          alert('Failed to save configuration');
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSavingConfig(false);
      }
    }

    // Add agent to active deployments
    const newDeployment: Deployment = {
      id: `dep-${Date.now()}`,
      agentName: selectedAgent.name,
      agentIcon: selectedAgent.icon,
      status: 'running',
      vmName: `hermes-railway-node-${Math.floor(Math.random() * 900) + 100}`,
      ipAddress: '142.250.190.46',
      uptime: '0s',
      cpu: 5,
      memory: 15,
      deployedAt: new Date().toISOString(),
    };

    setDeployments(prev => [...prev, newDeployment]);
    setShowDeployModal(false);
  };

  const handleStopDeployment = (id: string) => {
    setDeployments(prev => prev.filter(d => d.id !== id));
  };

  const handleRunAgentTurn = async () => {
    if (!consoleInput.trim() || isConsoleExecuting) return;

    const userPrompt = consoleInput;
    setConsoleInput('');
    setIsConsoleExecuting(true);
    setConsoleLogs(prev => prev + `\n\n> User: ${userPrompt}\n`);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userPrompt }],
        }),
      });

      if (!res.ok) {
        if (res.status === 402) {
          setConsoleLogs(prev => prev + `\n⚠️ Error: Payment Required. You have 0 credits. Please purchase more credits to run the agent.\n`);
        } else {
          const errData = await res.json();
          setConsoleLogs(prev => prev + `\n⚠️ Error executing turn: ${errData.error || res.statusText}\n`);
        }
        setIsConsoleExecuting(false);
        return;
      }

      // Stream the output
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let isDone = false;
        while (!isDone) {
          const { value, done } = await reader.read();
          isDone = done;
          if (value) {
            const chunk = decoder.decode(value);
            setConsoleLogs(prev => prev + chunk);
          }
        }
      }

      // Deduct credit in UI
      setCredits(prev => Math.max(0, prev - 1));
      
      // Refresh memory contexts since Hermes synced them back to Supabase!
      await fetchAgentConfig();

    } catch (err: any) {
      console.error(err);
      setConsoleLogs(prev => prev + `\n⚠️ System Error: ${err.message}\n`);
    } finally {
      setIsConsoleExecuting(false);
    }
  };

  const handleSimulateStripeCheckout = async () => {
    if (isSimulatingStripe) return;
    setIsSimulatingStripe(true);
    setConsoleLogs(prev => prev + `\n💳 [Stripe Portal] Initializing Checkout Session...`);

    // Simulate checkout session completion webhook trigger on our Next.js API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const webhookRes = await fetch('/api/webhooks/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': 'simulated_signature_value',
        },
        body: JSON.stringify({
          id: 'evt_simulated_checkout_completed',
          type: 'checkout.session.completed',
          data: {
            object: {
              id: 'cs_test_simulated_session_id',
              client_reference_id: 'usr_guest', // target guest user
              amount_total: 1000, // $10.00
              customer_details: {
                name: 'Simulated Developer',
                email: 'dev@hermes.io',
              },
              metadata: {
                amount: '10',
              }
            }
          }
        }),
      });

      if (webhookRes.ok) {
        setCredits(prev => prev + 1000);
        setConsoleLogs(prev => prev + `\n✅ [Stripe Webhook Success] Received purchase verification! Added 1000 credits to account.\n`);
      } else {
        setConsoleLogs(prev => prev + `\n❌ [Stripe Webhook Failed] Webhook processing error: ${webhookRes.statusText}\n`);
      }
    } catch (err: any) {
      setConsoleLogs(prev => prev + `\n❌ [Stripe Simulation Error] failed: ${err.message}\n`);
    } finally {
      setIsSimulatingStripe(false);
    }
  };

  const filteredAgents = agentCatalog.filter(agent => {
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tags.some(t => t.includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(agentCatalog.map(a => a.category))];
  const runningCount = deployments.filter(d => d.status === 'running').length;
  const stoppedCount = deployments.filter(d => d.status === 'stopped').length;

  return (
    <div className="agent-dashboard">
      <div className="agent-dashboard-bg" />

      {/* Sidebar */}
      <aside className="agent-sidebar">
        <div className="agent-sidebar-header">
          <div className="agent-logo" onClick={onClose}>
            <span className="agent-logo-icon">🤖</span>
            <span className="agent-logo-text">Hermes Hub</span>
          </div>
        </div>

        <div className="agent-search-container">
          <span className="agent-search-icon">🔍</span>
          <input
            type="text"
            className="agent-search"
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="agent-categories">
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            const meta = categoryMeta[cat];
            return (
              <button
                key={cat}
                className={`agent-category-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat !== 'all' && meta && (
                  <span className="agent-category-icon" style={{ color: meta.color }}>
                    {meta.icon}
                  </span>
                )}
                <span className="agent-category-label">
                  {cat === 'all' ? 'All Agents' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
                <span className="agent-category-count">
                  {cat === 'all'
                    ? agentCatalog.length
                    : agentCatalog.filter(a => a.category === cat).length}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="agent-sidebar-divider" />

        <div className="agent-quick-stats">
          <div className="agent-quick-stat">
            <Play size={14} className="text-green-400" />
            <span>{runningCount} Running</span>
          </div>
          <div className="agent-quick-stat">
            <Square size={14} className="text-gray-500" />
            <span>{stoppedCount} Stopped</span>
          </div>
        </div>

        <div className="agent-credits-panel">
          <div className="credits-title-row">
            <Coins size={16} className="text-violet-400" />
            <span>SaaS Credits</span>
          </div>
          <div className="credits-val">{credits}</div>
          <button className="credits-buy-btn" onClick={handleSimulateStripeCheckout}>
            Buy $10 (1k credits)
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="agent-main">
        {/* Top Bar */}
        <header className="agent-topbar">
          <div className="agent-topbar-left">
            <h1 className="agent-topbar-title">One-Click Deployments</h1>
            <p className="agent-topbar-subtitle">Deploy stateful Hermes and OpenClaw loops to Serverless Backends</p>
          </div>
          <div className="agent-topbar-right">
            <button className="agent-btn agent-btn-secondary" onClick={() => setShowConsole(true)}>
              <Terminal size={16} />
              <span>Console</span>
            </button>
            <button className="agent-btn agent-btn-primary" onClick={() => {
              setSelectedAgent(agentCatalog.find(a => a.id === 'hermes') || agentCatalog[0]);
              setShowDeployModal(true);
            }}>
              <Plus size={16} />
              <span>New Deployment</span>
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <section className="agent-stats">
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
              <Server size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">{deployments.length}</span>
              <span className="agent-stat-label">Total Deployments</span>
            </div>
            <span className="agent-stat-trend up">
              <ArrowUpRight size={14} />
              Active
            </span>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399' }}>
              <Zap size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">{runningCount}</span>
              <span className="agent-stat-label">Running Agents</span>
            </div>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>
              <Cpu size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">Celery</span>
              <span className="agent-stat-label">Worker Engine</span>
            </div>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa' }}>
              <BarChart3 size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">Upstash</span>
              <span className="agent-stat-label">Redis Cache</span>
            </div>
          </div>
        </section>

        {/* Deployments Section */}
        <section className="agent-section">
          <div className="agent-section-header">
            <h2 className="agent-section-title">Active Deployments</h2>
          </div>

          {deployments.length > 0 ? (
            <div className="agent-deployments-grid">
              {deployments.map(dep => (
                <div key={dep.id} className="agent-deployment-card">
                  <div className="agent-deployment-top">
                    <div className="agent-deployment-agent">
                      <span className="agent-deployment-icon">{dep.agentIcon}</span>
                      <div>
                        <span className="agent-deployment-name">{dep.agentName}</span>
                        <span className="agent-deployment-vm">{dep.vmName}</span>
                      </div>
                    </div>
                    <span className={`agent-status-badge ${dep.status}`}>
                      <span className="agent-status-dot" />
                      {dep.status}
                    </span>
                  </div>
                  <div className="agent-deployment-details">
                    <div className="agent-deployment-detail">
                      <Globe size={14} />
                      <span>{dep.ipAddress}</span>
                    </div>
                    <div className="agent-deployment-detail">
                      <Clock size={14} />
                      <span>{dep.uptime}</span>
                    </div>
                  </div>
                  <div className="agent-deployment-resources">
                    <div className="agent-resource-bar">
                      <div className="agent-resource-header">
                        <Cpu size={12} />
                        <span>CPU</span>
                        <span>{dep.cpu}%</span>
                      </div>
                      <div className="agent-resource-track">
                        <div className="agent-resource-fill" style={{ width: `${dep.cpu}%` }} />
                      </div>
                    </div>
                    <div className="agent-resource-bar">
                      <div className="agent-resource-header">
                        <HardDrive size={12} />
                        <span>Memory</span>
                        <span>{dep.memory}%</span>
                      </div>
                      <div className="agent-resource-track">
                        <div className="agent-resource-fill memory" style={{ width: `${dep.memory}%` }} />
                      </div>
                    </div>
                  </div>
                  <div className="agent-deployment-actions">
                    <button className="agent-deployment-action-btn" onClick={() => setShowConsole(true)}>
                      <Terminal size={14} /> Console
                    </button>
                    <button className="agent-deployment-action-btn danger" onClick={() => handleStopDeployment(dep.id)}>
                      <Square size={14} /> Stop
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="agent-empty-deployments">
              <Server size={48} className="agent-empty-icon" />
              <h3>No Active Deployments</h3>
              <p>Deploy an agent to a Celery cluster to get started</p>
            </div>
          )}
        </section>

        {/* Available Agents Section */}
        <section className="agent-section">
          <div className="agent-section-header">
            <h2 className="agent-section-title">Available Agents</h2>
          </div>

          <div className="agent-catalog">
            {filteredAgents.map(agent => (
              <div
                key={agent.id}
                className={`agent-catalog-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="agent-catalog-card-header">
                  <span className="agent-catalog-icon">{agent.icon}</span>
                  <span className={`agent-status-indicator running`} />
                </div>
                <h3 className="agent-catalog-name">{agent.name}</h3>
                <p className="agent-catalog-desc">{agent.description}</p>
                <div className="agent-catalog-tags">
                  {agent.tags.map(tag => (
                    <span key={tag} className="agent-tag">{tag}</span>
                  ))}
                </div>
                <div className="agent-catalog-card-footer">
                  <span className="agent-catalog-type">{agent.type}</span>
                  <button
                    className="agent-deploy-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAgent(agent);
                      setShowDeployModal(true);
                    }}
                  >
                    <Play size={14} />
                    Deploy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Deploy Modal */}
      {showDeployModal && selectedAgent && (
        <div className="agent-modal-overlay" onClick={() => setShowDeployModal(false)}>
          <div className="agent-modal" onClick={e => e.stopPropagation()}>
            <button className="agent-modal-close" onClick={() => setShowDeployModal(false)}>✕</button>
            <div className="agent-modal-header">
              <span className="agent-modal-icon">{selectedAgent.icon}</span>
              <h2>Deploy {selectedAgent.name}</h2>
              <p>{selectedAgent.description}</p>
            </div>
            <div className="agent-modal-body">
              {selectedAgent.id === 'hermes' ? (
                <>
                  <div className="agent-modal-field">
                    <label>
                      <Key size={14} style={{ display: 'inline', marginRight: 4 }} />
                      OpenAI API Key
                    </label>
                    <input
                      type="password"
                      className="agent-modal-input"
                      placeholder={hasSavedConfig ? "•••••••••••••••• (Saved)" : "sk-proj-..."}
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <span className="field-hint">Your API Key is encrypted server-side with AES-256 before storage.</span>
                  </div>

                  <div className="agent-modal-field">
                    <label>
                      <FileText size={14} style={{ display: 'inline', marginRight: 4 }} />
                      MEMORY.md Initial State
                    </label>
                    <textarea
                      className="agent-modal-textarea"
                      value={memoryMd}
                      onChange={(e) => setMemoryMd(e.target.value)}
                      rows={5}
                    />
                  </div>

                  <div className="agent-modal-field">
                    <label>
                      <FileText size={14} style={{ display: 'inline', marginRight: 4 }} />
                      USER.md Initial State
                    </label>
                    <textarea
                      className="agent-modal-textarea"
                      value={userMd}
                      onChange={(e) => setUserMd(e.target.value)}
                      rows={4}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="agent-modal-field">
                    <label>VM Instance</label>
                    <select className="agent-modal-select">
                      <option>omivm-us-east-1 (4 vCPU, 16GB RAM)</option>
                      <option>omivm-eu-west-1 (8 vCPU, 32GB RAM)</option>
                    </select>
                  </div>
                  <div className="agent-modal-field">
                    <label>Deployment Name</label>
                    <input type="text" className="agent-modal-input" placeholder={`${selectedAgent.name}-dep-1`} />
                  </div>
                </>
              )}
            </div>
            <div className="agent-modal-footer">
              <button className="agent-btn agent-btn-secondary" onClick={() => setShowDeployModal(false)}>
                Cancel
              </button>
              <button className="agent-btn agent-btn-primary" onClick={handleDeployAgent} disabled={isSavingConfig}>
                {isSavingConfig ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Configuring...
                  </>
                ) : (
                  <>
                    <Zap size={16} />
                    Deploy Agent
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Terminal / Console Overlay */}
      {showConsole && (
        <div className="console-overlay" onClick={() => setShowConsole(false)}>
          <div className="console-window" onClick={e => e.stopPropagation()}>
            <div className="console-header">
              <div className="console-title">
                <Terminal size={18} className="text-violet-400" />
                <span>Hermes Execution Console</span>
                <span className="console-status-active">● Active</span>
              </div>
              <div className="console-credits-display">
                <Coins size={14} className="text-violet-400" />
                <span>Credits: {credits}</span>
                <button
                  className="console-credit-add"
                  onClick={handleSimulateStripeCheckout}
                  disabled={isSimulatingStripe}
                >
                  {isSimulatingStripe ? "Processing..." : "Add Credits"}
                </button>
              </div>
              <button className="console-close" onClick={() => setShowConsole(false)}>✕</button>
            </div>

            <div className="console-content">
              {/* Left pane: streaming logs & input */}
              <div className="console-logs-pane">
                <div className="logs-scroller">
                  <pre className="logs-text">{consoleLogs}</pre>
                  <div ref={logsEndRef} />
                </div>

                <div className="console-input-row">
                  <input
                    type="text"
                    className="console-input"
                    placeholder="Enter prompt for Hermes Agent..."
                    value={consoleInput}
                    onChange={(e) => setConsoleInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleRunAgentTurn()}
                    disabled={isConsoleExecuting}
                  />
                  <button
                    className="console-send-btn"
                    onClick={handleRunAgentTurn}
                    disabled={isConsoleExecuting || !consoleInput.trim()}
                  >
                    {isConsoleExecuting ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <Send size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Right pane: Memory context visualizers */}
              <div className="console-memory-pane">
                <div className="memory-pane-header">
                  <h3>Supabase Stateful Memory Syncer</h3>
                  <p>Updates automatically when Hermes completes a Celery reasoning loop.</p>
                </div>

                <div className="memory-box">
                  <div className="memory-box-title">
                    <FileText size={12} />
                    <span>MEMORY.md</span>
                  </div>
                  <pre className="memory-box-content">{memoryMd}</pre>
                </div>

                <div className="memory-box">
                  <div className="memory-box-title">
                    <FileText size={12} />
                    <span>USER.md</span>
                  </div>
                  <pre className="memory-box-content">{userMd}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
