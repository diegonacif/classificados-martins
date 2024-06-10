import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { AuthGoogleProvider } from './contexts/AuthGoogleProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <App />
    </AuthGoogleProvider>
  </React.StrictMode>,
)
