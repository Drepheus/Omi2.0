"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGuestMode } from '@/context/guest-mode-context';
import { useSession, signIn } from '@/lib/auth-client';
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
  Brain,
  MessageSquare,
  Sparkles,
  Layers,
  LayoutDashboard,
  PlusCircle,
  TrendingUp,
  Download,
  ExternalLink,
  FolderCheck,
  Flame,
  Settings2,
  X,
  Menu,
  AlertTriangle,
  History,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

import { ThinkingOrb } from 'thinking-orbs';
export type OrbState = "idle" | "thinking" | "analyzing" | "composing" | "executing" | "complete" | "error";
import { ShinyText } from '@/components/typography/shiny-text';
import BorderGlow from '@/components/ui/border-glow';

import './AgentsPage.css';

interface Agent {
  id: string;
  name: string;
  skillFile: string;
  framework: string;
  icon: string;
  description: string;
  type: string;
  status: 'idle' | 'running' | 'stopped' | 'error';
  category: string;
  tags: string[];
  runsCount: string;
  isTrending?: boolean;
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
    id: 'claude-code',
    name: 'Claude 5 Code CLI Engine',
    skillFile: 'claude-5-code.md',
    framework: 'Claude 5 Sonnet',
    icon: 'coder',
    description: 'Terminal-native autonomous software engineer for repo refactoring, git diffs, and automated bug fixing loops.',
    type: 'Code & Dev',
    status: 'idle',
    category: 'code-dev',
    tags: ['claude-5.md', 'terminal-exec', 'git-ops', 'refactor'],
    runsCount: '18.4k runs',
    isTrending: true
  },
  {
    id: 'openclaw',
    name: 'OpenClaw Web Scraper & Intelligence',
    skillFile: 'openclaw-web-scraper.md',
    framework: 'OpenClaw 2.0 Engine',
    icon: 'openclaw',
    description: 'Stateful containerized web scraper & crawler for headless page parsing and multi-source research synthesis.',
    type: 'Web & Scraping',
    status: 'idle',
    category: 'web-scraping',
    tags: ['openclaw-sdk.md', 'playwright.md', 'web-search', 'json-extract'],
    runsCount: '14.2k runs',
    isTrending: true
  },
  {
    id: 'hermes-4',
    name: 'Hermes 4 Deep Reasoning Core',
    skillFile: 'hermes-4-reasoning.md',
    framework: 'Nous Hermes 4',
    icon: 'hermes',
    description: 'Multi-turn chain-of-thought solving, complex function calling, and structured decision tree verification.',
    type: 'Reasoning',
    status: 'idle',
    category: 'reasoning',
    tags: ['hermes-4.md', 'reasoning.md', 'function-calling', 'logic-verify'],
    runsCount: '11.8k runs',
    isTrending: true
  },
  {
    id: 'deepseek-v4',
    name: 'DeepSeek V4 Thought Analyst',
    skillFile: 'deepseek-v4-cot.md',
    framework: 'DeepSeek V4 Core',
    icon: 'researcher',
    description: 'Step-by-step mathematical reasoning, statistical synthesis, and full chain-of-thought trace outputs.',
    type: 'Reasoning',
    status: 'idle',
    category: 'reasoning',
    tags: ['deepseek-v4.md', 'thought-trace.md', 'math-solving', 'analytics'],
    runsCount: '9.6k runs',
    isTrending: true
  },
  {
    id: 'browser-use',
    name: 'Browser-Use Stealth Automator',
    skillFile: 'browser-use-stealth.md',
    framework: 'Browser-Use Stealth 2.0',
    icon: 'agentzero',
    description: 'Automated web session navigation, form submissions, authenticated workflow tasks, and visual UI checks.',
    type: 'Web & Scraping',
    status: 'idle',
    category: 'web-scraping',
    tags: ['browser-use.md', 'playwright-stealth.md', 'ui-automation'],
    runsCount: '7.9k runs'
  },
  {
    id: 'alloydb-postgres',
    name: 'PostgreSQL & Supabase Data Agent',
    skillFile: 'supabase-postgres-data.md',
    framework: 'PostgreSQL / Supabase V4',
    icon: 'agentzero',
    description: 'Schema exploration, automated SQL query generation, table metrics auditing, and Drizzle ORM pipeline ops.',
    type: 'Data & SQL',
    status: 'idle',
    category: 'data-sql',
    tags: ['supabase-data.md', 'postgres-admin.md', 'sql-gen', 'drizzle'],
    runsCount: '6.3k runs'
  }
];

const initialDeployments: Deployment[] = [];

