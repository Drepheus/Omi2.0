import { createRoot } from 'react-dom/client';
import App from './App';
import './landing.css';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<App />);
});