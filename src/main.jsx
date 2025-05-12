import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// I kept getting the 429 response from the Open Trivia DB when I had StrictMode (probably because it was firing the request / re-rendering twice?)
createRoot(document.getElementById('root')).render(
  <App />
)