const renderAgentIcon = (id: string, className = "w-5 h-5") => {
  switch (id) {
    case 'openclaw':
      return <Globe className={className} />;
    case 'claude-code':
      return <Code className={className} />;
    case 'hermes-4':
      return <Bot className={className} />;
    case 'deepseek-v4':
      return <Activity className={className} />;
    case 'browser-use':
      return <Search className={className} />;
    case 'alloydb-postgres':
      return <Database className={className} />;
    default:
      return <Bot className={className} />;
  }
};

const categoryMeta: Record<string, { label: string; icon: any; color: string }> = {
  'code-dev': { label: 'Code & Dev', icon: Code, color: '#60a5fa' },
  'web-scraping': { label: 'Web & Scraping', icon: Globe, color: '#34d399' },
  'reasoning': { label: 'Deep Reasoning', icon: Brain, color: '#a78bfa' },
  'data-sql': { label: 'Data & SQL', icon: Database, color: '#f59e0b' }
};

export default function AgentsPage({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const { isGuestMode } = useGuestMode();
  const { data: session } = useSession();
  // Guest restrictions temporarily disabled for testing in production
  const isAuthenticated = true;
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleTriggerDeployment = (agent: Agent) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setSelectedAgent(agent);
    setShowDeployModal(true);
  };

  // Dashboard & Deployments State
  const [mainTab, setMainTab] = useState<'overview' | 'create' | 'templates'>('create');
  const [setupMode, setSetupMode] = useState<'choice' | 'custom'>('choice');
  const [deployments, setDeployments] = useState<Deployment[]>(initialDeployments);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedPromptModel, setSelectedPromptModel] = useState('claude-code');

  const promptStarters = [
    {
      id: 'lead-scraper',
      title: 'Web Lead Generation & Scraper',
      category: 'Web & Scraping',
      badge: 'Popular',
      icon: Globe,
      modelId: 'openclaw',
      prompt: 'Crawl target company pricing pages, extract structured JSON contact details, and compile a comparative summary table.'
    },
    {
      id: 'code-refactor',
      title: 'Autonomous Code & Bug Fixer',
      category: 'Code & Dev',
      badge: 'Trending',
      icon: Code,
      modelId: 'claude-code',
      prompt: 'Scan the codebase repository for open bugs, run unit test suites, apply code refactoring, and output a clean git diff.'
    },
    {
      id: 'logic-reasoning',
      title: 'Deep Logic & Contract Inspector',
      category: 'Deep Reasoning',
      badge: 'High Precision',
      icon: Brain,
      modelId: 'deepseek-v4',
      prompt: 'Perform multi-step chain-of-thought analysis on complex technical documents and generate a detailed risk assessment report.'
    },
    {
      id: 'db-optimizer',
      title: 'Database & SQL Performance Auditor',
      category: 'Data & SQL',
      badge: 'Data Ops',
      icon: Database,
      modelId: 'alloydb-postgres',
      prompt: 'Inspect PostgreSQL schema relationships, identify slow query bottlenecks, and suggest indexed ORM optimizations.'
    }
  ];

  const handleLaunchCustomPrompt = () => {
    const targetAgent = agentCatalog.find(a => a.id === selectedPromptModel) || agentCatalog[0];
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setSelectedAgent({
      ...targetAgent,
      description: customPrompt.trim() || targetAgent.description
    });
    setShowDeployModal(true);
  };
  
  // OpenClaw Configuration Form State
  const [apiKey, setApiKey] = useState('');
  const [openclawState, setOpenclawState] = useState(JSON.stringify({
    activeAgent: "openclaw",
    framework: "OpenClaw Node SDK",
    settings: { verbose: true, timeoutMs: 180000 }
  }, null, 2));
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
  const [consoleLogs, setConsoleLogs] = useState<string>('OpenClaw Terminal initialized. Awaiting commands...');
  const [consoleInput, setConsoleInput] = useState('');
  const [isConsoleExecuting, setIsConsoleExecuting] = useState(false);
  const [expandedReasoningIndex, setExpandedReasoningIndex] = useState<number | null>(null);
  
  const logsEndRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const getHeroStageColor = (isStreaming: boolean, content?: string, hasError?: boolean): 'green' | 'purple' | 'yellow' | 'red' => {
    if (hasError || (content && content.startsWith('⚠️'))) return 'red';
    if (content && (content.includes('cancelled') || content.includes('stopped') || content.includes('aborted'))) return 'yellow';
    if (isStreaming) return 'green';
    return 'purple';
  };

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
          if (data.config.openclawState) setOpenclawState(data.config.openclawState);
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
    const openclawMatch = logs.match(/💬 \[(?:[^\]]+)\]:\s*([\s\S]*)/i);
    let content = '';
    let reasoning = '';
    
    if (openclawMatch) {
      content = openclawMatch[1].trim();
      // clean up trailing logs
      content = content.replace(/📝 \[State Update\][\s\S]*/, '').trim();
      content = content.replace(/💾 \[Database Syncing\][\s\S]*/, '').trim();
      content = content.replace(/\[OpenClaw Worker: Task executed successfully[\s\S]*/, '').trim();
      
      reasoning = logs.substring(0, openclawMatch.index).trim();
    } else {
      reasoning = logs.trim();
    }
    
    return { content, reasoning };
  };

  const getAgentOrbState = (isStreaming: boolean, reasoning?: string, content?: string): OrbState => {
    if (!isStreaming) return 'listening';
    const lowerLogs = (reasoning || '').toLowerCase();
    if (lowerLogs.includes('[search]') || lowerLogs.includes('[scraper]') || lowerLogs.includes('scraping') || lowerLogs.includes('browser') || lowerLogs.includes('parsing') || lowerLogs.includes('http')) {
      return 'searching';
    }
    if (lowerLogs.includes('[reasoning]') || lowerLogs.includes('[planning]') || lowerLogs.includes('thinking') || lowerLogs.includes('analyzing') || lowerLogs.includes('chain')) {
      return 'solving';
    }
    if (lowerLogs.includes('[execution]') || lowerLogs.includes('executing') || lowerLogs.includes('running') || lowerLogs.includes('tool') || lowerLogs.includes('worker')) {
      return 'working';
    }
    if (content && content.length > 20) {
      return 'composing';
    }
    return 'solving';
  };

  const getAgentOrbLabel = (state: OrbState, agentName: string): string => {
    switch (state) {
      case 'searching':
        return `${agentName} is scanning web context & searching sources...`;
      case 'solving':
        return `${agentName} is analyzing step-by-step reasoning logic...`;
      case 'working':
        return `${agentName} is executing multi-tenant worker operations...`;
      case 'composing':
        return `${agentName} is synthesizing final response output...`;
      case 'shaping':
        return `${agentName} is formatting memory & context structure...`;
      case 'listening':
      default:
        return `${agentName} is online & ready for instructions`;
    }
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

  const handleCancelAgentTurn = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsConsoleExecuting(false);
    setPlaygroundMessages(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      const lastIndex = updated.length - 1;
      if (updated[lastIndex].role === 'assistant' && updated[lastIndex].isStreaming) {
        updated[lastIndex] = {
          role: 'assistant',
          content: '⏹️ Agent execution turn cancelled by user.',
          reasoning: (updated[lastIndex].reasoning || '') + '\n⏹️ [User Abort] Execution stopped to save tokens.',
          isStreaming: false
        };
      }
      return updated;
    });

    setActivityTimeline(prev => [
      {
        id: `act_cancel_${Date.now()}`,
        title: `Execution Turn Cancelled`,
        desc: `User stopped processing to save credits & tokens.`,
        time: new Date().toLocaleTimeString(),
        type: 'error'
      },
      ...prev
    ]);
  };

  const openPlayground = (dep: Deployment) => {
    setPlaygroundDeployment(dep);
    setExecutionError(null);
    setShowPlayground(true);
    setPlaygroundTab('chat');
    setConsoleLogs(`${dep.agentName} Terminal initialized. Awaiting commands...`);
    setOpenclawState(JSON.stringify({ activeAgent: dep.agentName, framework: "OpenClaw Node SDK", settings: { verbose: true, timeoutMs: 180000 } }, null, 2));
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
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setIsSavingConfig(true);
    try {
      const res = await fetch('/api/agents/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey || 'dummy-test-key-simulated',
          openclawState,
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
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    const userPrompt = consoleInput;
    const currentAgentId = playgroundDeployment?.agentId || 'openclaw';
    const currentAgentName = playgroundDeployment?.agentName || 'OpenClaw';

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

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
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
      if (err.name === 'AbortError') {
        console.log('Agent turn execution aborted by user.');
        return;
      }
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
      abortControllerRef.current = null;
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

  const categories = ['all', ...Array.from(new Set(agentCatalog.map(a => a.category)))];
  const runningCount = deployments.filter(d => d.status === 'running').length;
  const stoppedCount = deployments.filter(d => d.status === 'stopped').length;

  return (
    <div className="agent-dashboard">
      <div className="agent-dashboard-bg" />

      {/* Sidebar */}
      <aside className={`agent-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="agent-sidebar-header">
          <div className="agent-logo" onClick={onClose}>
            <span className="agent-logo-lucide"><Sparkles size={20} className="text-white" /></span>
            <span className="agent-logo-text">OMI AI</span>
          </div>
          <button className="agent-sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Prominent Sidebar CTA for Create Agent */}
        <div className="sidebar-cta-wrapper">
          <button
            className={`sidebar-create-cta ${mainTab === 'create' ? 'active' : ''}`}
            onClick={() => setMainTab('create')}
          >
            <PlusCircle size={17} />
            <span>Create Custom Agent</span>
            <Sparkles size={14} className="ml-auto text-amber-300 opacity-80" />
          </button>
        </div>

        {/* Main Navigation Tabs */}
        <div className="sidebar-nav-section">
          <span className="nav-section-title">NAVIGATE</span>
          <button
            className={`sidebar-item ${mainTab === 'overview' ? 'active' : ''}`}
            onClick={() => setMainTab('overview')}
          >
            <LayoutDashboard size={18} className="sidebar-icon" />
            <span className="sidebar-label">Overview & Dashboard</span>
          </button>

          <button
            className={`sidebar-item ${mainTab === 'create' ? 'active' : ''}`}
            onClick={() => setMainTab('create')}
          >
            <Bot size={18} className="sidebar-icon" />
            <span className="sidebar-label">Create Agent Studio</span>
          </button>

          <button
            className={`sidebar-item ${mainTab === 'templates' ? 'active' : ''}`}
            onClick={() => setMainTab('templates')}
          >
            <Layers size={18} className="sidebar-icon" />
            <span className="sidebar-label">Templates & Prebuilt</span>
          </button>
        </div>

        {mainTab === 'templates' && (
          <>
            <div className="agent-sidebar-divider" />
            <div className="agent-search-container">
              <span className="agent-search-icon"><Search size={14} /></span>
              <input
                type="text"
                className="agent-search"
                placeholder="Search templates..."
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
                        <meta.icon size={15} />
                      </span>
                    )}
                    <span className="agent-category-label">
                      {cat === 'all' ? 'All Skill Templates' : (meta ? meta.label : cat)}
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
          </>
        )}

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
              <h1 className="agent-topbar-title">
                {mainTab === 'overview' && 'Agent Command & Analytics Hub'}
                {mainTab === 'create' && 'Create Custom AI Agent Studio'}
                {mainTab === 'templates' && 'Templates & Prebuilt Agents'}
              </h1>
              <p className="agent-topbar-subtitle">
                {mainTab === 'overview' && 'Central command center for active agent execution, compute metrics, activity trends, & output files.'}
                {mainTab === 'create' && 'Type custom prompts or pick pre-engineered starters to deploy state-of-the-art AI agents.'}
                {mainTab === 'templates' && 'Deploy pre-packaged .md skill templates and autonomous tool loops.'}
              </p>
            </div>
          </div>
          <div className="agent-topbar-right">
            <button className="agent-btn agent-btn-primary" onClick={() => setMainTab('create')}>
              <PlusCircle size={16} />
              <span>Create Agent</span>
            </button>
          </div>
        </header>

        {mainTab === 'overview' && (
          <div className="overview-hub-space space-y-8">
            {/* Top Consumer Metrics Grid */}
            <section className="agent-stats">
              <div className="agent-stat-card">
                <div
                  className="agent-stat-icon"
                  style={{
                    background: runningCount > 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                    color: runningCount > 0 ? '#10b981' : '#e0e0e0'
                  }}
                >
                  <Bot size={20} />
                </div>
                <div className="agent-stat-info">
                  <span className="agent-stat-value">{runningCount}</span>
                  <span className="agent-stat-label">Active Agents Running</span>
                </div>

                <div className={`agent-status-glowing-indicator ${runningCount > 0 ? 'online' : 'offline'}`}>
                  <span className="glowing-light-dot" />
                  <span>{runningCount > 0 ? 'ACTIVE' : 'IDLE'}</span>
                </div>
              </div>

              <div className="agent-stat-card">
                <div className="agent-stat-icon">
                  <MessageSquare size={20} />
                </div>
                <div className="agent-stat-info">
                  <span className="agent-stat-value">1,280</span>
                  <span className="agent-stat-label">Total Messages Sent</span>
                </div>
              </div>

              <div className="agent-stat-card">
                <div className="agent-stat-icon">
                  <Coins size={20} />
                </div>
                <div className="agent-stat-info">
                  <span className="agent-stat-value">{credits}</span>
                  <span className="agent-stat-label">Credits Remaining</span>
                </div>
              </div>

              <div className="agent-stat-card">
                <div className="agent-stat-icon">
                  <Zap size={20} />
                </div>
                <div className="agent-stat-info">
                  <span className="agent-stat-value">0.8s</span>
                  <span className="agent-stat-label">Average Turn Speed</span>
                </div>
              </div>
            </section>

            {/* Compute Highlights & Agent Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="analytics-card col-span-1 lg:col-span-2">
                <div className="card-title-row">
                  <div className="flex items-center gap-2">
                    <Activity size={18} className="text-emerald-400" />
                    <h3 className="card-heading">Compute & Token Activity Trend</h3>
                  </div>
                  <span className="card-badge">Last 7 Days</span>
                </div>

                {/* SVG Activity Graph Bar Visualization */}
                <div className="activity-chart-container mt-4">
                  <div className="chart-bars-row flex items-end justify-between h-40 pt-6 px-4">
                    {[
                      { day: 'Mon', val: 45, runs: 12, tokens: '34k' },
                      { day: 'Tue', val: 70, runs: 28, tokens: '89k' },
                      { day: 'Wed', val: 60, runs: 19, tokens: '62k' },
                      { day: 'Thu', val: 95, runs: 42, tokens: '145k' },
                      { day: 'Fri', val: 80, runs: 34, tokens: '110k' },
                      { day: 'Sat', val: 35, runs: 8, tokens: '24k' },
                      { day: 'Sun', val: 50, runs: 15, tokens: '48k' },
                    ].map(bar => (
                      <div key={bar.day} className="chart-bar-group flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                        <span className="bar-tooltip opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/20 text-xs px-2 py-1 rounded shadow-lg">
                          {bar.runs} runs ({bar.tokens})
                        </span>
                        <div className="bar-track w-full max-w-[28px] bg-white/5 rounded-t-md relative overflow-hidden h-28 flex items-end">
                          <div
                            className="bar-fill w-full bg-gradient-to-t from-gray-400 via-gray-200 to-white transition-all duration-500 rounded-t-md group-hover:brightness-125"
                            style={{ height: `${bar.val}%` }}
                          />
                        </div>
                        <span className="bar-label text-xs text-gray-400 font-medium">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resource Insights & Compute Usage */}
              <div className="analytics-card">
                <div className="card-title-row">
                  <div className="flex items-center gap-2">
                    <Flame size={18} className="text-amber-400" />
                    <h3 className="card-heading">Top Compute Metrics</h3>
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div className="metric-box">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Most Used Agent</span>
                      <span className="text-emerald-400 font-semibold">412 Turns</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Bot size={15} className="text-sky-400" />
                      <span>OpenClaw 2.0 Engine</span>
                    </div>
                  </div>

                  <div className="metric-box">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Highest Token Task</span>
                      <span className="text-amber-400 font-semibold">184.2k Tokens</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Code size={15} className="text-purple-400" />
                      <span>Multi-Step Code Base Refactor</span>
                    </div>
                  </div>

                  <div className="metric-box">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Total Active Runtime</span>
                      <span className="text-sky-400 font-semibold">+14.2% vs last week</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Clock size={15} className="text-emerald-400" />
                      <span>142.5 Hours Active Compute</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Documents & Output Files Section */}
            <section className="analytics-card">
              <div className="card-title-row mb-4">
                <div className="flex items-center gap-2">
                  <FolderCheck size={18} className="text-sky-400" />
                  <h3 className="card-heading">Generated Documents & Artifact Files</h3>
                </div>
                <span className="text-xs text-gray-400">4 Recent Artifacts</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'competitor_pricing_matrix.csv',
                    size: '14.2 KB',
                    agent: 'OpenClaw Web Scraper',
                    time: '42m ago',
                    type: 'CSV Dataset'
                  },
                  {
                    name: 'git_diff_refactored_patch.diff',
                    size: '8.6 KB',
                    agent: 'Claude 5 Code Bug Fixer',
                    time: '2h ago',
                    type: 'Git Diff'
                  },
                  {
                    name: 'contract_risk_assessment.pdf',
                    size: '1.4 MB',
                    agent: 'Nous Hermes 4 Reasoning',
                    time: '5h ago',
                    type: 'PDF Report'
                  },
                  {
                    name: 'optimized_db_indexes.sql',
                    size: '24.8 KB',
                    agent: 'AlloyDB Performance Auditor',
                    time: '1d ago',
                    type: 'SQL Script'
                  }
                ].map(file => (
                  <div key={file.name} className="generated-file-card">
                    <div className="flex items-center gap-3">
                      <div className="file-icon-box">
                        <FileText size={18} className="text-gray-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="file-name text-sm font-medium text-white truncate">{file.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.agent}</span>
                          <span>•</span>
                          <span>{file.time}</span>
                        </div>
                      </div>
                      <button className="file-action-btn" title="Download Artifact">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Live Active Deployments & Quick Action Shortcuts */}
            <section className="agent-section">
              <div className="agent-section-header flex items-center justify-between">
                <h2 className="agent-section-title">Active Deployments & Instances</h2>
                <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1" onClick={() => setMainTab('create')}>
                  <span>Launch New Agent</span> <ArrowUpRight size={14} />
                </button>
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
                <div className="empty-deployments-card text-center py-10 px-6 rounded-2xl bg-white/5 border border-white/10">
                  <Bot size={36} className="mx-auto text-gray-400 mb-3" />
                  <h4 className="text-base font-medium text-white mb-1">No Active Agents Currently Running</h4>
                  <p className="text-xs text-gray-400 max-w-md mx-auto mb-4">You don't have any background agent processes deployed right now. Click below to prompt and launch a new agent.</p>
                  <button className="omi-generate-btn" onClick={() => setMainTab('create')}>
                    <Sparkles size={15} />
                    <span>Create Your First Agent</span>
                  </button>
                </div>
              )}
            </section>
          </div>
        )}

        {mainTab === 'create' && (
          <section className="agent-section max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-white mb-1">Build & Launch Custom AI Agent</h2>
                <p className="text-sm text-gray-400">Choose instant single-click setup or custom-prompt your agent capabilities.</p>
              </div>
              {setupMode === 'custom' && (
                <button
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
                  onClick={() => setSetupMode('choice')}
                >
                  <RotateCcw size={13} />
                  <span>Back to Setup Options</span>
                </button>
              )}
            </div>

            {setupMode === 'choice' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                {/* Option 1: Quick Setup */}
                <div
                  className="onboarding-option-card border border-white/15 bg-[#0f0f14] hover:bg-[#14141c] hover:border-white/30 rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl group"
                  onClick={() => {
                    const defaultAgent = agentCatalog[0];
                    handleTriggerDeployment(defaultAgent);
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Recommended • Single Click
                      </span>
                      <Zap size={22} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      Quick Setup
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Launch a pre-configured autonomous agent loaded with top web scraping, code fixing, & database optimization skills in seconds.
                    </p>
                  </div>

                  <button className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg group-hover:bg-emerald-300 transition-colors">
                    <Zap size={16} fill="currentColor" />
                    <span>Quick Deploy Agent</span>
                  </button>
                </div>

                {/* Option 2: Custom Agent Setup (Advanced) */}
                <div
                  className="onboarding-option-card border border-white/15 bg-[#0f0f14] hover:bg-[#14141c] hover:border-white/30 rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl group"
                  onClick={() => setSetupMode('custom')}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        Advanced • Full Control
                      </span>
                      <Bot size={22} className="text-sky-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-sky-300 transition-colors">
                      Custom Agent Setup (Advanced)
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Custom-prompt your agent from scratch. Select underlying engine models (Claude 5, OpenClaw 2.0, Hermes 4, DeepSeek V4) and inject specific instruction loops.
                    </p>
                  </div>

                  <button className="w-full py-3.5 px-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black transition-all">
                    <Sparkles size={16} />
                    <span>Create with Custom Prompt</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Custom Agent Creation Studio */
              <BorderGlow
                edgeSensitivity={30}
                glowColor="0 0 90"
                backgroundColor="#0f0f14"
                borderRadius={24}
                glowRadius={35}
                glowIntensity={1.2}
                coneSpread={25}
                animated={true}
                autoRevolve={true}
                colors={['#ffffff', '#e0e0e0', '#a8a8a8']}
                className="w-full mb-8"
              >
                <div className="studio-inner-card">
                  <div className="studio-header">
                    <div>
                      <h3 className="studio-title">Prompt & Agent Automation Studio</h3>
                      <p className="studio-subtitle">Select your underlying engine model and prompt your autonomous tool loop.</p>
                    </div>
                  </div>

                  {/* Custom Prompt Box */}
                  <div className="prompt-input-box">
                    <textarea
                      value={customPrompt}
                      onChange={e => setCustomPrompt(e.target.value)}
                      placeholder="Describe what you want your custom AI agent to automate (e.g. 'Crawl competitor pricing and email a weekly summary report...')"
                      className="prompt-textarea"
                      rows={4}
                    />
                    <div className="prompt-box-footer">
                      <div className="studio-model-selector">
                        {agentCatalog.slice(0, 4).map(model => (
                          <button
                            key={model.id}
                            onClick={() => setSelectedPromptModel(model.id)}
                            className={`model-selector-btn ${selectedPromptModel === model.id ? 'active' : ''}`}
                          >
                            <span>{model.framework}</span>
                          </button>
                        ))}
                      </div>

                      <button onClick={handleLaunchCustomPrompt} className="omi-generate-btn">
                        <Sparkles size={16} />
                        <span>Launch Agent</span>
                      </button>
                    </div>
                  </div>

                  {/* Sleek Pill Starters */}
                  <div className="prompt-starters-pills-row">
                    {promptStarters.map(starter => {
                      const Icon = starter.icon;
                      return (
                        <button
                          key={starter.id}
                          onClick={() => {
                            setCustomPrompt(starter.prompt);
                            setSelectedPromptModel(starter.modelId);
                          }}
                          className="omi-starter-pill"
                        >
                          <Icon size={14} className="starter-pill-icon" />
                          <span>{starter.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </BorderGlow>
            )}
          </section>
        )}

        {mainTab === 'templates' && (
          /* Available Skill Templates & Tools Section */
          <section className="agent-section">
            <div className="agent-section-header">
              <div>
                <h2 className="agent-section-title">Trending Skill Templates & Tools</h2>
                <p className="agent-section-subtitle">
                  Deploy pre-packaged <code>.md</code> skills and autonomous tool loops powered by Claude 5, OpenClaw 2.0, Hermes 4, & DeepSeek V4.
                </p>
              </div>
            </div>

            <div className="agent-catalog">
              {filteredAgents.map(agent => (
                <div
                  key={agent.id}
                  className={`agent-catalog-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
                  onClick={() => setSelectedAgent(agent)}
                >
                  <div className="agent-catalog-card-header">
                    <div className="agent-skill-file-badge">
                      <FileText size={13} className="text-sky-400" />
                      <span>{agent.skillFile}</span>
                    </div>
                    <span className="agent-framework-badge">{agent.framework}</span>
                  </div>

                  <div className="agent-catalog-card-title-row">
                    <span className="agent-catalog-icon-wrapper">
                      {renderAgentIcon(agent.id, "w-6 h-6 text-gray-100")}
                    </span>
                    <div>
                      <h3 className="agent-catalog-name">{agent.name}</h3>
                      <span className="agent-runs-count">{agent.runsCount}</span>
                    </div>
                  </div>

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
                        handleTriggerDeployment(agent);
                      }}
                    >
                      <Play size={12} fill="currentColor" />
                      <span>Add Skill to Agent</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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
              <h2>Attach {selectedAgent.name} Skill to Agent</h2>
              <p>Add pre-packaged <code>{selectedAgent.skillFile}</code> capabilities to your running agent instance.</p>
            </div>
            <div className="agent-modal-body">
              {selectedAgent.id === 'openclaw' ? (
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
                      OpenClaw State (JSON)
                    </label>
                    <textarea
                      className="agent-modal-textarea font-mono text-xs"
                      value={openclawState}
                      onChange={(e) => setOpenclawState(e.target.value)}
                      rows={6}
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
                        {playgroundMessages.length === 0 ? (
                          <div className="empty-playground-orb-stage text-center py-12 px-6 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-white/[0.02] my-4">
                            <div className="mb-4">
                              <ThinkingOrb state="idle" size={72} theme="dark" />
                            </div>
                            <h4 className="text-lg font-light text-white mb-1">
                              {playgroundDeployment.agentName} is Online & Ready
                            </h4>
                            <p className="text-xs text-gray-400 max-w-sm mb-4">
                              Agent instance is listening on Celery Worker Node ({playgroundDeployment.ipAddress}). Send a prompt or command below to execute.
                            </p>
                          </div>
                        ) : (
                          playgroundMessages.map((msg, index) => (
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
                                {msg.role === 'assistant' && msg.isStreaming ? (
                                  <div className="orb-thinking-hero-card">
                                    {/* Thinking Orb Hero Stage */}
                                    {(() => {
                                      const stageColor = getHeroStageColor(msg.isStreaming, msg.content, !!executionError);
                                      const orbState = getAgentOrbState(true, msg.reasoning, msg.content);
                                      return (
                                        <div className={`orb-thinking-hero-stage ${stageColor}`}>
                                          <ThinkingOrb
                                            state={orbState}
                                            size={64}
                                            theme="dark"
                                          />
                                          <div className={`orb-status-pill ${stageColor}`}>
                                            <span className="orb-pulse-dot" />
                                            <span>{getAgentOrbLabel(orbState, playgroundDeployment.agentName)}</span>
                                          </div>
                                          <button className="orb-stop-btn" onClick={handleCancelAgentTurn}>
                                            <Square size={12} fill="currentColor" />
                                            <span>Stop Execution</span>
                                          </button>
                                        </div>
                                      );
                                    })()}

                                    {/* Streaming Message Content */}
                                    {msg.content && (
                                      <div className="message-balloon streaming-content">
                                        <p>{msg.content}</p>
                                      </div>
                                    )}

                                    {/* Collapsed System Logs Toggle */}
                                    {msg.reasoning && (
                                      <div className="message-reasoning-disclosure">
                                        <button
                                          className="reasoning-toggle-btn"
                                          onClick={() => setExpandedReasoningIndex(prev => prev === index ? null : index)}
                                        >
                                          <Terminal size={13} className="text-violet-400" />
                                          <span>
                                            {expandedReasoningIndex === index
                                              ? "Hide Terminal Logs & Reasoning Chain"
                                              : "Expand Terminal Logs & Reasoning Chain"}
                                          </span>
                                          <ChevronRight
                                            size={13}
                                            style={{
                                              transform: expandedReasoningIndex === index ? 'rotate(90deg)' : 'none',
                                              transition: 'transform 0.2s ease'
                                            }}
                                          />
                                        </button>
                                        {expandedReasoningIndex === index && (
                                          <pre className="reasoning-chain-box">
                                            {msg.reasoning}
                                            <span className="reasoning-cursor">▋</span>
                                          </pre>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <>
                                    {msg.role === 'assistant' && msg.reasoning && (
                                      <div className="message-reasoning-disclosure">
                                        <button
                                          className="reasoning-toggle-btn"
                                          onClick={() => setExpandedReasoningIndex(prev => prev === index ? null : index)}
                                        >
                                          <Terminal size={13} className="text-violet-400" />
                                          <span>
                                            {expandedReasoningIndex === index 
                                              ? "Hide System Logs & Reasoning Chain"
                                              : "View System Logs & Reasoning Chain"}
                                          </span>
                                          <ChevronRight size={13} style={{ 
                                            transform: expandedReasoningIndex === index ? 'rotate(90deg)' : 'none',
                                            transition: 'transform 0.2s ease'
                                          }} />
                                        </button>
                                        {expandedReasoningIndex === index && (
                                          <pre className="reasoning-chain-box">
                                            {msg.reasoning}
                                          </pre>
                                        )}
                                      </div>
                                    )}

                                    <div className="message-balloon">
                                      <p>{msg.content}</p>
                                    </div>
                                   </>
                                 )}
                               </div>
                           </div>
                         ))
                        )}
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
                        {isConsoleExecuting ? (
                          <button
                            className="chat-stop-btn"
                            onClick={handleCancelAgentTurn}
                            title="Stop agent execution"
                          >
                            <Square size={14} fill="currentColor" />
                            <span>Stop</span>
                          </button>
                        ) : (
                          <button
                            className="chat-send-btn"
                            onClick={handleRunAgentTurn}
                            disabled={!consoleInput.trim()}
                          >
                            <Send size={16} />
                          </button>
                        )}
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
                    <h3>Supabase State Sync</h3>
                    <span className="sync-status-badge">Synced</span>
                  </div>
                  <p className="state-section-desc">
                    OpenClaw state JSON object stored cleanly under agent_configs in Supabase.
                  </p>

                  <div className="memory-file-box">
                    <div className="memory-file-title">
                      <FileText size={12} />
                      <span>openclawState.json</span>
                    </div>
                    <pre className="memory-file-body">{openclawState}</pre>
                  </div>
                </div>

                <div className="state-pane-divider" />

                <div className="state-pane-section">
                  <div className="state-section-header">
                    <Activity size={14} className="text-violet-400" />
                    <h3>Agent Performance & Status</h3>
                  </div>
                  
                  <div className="telemetry-stats-list">
                    <div className="telemetry-stat-row">
                      <span>AI Model Engine</span>
                      <span className="text-violet-300 font-mono">Claude 5 / DeepSeek V4</span>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>Agent Status</span>
                      <span className="text-emerald-400 font-mono">Online & Ready</span>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>Response Latency</span>
                      <span className="text-sky-300 font-mono">0.8s Superfast</span>
                    </div>
                    <div className="telemetry-stat-row">
                      <span>Execution Cost</span>
                      <span className="text-amber-300 font-mono">1 Credit / Turn</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAuthModal && (
        <div className="agent-modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="agent-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px', textAlign: 'center', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', padding: '1rem' }}>
                <Shield size={36} style={{ color: '#818cf8' }} />
              </div>
            </div>

            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Authentication Required
            </h2>

            <p style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.5', marginBottom: '1.75rem' }}>
              Guest mode allows UI browsing only. Please sign in with <strong>Google</strong> or <strong>GitHub</strong> to deploy microservice workers and execute agent loops.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => signIn.social({ provider: 'google', callbackURL: '/agents' })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: '#ffffff',
                  color: '#1f2937',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <svg className="google-icon" viewBox="0 0 24 24" style={{ width: '18px', height: '18px', marginRight: '8px' }}>
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                  </g>
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => signIn.social({ provider: 'github', callbackURL: '/agents' })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: '#111827',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid #374151',
                  cursor: 'pointer'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>

              <button
                onClick={() => setShowAuthModal(false)}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '0.25rem'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
