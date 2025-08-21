import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'
import { CandidateProvider } from './store/CandidateContext'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CandidateProvider>
      <App />
    </CandidateProvider>
  </React.StrictMode>
)