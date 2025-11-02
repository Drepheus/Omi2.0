import { useState, useEffect } from 'react';
import './ImagePreviewTooltip.css';

interface ImagePreviewTooltipProps {
  isVisible: boolean;
}

const ImagePreviewTooltip: React.FC<ImagePreviewTooltipProps> = ({ isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - replace these URLs with actual sample images
  const sampleImages = [
    'https://images.unsplash.com/photo-1686904423955-b3c03e894949?w=400&h=300&fit=crop', // AI generated art
    'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?w=400&h=300&fit=crop', // Futuristic scene
    'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=400&h=300&fit=crop', // Abstract AI
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop', // Digital art
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop', // AI landscape
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop', // Tech art
    'https://images.unsplash.com/photo-1686904423955-b3c03e894949?w=400&h=300&fit=crop', // Sci-fi scene
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sampleImages.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, [isVisible, sampleImages.length]);

  if (!isVisible) return null;

  return (
    <div className="image-preview-tooltip">
      <div className="preview-content">
        <div className="preview-text">Real-time AI image generation</div>
        <div className="preview-carousel">
          {sampleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Sample ${index + 1}`}
              className={`preview-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="preview-caption">
          Type a prompt to generate stunning images
        </div>
      </div>
      <div className="tooltip-arrow"></div>
    </div>
  );
};

export default ImagePreviewTooltip;
