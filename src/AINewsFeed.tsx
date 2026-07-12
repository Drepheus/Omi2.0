import React, { useState, useEffect } from 'react';
import { Newspaper, Cpu, Code2, Globe, Calendar, ExternalLink, Zap, Flame, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface NewsFeedItem {
  id: string;
  title: string;
  category: 'AI News' | 'AI Models' | 'AI OpenSource';
  description: string;
  timeAgo: string;
  source: string;
  tags?: string[];
  link?: string;
  isHot?: boolean;
}

const SAMPLE_NEWS: NewsFeedItem[] = [
  {
    id: 'n1',
    title: 'Google DeepMind Unveils AlphaFold 4 with Multi-State Protein Modeling',
    category: 'AI News',
    description: 'The latest iteration of AlphaFold now models dynamic, multi-state protein conformations and interactions with smaller drug molecules in real time.',
    timeAgo: '10m ago',
    source: 'Google DeepMind Blog',
    tags: ['Biotech', 'DeepMind', 'Scientific AI'],
    link: 'https://deepmind.google',
    isHot: true
  },
  {
    id: 'm1',
    title: 'Gemini 2.5 Flash Ultra-Fast API Released',
    category: 'AI Models',
    description: 'Google rolls out the developer preview of Gemini 2.5 Flash, reducing latency by 45% while extending context capacity to 5M tokens.',
    timeAgo: '45m ago',
    source: 'Google AI Studio',
    tags: ['Gemini', 'API', 'Developer Tooling'],
    link: '/google-ai-studio',
    isHot: false
  },
  {
    id: 'o1',
    title: 'Llama 4-8B-Instruct: Open Weights Powerhouse Outperforms GPT-4o',
    category: 'AI OpenSource',
    description: 'Meta officially releases Llama-4-8B model family, demonstrating unmatched benchmark scores in coding, math, and logical reasoning for open-weight models.',
    timeAgo: '2h ago',
    source: 'Hugging Face',
    tags: ['Llama 4', 'Meta', 'Open Weights'],
    link: 'https://huggingface.co',
    isHot: true
  },
  {
    id: 'n2',
    title: 'OpenAI DevCon 2026 Keynote: Live Agent Orchestrator & Custom GPT-5 APIs',
    category: 'AI News',
    description: 'OpenAI announces native agentic orchestration APIs, allowing multi-agent cooperation, state persistence, and native browser tool execution.',
    timeAgo: '3h ago',
    source: 'OpenAI Newsroom',
    tags: ['DevCon', 'GPT-5', 'Agents'],
    link: 'https://openai.com',
    isHot: true
  },
  {
    id: 'm2',
    title: 'Claude 4.2 Sonnet Officially Launches on Anthropic Console',
    category: 'AI Models',
    description: 'Anthropic\'s newest mid-tier model brings native canvas integration, live preview executors, and significantly enhanced code-generation capabilities.',
    timeAgo: '5h ago',
    source: 'Anthropic News',
    tags: ['Claude', 'Anthropic', 'Sonnet'],
    link: 'https://anthropic.com',
    isHot: false
  },
  {
    id: 'o2',
    title: 'vLLM v0.8.0 Released with Tensor Parallel FP8 Optimizations',
    category: 'AI OpenSource',
    description: 'The open-source high-throughput LLM serving engine gets support for double-speed FP8 inference on NVIDIA H100 and AMD MI300X.',
    timeAgo: '6h ago',
    source: 'vLLM GitHub',
    tags: ['vLLM', 'Inference Engine', 'NVIDIA'],
    link: 'https://github.com/vllm-project/vllm',
    isHot: false
  },
  {
    id: 'o3',
    title: 'ComfyUI Native Node Editor v2.0 Redesign',
    category: 'AI OpenSource',
    description: 'The visual node editor for generative media launches v2.0 with a fully rewritten webGL renderer, native audio node support, and cloud workspace syncing.',
    timeAgo: '8h ago',
    source: 'ComfyUI Org',
    tags: ['Image Gen', 'ComfyUI', 'WebGL'],
    link: 'https://github.com/comfyanonymous/ComfyUI',
    isHot: false
  }
];

export default function AINewsFeed() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI News' | 'AI Models' | 'AI OpenSource'>('All');
  const [news, setNews] = useState<NewsFeedItem[]>(SAMPLE_NEWS);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/ai-news');
        const data = await response.json();
        if (data && data.news && data.news.length > 0) {
          setNews(data.news);
        }
      } catch (err) {
        console.error('Failed to fetch live AI news:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const filteredNews = activeCategory === 'All' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI News':
        return <Newspaper className="w-4 h-4 text-emerald-400" />;
      case 'AI Models':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'AI OpenSource':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      default:
        return <Globe className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-20 mb-8 p-6 bg-neutral-950/60 border border-neutral-800/80 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-800/60 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              {loading ? (
                <Loader2 className="w-2.5 h-2.5 text-purple-400 animate-spin" />
              ) : (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </>
              )}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              {loading ? 'Syncing updates...' : 'Live Feed Connected'}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            AI Releases of the Day
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Stay up to date with the latest models, tools, and updates in the AI ecosystem.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 p-1 bg-neutral-900/80 border border-neutral-800/60 rounded-xl">
          {['All', 'AI News', 'AI Models', 'AI OpenSource'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 relative ${
                activeCategory === cat 
                  ? 'text-white shadow-lg' 
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeCategoryGlow"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Feed Items */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-5 hover:border-neutral-700/60 hover:bg-neutral-900/50 transition-all duration-300 relative group"
            >
              {/* Hot/New indicator */}
              {item.isHot && (
                <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <Flame className="w-3 h-3 fill-amber-400" /> Hot Release
                </span>
              )}

              {/* Category & Time */}
              <div className="flex items-center gap-2.5 text-xs text-neutral-400 mb-3">
                <span className="flex items-center gap-1.5 bg-neutral-800/50 px-2.5 py-1 rounded-md border border-neutral-800">
                  {getCategoryIcon(item.category)}
                  <span className="font-medium text-neutral-300">{item.category}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Zap className="w-3.5 h-3.5 text-purple-400/80 animate-pulse" />
                  {item.timeAgo}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-neutral-800/40 text-[11px]">
                <span className="text-neutral-500 font-medium">Source: <span className="text-neutral-300">{item.source}</span></span>
                {item.link && (
                  <a 
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    Explore <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
