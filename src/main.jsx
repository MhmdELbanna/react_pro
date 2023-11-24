import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CounContext from './component/context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounContext>
      <App />
    </CounContext>
  </React.StrictMode>,
)
