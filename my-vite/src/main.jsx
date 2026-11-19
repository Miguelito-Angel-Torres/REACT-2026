import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './indexCrud.css'
import AppCrud from './AppCrud.jsx'
import AppRouter from './AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>, 
)
