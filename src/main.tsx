import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './app/context/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
)
