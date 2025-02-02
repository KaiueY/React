import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Parent from './components/child_parents/patent.tsx'
import './components/Message/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
