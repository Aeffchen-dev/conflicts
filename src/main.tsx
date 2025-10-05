import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loading - current URL:', window.location.href);
console.log('Import meta env:', import.meta.env);
console.log('Base URL:', import.meta.env.BASE_URL);

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)

// Fade out and remove splash once React has rendered
const splash = document.getElementById('splash')
if (splash) {
  // Wait for one animation frame to ensure React content is painted
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      splash.classList.add('fade-out')
      setTimeout(() => splash.remove(), 200)
    })
  })
}

