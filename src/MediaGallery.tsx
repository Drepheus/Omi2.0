import { useState, useEffect } from 'react';
import { getUserGeneratedMedia, deleteGeneratedMedia, type GeneratedMedia } from './mediaService';
import './MediaGallery.css';

interface MediaGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string | null;
}

export default function MediaGallery({ isOpen, onClose, userId }: MediaGalleryProps) {
  const [media, setMedia] = useState<GeneratedMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<GeneratedMedia | null>(null);

  // Debug logging
  console.log('🎨 MediaGallery rendered - isOpen:', isOpen, 'userId:', userId);

  useEffect(() => {
    if (isOpen && userId) {
      console.log('📥 Loading media for user:', userId);
      loadMedia();
    }
  }, [isOpen, userId]);

  const loadMedia = async () => {
    if (!userId) return;
    
    setIsLoading(true);
    const data = await getUserGeneratedMedia(userId);
    setMedia(data);
    setIsLoading(false);
  };

  const handleDelete = async (mediaId: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const success = await deleteGeneratedMedia(mediaId);
    if (success) {
      setMedia(media.filter(m => m.id !== mediaId));
      if (selectedMedia?.id === mediaId) {
        setSelectedMedia(null);
      }
    }
  };

  const filteredMedia = filter === 'all' 
    ? media 
    : media.filter(m => m.type === filter);

  if (!isOpen) return null;

  return (
    <div className="media-gallery-overlay" onClick={onClose}>
      <div className="media-gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="media-gallery-header">
          <h2>🎨 Your Generated Media</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="media-gallery-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({media.length})
          </button>
          <button
            className={`filter-btn ${filter === 'image' ? 'active' : ''}`}
            onClick={() => setFilter('image')}
          >
            Images ({media.filter(m => m.type === 'image').length})
          </button>
          <button
            className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
            onClick={() => setFilter('video')}
          >
            Videos ({media.filter(m => m.type === 'video').length})
          </button>
        </div>

        <div className="media-gallery-content">
          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading your media...</p>
            </div>
          ) : filteredMedia.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🎨</div>
              <p>No {filter !== 'all' ? filter + 's' : 'media'} yet</p>
              <p className="empty-hint">Generate images and videos to see them here!</p>
            </div>
          ) : (
            <div className="media-grid">
              {filteredMedia.map((item) => (
                <div key={item.id} className="media-card">
                  <div className="media-preview" onClick={() => setSelectedMedia(item)}>
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.prompt} loading="lazy" />
                    ) : (
                      <video src={item.url} />
                    )}
                    <div className="media-overlay">
                      <span className="media-type-badge">
                        {item.type === 'image' ? '🖼️' : '🎬'}
                      </span>
                    </div>
                  </div>
                  <div className="media-card-footer">
                    <p className="media-prompt" title={item.prompt}>
                      {item.prompt}
                    </p>
                    <div className="media-card-actions">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="media-action-btn"
                        title="Open"
                      >
                        🔗
                      </a>
                      <button
                        className="media-action-btn delete-btn"
                        onClick={() => handleDelete(item.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox for selected media */}
        {selectedMedia && (
          <div className="media-lightbox" onClick={() => setSelectedMedia(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedMedia(null)}>✕</button>
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.url} alt={selectedMedia.prompt} />
              ) : (
                <video src={selectedMedia.url} controls autoPlay />
              )}
              <div className="lightbox-info">
                <p className="lightbox-prompt">{selectedMedia.prompt}</p>
                <p className="lightbox-date">
                  {new Date(selectedMedia.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
