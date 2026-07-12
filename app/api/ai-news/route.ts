import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface HNStory {
  objectID: string;
  title: string;
  url: string;
  author: string;
  created_at: string;
  created_at_i: number;
  points: number;
}

interface HFModel {
  id: string;
  author?: string;
  lastModified: string;
  likes: number;
  downloads: number;
  tags?: string[];
}

export async function GET() {
  try {
    // 1. Fetch live AI news / updates from Hacker News API
    const hnPromise = fetch(
      'https://hn.algolia.com/api/v1/search_by_date?tags=story&query=AI&hitsPerPage=20',
      { next: { revalidate: 300 } } // Cache for 5 mins
    )
      .then((res) => res.json())
      .then((data) => (data.hits || []) as HNStory[])
      .catch(() => [] as HNStory[]);

    // 2. Fetch trending models / open source from Hugging Face API
    const hfPromise = fetch(
      'https://huggingface.co/api/models?sort=trending&limit=15',
      { next: { revalidate: 300 } }
    )
      .then((res) => res.json())
      .then((data) => (Array.isArray(data) ? data : []) as HFModel[])
      .catch(() => [] as HFModel[]);

    const [hnHits, hfModels] = await Promise.all([hnPromise, hfPromise]);

    const items: any[] = [];

    // Process Hugging Face models -> AI Models & AI OpenSource
    hfModels.forEach((model) => {
      const isOS = model.tags?.includes('license:apache-2.0') || model.tags?.includes('license:mit') || !model.id.includes('meta-') && !model.id.includes('google/');
      const timeDiff = Date.now() - new Date(model.lastModified).getTime();
      const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
      const timeStr = hoursAgo <= 0 ? 'Just now' : hoursAgo === 1 ? '1h ago' : `${hoursAgo}h ago`;

      items.push({
        id: `hf-${model.id}`,
        title: model.id.split('/').pop()?.replace(/-/g, ' ') || model.id,
        category: isOS ? 'AI OpenSource' : 'AI Models',
        description: `New trending model by ${model.author || 'community'}. Active tags: ${model.tags?.slice(0, 4).join(', ') || 'N/A'}. Likes: ${model.likes}, Downloads: ${model.downloads}.`,
        timeAgo: timeStr,
        source: 'Hugging Face',
        tags: model.tags?.slice(0, 3) || ['Model', 'AI'],
        link: `https://huggingface.co/${model.id}`,
        isHot: model.likes > 50 || model.downloads > 500,
      });
    });

    // Process Hacker News stories -> AI News, Models, or OpenSource
    hnHits.forEach((story) => {
      if (!story.title || !story.url) return;

      const titleLower = story.title.toLowerCase();
      let category: 'AI News' | 'AI Models' | 'AI OpenSource' = 'AI News';
      
      if (titleLower.includes('model') || titleLower.includes('gpt-') || titleLower.includes('llama') || titleLower.includes('claude')) {
        category = 'AI Models';
      } else if (titleLower.includes('github') || titleLower.includes('open source') || titleLower.includes('opensource') || titleLower.includes('library')) {
        category = 'AI OpenSource';
      }

      const timeDiff = Date.now() - (story.created_at_i * 1000);
      const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
      const timeStr = hoursAgo <= 0 ? 'Just now' : hoursAgo === 1 ? '1h ago' : `${hoursAgo}h ago`;

      items.push({
        id: `hn-${story.objectID}`,
        title: story.title,
        category,
        description: `Community discussion on Hacker News. Author: ${story.author}. Points: ${story.points || 0}.`,
        timeAgo: timeStr,
        source: 'Hacker News',
        tags: [category.replace('AI ', ''), 'HN'],
        link: story.url,
        isHot: (story.points || 0) > 30,
      });
    });

    // Sort combined feed items (favor hot releases, then newer items)
    const sortedItems = items.sort((a, b) => {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      return 0;
    }).slice(0, 15);

    return NextResponse.json({ news: sortedItems });
  } catch (error: any) {
    console.error('Error fetching AI news:', error);
    return NextResponse.json({ news: [] });
  }
}
