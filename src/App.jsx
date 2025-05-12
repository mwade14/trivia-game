import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import StartHome from './pages/StartHome'
import Quiz from './pages/Quiz'
import EndSummary from './pages/EndSummary'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set up the 3 Routes for the 3 different pages of my trivia game */}
        <Route path='/' element={<StartHome />} /> {/* The root is the starting home page */}
        <Route path='/quiz' element={<Quiz />} /> {/* This is for the quiz page */}
        <Route path='/end-summary' element={<EndSummary />} /> {/* This is for the ending summary page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
