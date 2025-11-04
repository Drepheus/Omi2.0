import { useEffect, useState, useRef } from 'react';
import './NewsTicker.css';

interface ActivityItem {
  username: string;
  action: string;
  timestamp: string;
}

export default function NewsTicker() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    generateActivities();
    // Generate new activities every 30 seconds
    const interval = setInterval(generateActivities, 30000);
    return () => clearInterval(interval);
  }, []);

  const generateActivities = () => {
    const usernames = [
      'Alex414', 'SamantaGlory', 'Pirateboy', 'tomandjarry', 'DataNinja', 'CodeWizard',
      'AIEnthusiast', 'TechSavvy', 'PixelMaster', 'DevGuru', 'CloudRider', 'ByteHunter',
      'CyberPhoenix', 'QuantumLeap', 'NeonDreamer', 'SyntaxKing', 'LogicLord', 'BinaryBoss',
      'ScriptMage', 'DigitalDuke', 'AlgoAce', 'MatrixMind', 'VirtualVoyager', 'CryptoChamp',
      'WebWarrior', 'CodeCrusader', 'TechTitan', 'PixelPirate', 'DataDragon', 'CloudChaser',
      'ByteBender', 'CyberSamurai', 'QuantumQuest', 'NeonNinja', 'SyntaxSage', 'LogicLegend',
      'BinaryBard', 'ScriptSensei', 'DigitalDynamo', 'AlgoArchitect', 'MatrixMaverick'
    ];

    const actions = [
      'just trained a Custom Omi',
      'just chatted with Omi Chat',
      'just generated a new image in the Media Studio',
      'just Upgraded to the Pro Plan!',
      'just created a new AI Workflow',
      'just generated a stunning video',
      'just completed a deep web search',
      'just customized their AI assistant',
      'just exported media from the gallery',
      'just discovered a new feature',
      'just integrated an API',
      'just automated a complex task',
      'just analyzed data with AI',
      'just created research content',
      'just generated code snippets',
      'just trained a specialized model',
      'just built a business workflow',
      'just designed a creative project',
      'just optimized their AI settings',
      'just shared their Custom Omi',
      'just completed an AI task',
      'just explored the Command Hub',
      'just unlocked advanced features',
      'just personalized their workspace',
      'just generated multiple images',
      'just created AI-powered content',
      'just enhanced their workflow',
      'just automated data processing',
      'just built an intelligent system',
      'just mastered a new AI tool'
    ];

    // Generate 40 random activities
    const generatedActivities: ActivityItem[] = [];
    for (let i = 0; i < 40; i++) {
      const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomMinutesAgo = Math.floor(Math.random() * 60) + 1;
      
      generatedActivities.push({
        username: randomUsername,
        action: randomAction,
        timestamp: new Date(Date.now() - randomMinutesAgo * 60000).toISOString()
      });
    }

    setActivities(generatedActivities);
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  if (activities.length === 0) {
    return (
      <div className="news-ticker">
        <div className="news-ticker-container">
          <div className="news-ticker-label">
            <span className="ticker-icon">◈</span>
            <span>LIVE ACTIVITY</span>
          </div>
          <div className="news-ticker-content loading">
            <span>Loading user activity...</span>
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
          <span>LIVE ACTIVITY</span>
        </div>
        <div className="news-ticker-content" ref={tickerRef}>
          <div className="news-ticker-track">
            {/* Duplicate items for seamless loop */}
            {[...activities, ...activities].map((item, index) => (
              <div key={index} className="news-item">
                <span className="news-bullet">●</span>
                <span className="activity-username">{item.username}</span>
                <span className="activity-action">{item.action}</span>
                <span className="news-meta">
                  <span className="news-time">{formatTimeAgo(item.timestamp)}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
