import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ArticlesProvider } from './contexts/ArticlesContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>,
)
