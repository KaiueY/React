import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //'!' 是非空断言 
  <StrictMode>
    <App />
  </StrictMode>,
)
