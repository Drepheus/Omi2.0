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
  Coins,
  Bot,
  Search,
  Code,
  MessageSquare,
  Layers,
  Settings2,
  X,
  Menu,
  AlertTriangle,
  History,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

import './AgentsPage.css';

interface Agent {
  id: string;
  name: string;
  icon: string; // 'openclaw', 'hermes', 'agentzero', 'researcher', 'coder'
  description: string;
  type: string;
  status: 'idle' | 'running' | 'stopped' | 'error';
  category: string;
  tags: string[];
}

interface Deployment {
  id: string;
  agentId: string;
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

interface Message {
  role: 'user' | 'assistant';
  content: string;
  reasoning?: string;
  isStreaming?: boolean;
}

const agentCatalog: Agent[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    icon: 'openclaw',
    description: 'Autonomous web scraper and data extraction agent with advanced parsing',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['scraping', 'data', 'automation']
  },
  {
    id: 'hermes',
    name: 'Hermes',
    icon: 'hermes',
    description: 'Stateless messaging and context synchronization agent for multi-tenant SaaS loops',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['messaging', 'celery', 'sync', 'supa']
  },
  {
    id: 'agentzero',
    name: 'AgentZero',
    icon: 'agentzero',
    description: 'General purpose autonomous agent with tool-use and reasoning capabilities',
    type: 'Autonomous',
    status: 'idle',
    category: 'autonomous',
    tags: ['reasoning', 'tools', 'multi-modal']
  },
  {
    id: 'researcher',
    name: 'Deep Researcher',
    icon: 'researcher',
    description: 'Autonomous research agent that performs deep web research and synthesis',
    type: 'Specialized',
    status: 'idle',
    category: 'specialized',
    tags: ['research', 'search', 'analysis']
  },
  {
    id: 'coder',
    name: 'DevAgent',
    icon: 'coder',
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
    agentId: 'openclaw',
    agentName: 'OpenClaw',
    agentIcon: 'openclaw',
    status: 'running',
    vmName: 'railway-worker-node-1',
    ipAddress: '104.28.45.12',
    uptime: '14d 7h 32m',
    cpu: 12,
    memory: 28,
    deployedAt: '2026-06-24T10:30:00Z'
  }
];

const renderAgentIcon = (id: string, className = "w-5 h-5") => {
  switch (id) {
    case 'openclaw':
      return <Globe className={className} />;
    case 'hermes':
      return <Zap className={className} />;
    case 'agentzero':
      return <Bot className={className} />;
    case 'researcher':
      return <Search className={className} />;
    case 'coder':
      return <Code className={className} />;
    default:
      return <Cpu className={className} />;
  }
};

const categoryMeta: Record<string, { icon: string; color: string }> = {
  autonomous: { icon: '🤖', color: '#818cf8' },
  specialized: { icon: '⚙️', color: '#60a5fa' },
  premium: { icon: '⭐', color: '#fbbf24' }
};

