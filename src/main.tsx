import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/base.css';
import './styles/site.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/responsive.css';
import './styles/motion.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing React root element.');

if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
