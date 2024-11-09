import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
        

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
      <React.StrictMode>
        <App />      
      </React.StrictMode>
    </PrimeReactProvider>    
)