export default function AgentsPage({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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

  // Playground Overlay State
  const [showPlayground, setShowPlayground] = useState(false);
  const [playgroundDeployment, setPlaygroundDeployment] = useState<Deployment | null>(null);
  const [playgroundMessages, setPlaygroundMessages] = useState<Message[]>([]);
  const [playgroundTab, setPlaygroundTab] = useState<'chat' | 'activity' | 'logs'>('chat');
  const [sessions, setSessions] = useState<Array<{ id: string; agentId: string; title: string; createdAt: string }>>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [activityTimeline, setActivityTimeline] = useState<Array<{ id: string; title: string; desc: string; time: string; type: string }>>([]);
  const [executionError, setExecutionError] = useState<{ title: string; code: string; details: string } | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string>('Hermes Terminal initialized. Awaiting commands...');
  const [consoleInput, setConsoleInput] = useState('');
  const [isConsoleExecuting, setIsConsoleExecuting] = useState(false);
  const [expandedReasoningIndex, setExpandedReasoningIndex] = useState<number | null>(null);
  
  const logsEndRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load configuration and mock user credits on mount
  useEffect(() => {
    fetchAgentConfig();
    fetchUserCredits();
  }, []);

  // Scroll to bottom on new logs or new messages
  useEffect(() => {
    if (logsEndRef.current && playgroundTab === 'logs') {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleLogs, playgroundTab]);

  useEffect(() => {
    if (chatEndRef.current && playgroundTab === 'chat') {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [playgroundMessages, playgroundTab]);

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
    try {
      const res = await fetch('/api/agents/config');
      if (res.ok) {
        // Fallback user check
        setCredits(prev => prev === 0 ? 10 : prev);
      }
    } catch (err) {
      console.error('Failed to fetch user credits:', err);
    }
  };

  const parseLogsForChat = (logs: string) => {
    const hermesMatch = logs.match(/💬 \[(?:[^\]]+)\]:\s*([\s\S]*)/i);
    let content = '';
    let reasoning = '';
    
    if (hermesMatch) {
      content = hermesMatch[1].trim();
      // clean up trailing logs
      content = content.replace(/📝 \[Memory Update\][\s\S]*/, '').trim();
      content = content.replace(/💾 \[Database Syncing\][\s\S]*/, '').trim();
      content = content.replace(/\[Hermes: Task executed successfully[\s\S]*/, '').trim();
      
      reasoning = logs.substring(0, hermesMatch.index).trim();
    } else {
      reasoning = logs.trim();
    }
    
    return { content, reasoning };
  };



  const fetchSessionHistory = async (agentId: string) => {
    try {
      const res = await fetch(`/api/chat/history?agentId=${agentId}`);
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions || []);
        if (data.activeSessionId) {
          setActiveSessionId(data.activeSessionId);
        }
        if (data.messages && data.messages.length > 0) {
          setPlaygroundMessages(data.messages.map((m: any) => ({
            role: m.role,
            content: m.content,
            reasoning: m.reasoning || undefined
          })));
        }
      }
    } catch (err) {
      console.error('Failed to fetch session history:', err);
    }
  };

  const openPlayground = (dep: Deployment) => {
    setPlaygroundDeployment(dep);
    setExecutionError(null);
    setShowPlayground(true);
    setPlaygroundTab('chat');
    fetchSessionHistory(dep.agentId);

    // Initial timeline event
    setActivityTimeline([
      {
        id: `act_${Date.now()}`,
        title: `${dep.agentName} Session Initialized`,
        desc: `Connected to worker node ${dep.vmName} (${dep.ipAddress})`,
        time: new Date().toLocaleTimeString(),
        type: 'system'
      }
    ]);
  };

  const handleDeployAgent = async () => {
    if (!selectedAgent) return;

    setIsSavingConfig(true);
    try {
      const res = await fetch('/api/agents/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey || 'dummy-test-key-simulated',
          memoryMd,
          userMd,
        }),
      });

      if (res.ok) {
        setHasSavedConfig(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingConfig(false);
    }

    const newDeployment: Deployment = {
      id: `dep-${Date.now()}`,
      agentId: selectedAgent.id,
      agentName: selectedAgent.name,
      agentIcon: selectedAgent.icon,
      status: 'running',
      vmName: `${selectedAgent.id}-railway-node-${Math.floor(Math.random() * 900) + 100}`,
      ipAddress: '142.250.190.46',
      uptime: '0s',
      cpu: 5,
      memory: 15,
      deployedAt: new Date().toISOString(),
    };

    setDeployments(prev => [...prev, newDeployment]);
    setShowDeployModal(false);
    openPlayground(newDeployment);
  };

  const handleStopDeployment = (id: string) => {
    setDeployments(prev => prev.filter(d => d.id !== id));
    if (playgroundDeployment?.id === id) {
      setShowPlayground(false);
      setPlaygroundDeployment(null);
    }
  };

  const handleRunAgentTurn = async () => {
    if (!consoleInput.trim() || isConsoleExecuting) return;

    const userPrompt = consoleInput;
    const currentAgentId = playgroundDeployment?.agentId || 'hermes';
    const currentAgentName = playgroundDeployment?.agentName || 'Hermes';

    setConsoleInput('');
    setExecutionError(null);
    setIsConsoleExecuting(true);
    setConsoleLogs(`⚡ [${currentAgentName} Initializing] Starting execution turn...`);

    // Log Activity Event
    setActivityTimeline(prev => [
      {
        id: `act_${Date.now()}`,
        title: `Submitted Query to ${currentAgentName}`,
        desc: `Prompt: "${userPrompt.slice(0, 40)}${userPrompt.length > 40 ? '...' : ''}"`,
        time: new Date().toLocaleTimeString(),
        type: 'user'
      },
      ...prev
    ]);

    // Append user message and streaming assistant placeholder
    const newMessages: Message[] = [
      ...playgroundMessages,
      { role: 'user', content: userPrompt }
    ];
    setPlaygroundMessages(newMessages);
    
    // Save user turn to history
    try {
      fetch('/api/chat/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: activeSessionId,
          agentId: currentAgentId,
          role: 'user',
          content: userPrompt
        })
      });
    } catch {}

    const assistantIndex = newMessages.length;
    setPlaygroundMessages(prev => [
      ...prev,
      { role: 'assistant', content: '', reasoning: '⚡ Booting reasoning core...', isStreaming: true }
    ]);
    setExpandedReasoningIndex(assistantIndex);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userPrompt }],
          agentId: currentAgentId
        }),
      });

      if (!res.ok) {
        let errData: any = {};
        try {
          errData = await res.json();
        } catch {}

        const errCode = errData.code || (res.status === 402 ? 'INSUFFICIENT_CREDITS' : 'SERVER_ERROR');
        const errTitle = res.status === 402 ? 'Payment Required (0 Credits)' : (errData.error || 'Execution Failed');
        const errDetails = errData.details || (res.status === 402 
          ? 'You have run out of SaaS credits. Top up $10 (1,000 credits) to continue agent turns.' 
          : 'Failed to communicate with FastAPI execution backend.');

        setExecutionError({
          title: errTitle,
          code: errCode,
          details: errDetails
        });

        setPlaygroundMessages(prev => {
          const updated = [...prev];
          updated[assistantIndex] = {
            role: 'assistant',
            content: `⚠️ ${errTitle}: ${errDetails}`,
            reasoning: `System Diagnostic: [${errCode}] Turn aborted.`,
            isStreaming: false
          };
          return updated;
        });

        setActivityTimeline(prev => [
          {
            id: `act_err_${Date.now()}`,
            title: `Execution Error [${errCode}]`,
            desc: errTitle,
            time: new Date().toLocaleTimeString(),
            type: 'error'
          },
          ...prev
        ]);

        setIsConsoleExecuting(false);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let isDone = false;
        let accumulatedLogs = '';

        while (!isDone) {
          const { value, done } = await reader.read();
          isDone = done;
          if (value) {
            const chunk = decoder.decode(value);
            accumulatedLogs += chunk;
            setConsoleLogs(accumulatedLogs);

            const { content, reasoning } = parseLogsForChat(accumulatedLogs);
            setPlaygroundMessages(prev => {
              const updated = [...prev];
              updated[assistantIndex] = {
                role: 'assistant',
                content: content || 'Reasoning loop in progress...',
                reasoning: reasoning,
                isStreaming: !isDone
              };
              return updated;
            });
          }
        }

        // Save assistant turn to history
        const finalParsed = parseLogsForChat(accumulatedLogs);
        try {
          fetch('/api/chat/history', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId: activeSessionId,
              agentId: currentAgentId,
              role: 'assistant',
              content: finalParsed.content || 'Reasoning turn complete.',
              reasoning: finalParsed.reasoning
            })
          });
        } catch {}

        // Add Activity Log
        setActivityTimeline(prev => [
          {
            id: `act_success_${Date.now()}`,
            title: `${currentAgentName} Turn Completed`,
            desc: finalParsed.content ? finalParsed.content.slice(0, 60) + '...' : 'Turn executed successfully.',
            time: new Date().toLocaleTimeString(),
            type: 'success'
          },
          ...prev
        ]);
      }

      setCredits(prev => Math.max(0, prev - 1));
      await fetchAgentConfig();

    } catch (err: any) {
      console.error(err);
      setExecutionError({
        title: 'Network / Connection Error',
        code: 'NETWORK_ERROR',
        details: err.message || 'Failed to send prompt request to server.'
      });
      setPlaygroundMessages(prev => {
        const updated = [...prev];
        updated[assistantIndex] = {
          role: 'assistant',
          content: `⚠️ System Error: ${err.message}`,
          reasoning: 'System: Connection failure.',
          isStreaming: false
        };
        return updated;
      });
    } finally {
      setIsConsoleExecuting(false);
    }
  };

  const handleSimulateStripeCheckout = async () => {
    if (isSimulatingStripe) return;
    setIsSimulatingStripe(true);
    setConsoleLogs(prev => prev + `\n💳 [Stripe Portal] Initializing Checkout Session...`);

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
              client_reference_id: 'usr_guest',
              amount_total: 1000,
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
      <aside className={`agent-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="agent-sidebar-header">
          <div className="agent-logo" onClick={onClose}>
            <span className="agent-logo-lucide"><Bot size={22} className="text-violet-400" /></span>
            <span className="agent-logo-text">Hermes Hub</span>
          </div>
          <button className="agent-sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="agent-search-container">
          <span className="agent-search-icon"><Search size={14} /></span>
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
            <Play size={14} style={{ color: '#10b981' }} />
            <span>{runningCount} Running</span>
          </div>
          <div className="agent-quick-stat">
            <Square size={14} style={{ color: '#6b7280' }} />
            <span>{stoppedCount} Stopped</span>
          </div>
        </div>

        <div className="agent-credits-panel">
          <div className="credits-title-row">
            <Coins size={16} className="text-amber-400" />
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
            <button className="agent-menu-toggle-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <div>
              <h1 className="agent-topbar-title">One-Click Deployments</h1>
              <p className="agent-topbar-subtitle">Deploy stateful Hermes and OpenClaw loops to Serverless Backends</p>
            </div>
          </div>
          <div className="agent-topbar-right">
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
            <div className="agent-stat-icon" style={{ background: 'rgba(220, 220, 220, 0.05)', color: '#dcdcdc' }}>
              <Server size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">{deployments.length}</span>
              <span className="agent-stat-label">Total Deployments</span>
            </div>
            <span className="agent-stat-trend up">
              <Activity size={12} className="animate-pulse" />
              Active
            </span>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.05)', color: '#10b981' }}>
              <Zap size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">{runningCount}</span>
              <span className="agent-stat-label">Running Agents</span>
            </div>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(245, 158, 11, 0.05)', color: '#f59e0b' }}>
              <Cpu size={20} />
            </div>
            <div className="agent-stat-info">
              <span className="agent-stat-value">Celery</span>
              <span className="agent-stat-label">Worker Engine</span>
            </div>
          </div>
          <div className="agent-stat-card">
            <div className="agent-stat-icon" style={{ background: 'rgba(99, 102, 241, 0.05)', color: '#818cf8' }}>
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
                      <span className="agent-deployment-icon-wrapper">
                        {renderAgentIcon(dep.agentId, "w-6 h-6 text-gray-200")}
                      </span>
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
                    <button className="agent-deployment-action-btn" onClick={() => openPlayground(dep)}>
                      <MessageSquare size={14} /> Chat & Workspace
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
                  <span className="agent-catalog-icon-wrapper">
                    {renderAgentIcon(agent.id, "w-8 h-8 text-gray-100")}
                  </span>
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
                    <Play size={12} />
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
              <span className="agent-modal-icon-wrapper">
                {renderAgentIcon(selectedAgent.id, "w-10 h-10 text-gray-200")}
              </span>
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
                    <label>Worker Container Specs (Railway Multi-Tenant Pool)</label>
                    <select className="agent-modal-select">
                      <option>Railway Micro Container (0.5 vCPU, 512MB RAM)</option>
                      <option>Railway Standard Worker (1 vCPU, 1GB RAM)</option>
                    </select>
                    <span className="field-hint">Runs on the shared multi-tenant worker pool hosted on Railway.</span>
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

      {/* Stateful Agent Chat Playground Workspace */}
      {showPlayground && playgroundDeployment && (
        <div className="playground-overlay" onClick={() => setShowPlayground(false)}>
          <div className="playground-window" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="playground-header">
              <div className="playground-header-info">
                <span className="playground-header-icon">
                  {renderAgentIcon(playgroundDeployment.agentId, "w-5 h-5 text-violet-400")}
                </span>
                <div>
                  <div className="playground-header-title">
                    {playgroundDeployment.agentName} Workspace
                    <span className="playground-header-badge">
                      <span className="pulsing-dot" />
                      Railway Worker Node
                    </span>
                  </div>
                  <div className="playground-header-subtitle">
                    {playgroundDeployment.ipAddress} • Celery Node: {playgroundDeployment.vmName}
                  </div>
                </div>
              </div>

              <div className="playground-header-actions">
                <div className="playground-header-credits">
                  <Coins size={14} className="text-amber-400" />
                  <span>Credits: {credits}</span>
                  <button
                    className="playground-buy-btn"
                    onClick={handleSimulateStripeCheckout}
                    disabled={isSimulatingStripe}
                  >
                    {isSimulatingStripe ? "Processing..." : "Add Credits"}
                  </button>
                </div>
                <button className="playground-close" onClick={() => setShowPlayground(false)}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Split Body */}
            <div className="playground-body">
              {/* Left Pane (70%): Chat & Logs Workspace */}
              <div className="playground-workspace-pane">
                {/* Navigation Tabs */}
                <div className="playground-tabs">
                  <button
                    className={`playground-tab-btn ${playgroundTab === 'chat' ? 'active' : ''}`}
                    onClick={() => setPlaygroundTab('chat')}
                  >
                    <MessageSquare size={14} />
                    <span>Agent Playground</span>
                  </button>
                  <button
                    className={`playground-tab-btn ${playgroundTab === 'activity' ? 'active' : ''}`}
                    onClick={() => setPlaygroundTab('activity')}
                  >
                    <Activity size={14} />
                    <span>Activity Timeline</span>
                  </button>
                  <button
                    className={`playground-tab-btn ${playgroundTab === 'logs' ? 'active' : ''}`}
                    onClick={() => setPlaygroundTab('logs')}
                  >
                    <Terminal size={14} />
                    <span>Live Telemetry Logs</span>
                  </button>
                </div>

                {/* Tab content */}
                <div className="playground-tab-content">
                  {playgroundTab === 'chat' ? (
                    <div className="chat-interface-wrapper">
                      {/* Session History Bar */}
                      {sessions.length > 0 && (
                        <div className="session-history-bar">
                          <History size={13} className="text-gray-400" />
                          <span className="text-xs text-gray-400 font-medium mr-1">Previous Chats:</span>
                          {sessions.map(s => (
                            <div
                              key={s.id}
                              className={`session-history-chip ${activeSessionId === s.id ? 'active' : ''}`}
                              onClick={() => {
                                setActiveSessionId(s.id);
                                fetch(`/api/chat/history?agentId=${playgroundDeployment.agentId}`)
                                  .then(res => res.json())
                                  .then(data => {
                                    if (data.messages && data.messages.length > 0) {
                                      setPlaygroundMessages(data.messages.map((m: any) => ({
                                        role: m.role,
                                        content: m.content,
                                        reasoning: m.reasoning || undefined
                                      })));
                                    }
                                  });
                              }}
                            >
                              <span>{s.title}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Message Thread */}
                      <div className="chat-thread">
                        {playgroundMessages.map((msg, index) => (
                          <div key={index} className={`chat-message-row ${msg.role}`}>
                            <div className="message-avatar">
                              {msg.role === 'user' ? (
                                <div className="user-avatar-placeholder">U</div>
                              ) : (
                                <div className="agent-avatar-placeholder">
                                  {renderAgentIcon(playgroundDeployment.agentId, "w-4 h-4 text-violet-400")}
                                </div>
                              )}
                            </div>

                            <div className="message-balloon-wrapper">
                              {msg.role === 'assistant' && msg.reasoning && (
                                <div className="message-reasoning-disclosure">
                                  <button
                                    className="reasoning-toggle-btn"
                                    onClick={() => setExpandedReasoningIndex(prev => prev === index ? null : index)}
                                  >
                                    <Activity size={12} className={msg.isStreaming ? "animate-pulse text-violet-400" : ""} />
                                    <span>
                                      {msg.isStreaming 
                                        ? "Agent Reasoning in Progress..." 
                                        : "View Agent Reasoning Chain"}
                                    </span>
                                    <ChevronRight size={12} style={{ 
                                      transform: expandedReasoningIndex === index ? 'rotate(90deg)' : 'none',
                                      transition: 'transform 0.2s ease'
                                    }} />
                                  </button>
                                  {expandedReasoningIndex === index && (
                                    <pre className="reasoning-chain-box">
                                      {msg.reasoning}
                                      {msg.isStreaming && <span className="reasoning-cursor">▋</span>}
                                    </pre>
                                  )}
                                </div>
                              )}

                              <div className="message-balloon">
                                <p>{msg.content || (msg.isStreaming ? "Thinking..." : "")}</p>
                                {msg.isStreaming && !msg.content && (
                                  <div className="typing-loader">
                                    <span />
                                    <span />
                                    <span />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        <div ref={chatEndRef} />
                      </div>

                      {/* Error Diagnostic Panel */}
                      {executionError && (
                        <div className="error-diagnostic-panel">
                          <div className="error-diagnostic-header">
                            <AlertTriangle size={18} />
                            <span>Diagnostic Error: {executionError.title}</span>
                          </div>
                          <p className="error-diagnostic-details">{executionError.details}</p>
                          <div className="error-diagnostic-actions">
                            {executionError.code === 'INSUFFICIENT_CREDITS' && (
                              <button
                                className="error-diagnostic-btn primary"
                                onClick={handleSimulateStripeCheckout}
                                disabled={isSimulatingStripe}
                              >
                                <Coins size={14} />
                                {isSimulatingStripe ? "Processing..." : "Add $10 (1,000 Credits)"}
                              </button>
                            )}
                            {executionError.code === 'INVALID_API_KEY' && (
                              <button
                                className="error-diagnostic-btn primary"
                                onClick={() => {
                                  setSelectedAgent(agentCatalog.find(a => a.id === playgroundDeployment.agentId) || agentCatalog[0]);
                                  setShowDeployModal(true);
                                }}
                              >
                                <Key size={14} />
                                Configure OpenAI API Key
                              </button>
                            )}
                            <button
                              className="error-diagnostic-btn secondary"
                              onClick={() => setExecutionError(null)}
                            >
                              Dismiss Alert
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Chat Input */}
                      <div className="chat-input-bar">
                        <input
                          type="text"
                          className="chat-input-field"
                          placeholder={`Message ${playgroundDeployment.agentName}...`}
                          value={consoleInput}
                          onChange={(e) => setConsoleInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleRunAgentTurn()}
                          disabled={isConsoleExecuting}
                        />
                        <button
                          className="chat-send-btn"
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
                  ) : playgroundTab === 'activity' ? (
                    <div className="activity-timeline-wrapper">
                      {activityTimeline.length > 0 ? (
                        activityTimeline.map((item) => (
                          <div key={item.id} className="activity-event-card">
                            <div className="activity-event-icon">
                              {item.type === 'error' ? (
                                <AlertTriangle size={16} className="text-red-400" />
                              ) : item.type === 'success' ? (
                                <CheckCircle2 size={16} className="text-emerald-400" />
                              ) : item.type === 'user' ? (
                                <Send size={16} className="text-violet-400" />
                              ) : (
                                <Activity size={16} className="text-indigo-400" />
                              )}
                            </div>
                            <div className="activity-event-content">
                              <span className="activity-event-title">{item.title}</span>
                              <span className="activity-event-desc">{item.desc}</span>
                              <span className="activity-event-time">{item.time}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center p-8 text-gray-400 text-sm">
                          No recent agent activity events recorded. Submit a prompt to start monitoring.
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="telemetry-logs-wrapper">
                      <div className="logs-scroller">
                        <pre className="logs-text">{consoleLogs}</pre>
                        <div ref={logsEndRef} />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Pane (30%): State & Telemetry */}
              <div className="playground-state-pane">
                <div className="state-pane-section">
                  <div className="state-section-header">
                    <Database size={14} className="text-violet-400" />
                    <h3>Supabase Memory Sync</h3>
                    <span className="sync-status-badge">Synced</span>
                  </div>
                  <p className="state-section-desc">
                    These memory contexts are loaded into the reasoning container at startup and saved on completion.
                  </p>

                  <div className="memory-file-box">
                    <div className="memory-file-title">
                      <FileText size={12} />
                      <span>MEMORY.md</span>
                    </div>
                    <pre className="memory-file-body">{memoryMd}</pre>
                  </div>

                  <div className="memory-file-box">
                    <div className="memory-file-title">
                      <FileText size={12} />
                      <span>USER.md</span>
                    </div>
                    <pre className="memory-file-body">{userMd}</pre>
                  </div>
                </div>

                <div className="state-pane-divider" />

                <div className="state-pane-section">
                  <div className="state-section-header">
                    <Activity size={14} className="text-violet-400" />
                    <h3>Telemetry & Stats</h3>
                  </div>
                  
                  <div className="telemetry-stats-list">
                    <div className="telemetry-stat-row">
                      <span>Server Engine</span>
                      <span className="text-violet-300 font-mono">Celery 5.4</span>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>Redis Queue</span>
                      <span className="text-violet-300 font-mono">Upstash Serverless</span>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>VM CPU Usage</span>
                      <div className="telemetry-stat-progress-wrapper">
                        <div className="telemetry-stat-progress-bar" style={{ width: '8%' }} />
                        <span className="font-mono">8%</span>
                      </div>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>VM Memory Usage</span>
                      <div className="telemetry-stat-progress-wrapper">
                        <div className="telemetry-stat-progress-bar" style={{ width: '22%' }} />
                        <span className="font-mono">22%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
