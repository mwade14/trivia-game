import { useLocation, Link } from 'react-router-dom'

import { Button } from '@mui/material'

export default function EndSummary() {
  // Get the state (the number of correct answers) from the quiz page
  const location = useLocation()
  const { correct } = location.state || {}

  return (
      <div>
        {/* Congratulate the user on finishing the quiz then display how many they got correct with a percentage */}
        <h3>Congratulations! You finished the quiz!</h3>
        <p>You got {correct}/10 questions right which is a {(correct/10) * 100}%</p>
        {/* Provide another message depending on how many answers they got correct */}
        {correct >= 9
            ? <p>Way to go superstar!</p>
            : correct >= 6
                ? <p>Not too shabby.</p>
                : <p>Maybe you could try harder next time...</p>}
        {/* Wrap this retry button in a link so that it directs the user back to the homepage to try another quiz */}
        <Link to='/'>
          <Button variant="contained">Play Another Quiz</Button>
        </Link>
      </div>
  )
}