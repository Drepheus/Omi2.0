import { useEffect, useState, useRef } from 'react';
import './NewsTicker.css';

interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchAINews();
    // Refresh news every 10 minutes
    const interval = setInterval(fetchAINews, 600000);
    return () => clearInterval(interval);
  }, []);

  const fetchAINews = async () => {
    try {
      // Using HackerNews Algolia API for tech news
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=AI%20artificial%20intelligence&tags=story&hitsPerPage=30`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      
      console.log('HackerNews API response:', data); // Debug log
      
      // Filter out items without URLs and map to our format
      const newsItems: NewsItem[] = data.hits
        .filter((hit: any) => hit.url && hit.title)
        .map((hit: any) => ({
          title: hit.title,
          url: hit.url,
          source: hit.url ? new URL(hit.url).hostname.replace('www.', '') : 'HackerNews',
          publishedAt: hit.created_at,
        }));

      console.log('Mapped news items:', newsItems); // Debug log
      
      if (newsItems.length === 0) {
        throw new Error('No news items found');
      }

      setNews(newsItems);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching AI news:', error);
      // Fallback to actual tech news sites
      setNews([
        { 
          title: 'Latest developments in artificial intelligence and machine learning', 
          url: 'https://techcrunch.com/tag/artificial-intelligence/', 
          source: 'TechCrunch', 
          publishedAt: new Date().toISOString() 
        },
        { 
          title: 'AI breakthroughs reshape technology landscape', 
          url: 'https://www.theverge.com/ai-artificial-intelligence', 
          source: 'The Verge', 
          publishedAt: new Date().toISOString() 
        },
        { 
          title: 'How artificial intelligence is transforming industries', 
          url: 'https://www.wired.com/tag/artificial-intelligence/', 
          source: 'Wired', 
          publishedAt: new Date().toISOString() 
        },
        { 
          title: 'OpenAI continues to push boundaries of AI capabilities', 
          url: 'https://www.engadget.com/tag/ai/', 
          source: 'Engadget', 
          publishedAt: new Date().toISOString() 
        },
      ]);
      setIsLoading(false);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  if (isLoading) {
    return (
      <div className="news-ticker">
        <div className="news-ticker-container">
          <div className="news-ticker-label">
            <span className="ticker-icon">◈</span>
            <span>AI NEWS</span>
          </div>
          <div className="news-ticker-content loading">
            <span>Loading latest AI news...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news-ticker">
      <div className="news-ticker-container">
        <div className="news-ticker-label">
          <span className="ticker-icon">◈</span>
          <span>AI NEWS</span>
        </div>
        <div className="news-ticker-content" ref={tickerRef}>
          <div className="news-ticker-track">
            {/* Duplicate items for seamless loop */}
            {[...news, ...news].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <span className="news-bullet">●</span>
                <span className="news-title">{item.title}</span>
                <span className="news-meta">
                  <span className="news-source">{item.source}</span>
                  <span className="news-time">{formatTimeAgo(item.publishedAt)}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
