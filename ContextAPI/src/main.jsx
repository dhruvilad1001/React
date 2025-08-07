import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import Storry from './context/Storry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Storry>
    <UserContext>
    <App />
    </UserContext>
    </Storry>
  </StrictMode>,
)
