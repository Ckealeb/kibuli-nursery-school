
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Node v11 compatibility - avoid nullish coalescing
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
