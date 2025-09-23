import { createRoot } from 'react-dom/client';
import Orb from './Orb';

// Initialize the Orb background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const backgroundContainer = document.getElementById('liquid-chrome-background');
  if (backgroundContainer) {
    const root = createRoot(backgroundContainer);
    root.render(
      <Orb 
        hue={240}
        hoverIntensity={0.3}
        rotateOnHover={true}
        forceHoverState={false}
      />
    );
  }
});