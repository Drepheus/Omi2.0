import { createRoot } from 'react-dom/client';
import LiquidChrome from './LiquidChrome';

// Initialize the LiquidChrome background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const backgroundContainer = document.getElementById('liquid-chrome-background');
  if (backgroundContainer) {
    const root = createRoot(backgroundContainer);
    root.render(
      <LiquidChrome 
        baseColor={[0.2, 0.2, 0.3]}
        speed={0.15}
        amplitude={0.4}
        frequencyX={2.5}
        frequencyY={2.5}
        interactive={true}
      />
    );
  }
});