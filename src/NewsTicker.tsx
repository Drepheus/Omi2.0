"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

interface NewsTickerProps {
  news?: NewsItem[];
}

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Google Announces Gemini 2.5 with Enhanced Reasoning',
    source: 'TechCrunch',
    date: 'Jan 16, 2026',
    category: 'Release',
    url: '#'
  },
  {
    id: '2',
    title: 'OpenAI Previews GPT-5 Architecture Details',
    source: 'The Verge',
    date: 'Jan 15, 2026',
    category: 'Preview',
    url: '#'
  },
  {
    id: '3',
    title: 'Anthropic\'s Claude Achieves New Benchmark Records',
    source: 'Ars Technica',
    date: 'Jan 14, 2026',
    category: 'Benchmark',
    url: '#'
  },
  {
    id: '4',
    title: 'Meta Releases Llama 4 Training Details',
    source: 'Wired',
    date: 'Jan 13, 2026',
    category: 'Open Source',
    url: '#'
  },
  {
    id: '5',
    title: 'DeepSeek V3 Challenges Premium Model Pricing',
    source: 'Bloomberg',
    date: 'Jan 12, 2026',
    category: 'Industry',
    url: '#'
  }
];

export function NewsTicker({ news = defaultNews }: NewsTickerProps) {
  // Duplicate news for seamless loop
  const displayNews = news.length > 0 ? news : defaultNews;
  const duplicatedNews = [...displayNews, ...displayNews];

  return (
    <div className="relative h-[400px] overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
      {/* Gradient masks for smooth fade in/out */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex flex-col"
        animate={{
          y: [-20, -1000] // Adjust based on height roughly
        }}
      >
        <div className="animate-news-scroll flex flex-col">
          {duplicatedNews.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Newspaper size={20} />
              </div>

              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-neutral-600">•</span>
                  <span className="text-xs text-neutral-500">{item.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-white truncate transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">{item.source}</p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400">
                →
              </div>
            </a>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes scrollNews {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-news-scroll {
            animation: scrollNews 40s linear infinite;
        }
        .animate-news-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default NewsTicker;
