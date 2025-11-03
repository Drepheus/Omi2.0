import { useState, useEffect, useRef } from 'react';
import './VideoPreviewTooltip.css';

interface VideoPreviewTooltipProps {
  isVisible: boolean;
}

const VideoPreviewTooltip: React.FC<VideoPreviewTooltipProps> = ({ isVisible }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample videos from the static/videos folder
  const sampleVideos = [
    '/videos/vidpreview.mp4',
    '/videos/AI%20Intro.mp4', // URL encoded space
    '/videos/matrixcode.mp4',
  ];

  useEffect(() => {
    if (!isVisible) {
      // Pause video when not visible
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    // Play the current video when visible
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }

    // Change video every 4 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % sampleVideos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, sampleVideos.length]);

  // When video index changes, load and play the new video
  useEffect(() => {
    if (videoRef.current && isVisible) {
      const video = videoRef.current;
      
      // Add event listener to play once loaded
      const handleCanPlay = () => {
        video.play().catch(err => {
          console.log('Video autoplay failed:', err);
        });
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.load();
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [currentVideoIndex, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="video-preview-tooltip">
      <div className="preview-content">
        <div className="preview-text">Generate AI videos from text prompts</div>
        <div className="preview-video-container">
          <video
            ref={videoRef}
            className="preview-video"
            muted
            loop={false}
            playsInline
            autoPlay
            preload="auto"
            key={currentVideoIndex}
          >
            <source src={sampleVideos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-gradient"></div>
        </div>
        <div className="preview-caption">
          Create stunning video content with AI
        </div>
      </div>
      <div className="tooltip-arrow"></div>
    </div>
  );
};

export default VideoPreviewTooltip;
