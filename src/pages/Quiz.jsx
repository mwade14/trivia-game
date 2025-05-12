import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Button } from '@mui/material'
import Question from '../components/Question'

export default function Quiz() {
  // Set up the ability to move to the end summary page when the quiz is over
  const navigate = useNavigate()
  // Get the state (the category and difficulty) from the starting page
  const location = useLocation()
  const { category, difficulty } = location.state || {}

  // Set up the state to manage all of quiz questions, the user's number of correct answers, and the user's number of total answers
  const [quizQuestions, setQuizQuestions] = useState()
  const [numberCorrect, setNumberCorrect] = useState(0)
  const [numberAnswered, setNumberAnswered] = useState(0)

  // Fire this request on every render to get the 10 quiz questions from the Open Trivia DB
  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
      .then(res => {
        // Check if the Open Trivia DB responds with 429 to alert the user about the issue
        if(res.status === 429){
          document.getElementById("message").textContent = `There have been too many requests to the Open Trivia DB. Please try again in a moment or two.`
        } else {
          document.getElementById("message").textContent = ``
        }
        return res.json()
      })
      .then(data => {
        // Only pull out the data.results and set the questions if data was returned
        if(data){
          setQuizQuestions(data.results)
        }
      })
      .catch(() => {
        document.getElementById("message").textContent = `An error occured fecthing the quiz questions. Please try again later.`
      })
  }, [])

  // Function to check if the user is ready to submit the entire quiz and move to the end summary page
  // the user is ready if they have properly answered all 10 questions
  const submitQuiz = () => {
    if(numberAnswered !== 10){
      document.getElementById("message").textContent = `Please answer all 10 questions before submitting.`
    } else {
      // This allows me to navigate to the end summary route and pass the number of correct answers as state
      navigate('/end-summary', { state: { correct: numberCorrect } })
    }
  }

  // Two functions to update the number of correct answers and the number of total answers
  const updateCorrect = () => {
    setNumberCorrect(numberCorrect + 1)
  }
  const updateAnswered = () => {
    setNumberAnswered(numberAnswered + 1)
  }

  return (
    <div>
      {/* Provide a header to let the user know their score progress */}
      {quizQuestions ? <h3>Here are your 10 quiz questions. So far, you have gotten {numberCorrect}/{numberAnswered} correct.</h3> : null}
      {/* Loop through all of the questions and create a Question with the relevant props */}
      {quizQuestions ? quizQuestions.map((quizQ) => (
          <Question key={quizQ.question} quizQuestion={quizQ} updateCorrect={updateCorrect} updateAnswered={updateAnswered} />
        )) : null}
      <br />
      <br />
      {/* Create a button to submit the quiz only if all 10 questions have been answered */}
      {quizQuestions ? <Button onClick={submitQuiz} variant="contained">Submit Entire Quiz</Button> : null}
      {/* Space for an error message if something goes wrong */}
      <p id="message"></p>
    </div>
  )
}