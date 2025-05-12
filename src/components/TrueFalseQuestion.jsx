import { useState, useEffect } from 'react'

import { Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Button } from '@mui/material'

export default function TrueFalseQuestion ({quizQuestion, updateCorrect, updateAnswered}) {
  // Set up the state to manage all of the variables
  const [correctAnswer, setCorrectAnswer] = useState() // The 1 correct answer
  const [wrongAnswer, setWrongAnswer] = useState() // The 1 incorrect answer
  const [selectedAnswer, setSelectedAnswer] = useState('') // The user's selected answer
  const [helperText, setHelperText] = useState('') // Helper text to let the user know if they got it right or wrong or if they need to select an answer
  const [error, setError] = useState(false) // Error flag to be able to turn the text red if the user got it wrong or needs to answer
  const [isAnswered, setIsAnswered] = useState(false) // Flag to know if the user has answered or not to be able to disable the radio group

  // Fire this request on every render to extract the answers
  useEffect(() => {
    // Save the incorrect answer to the state - this is a true/false so I know there's only one and can index in at [0]
    setWrongAnswer(decodeHTML(quizQuestion.incorrect_answers[0]))

    // Save the correct answer to the state
    setCorrectAnswer(decodeHTML(quizQuestion.correct_answer))
  }, [])

  // Function I found online to be able to decode the HTML that is sent back as the question and answers into readable text
  const decodeHTML = (str) => {
    var textarea = document.createElement('textarea')
    textarea.innerHTML = str
    return textarea.value
  }

  // Function to update the selected answer and clear the helper text when the user selects the radio button
  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value)
    setHelperText('')
  }

  // Function to check the answer when the user clicks the button and perform the appropriate operations
  const checkAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      setHelperText('You got it correct!') // Display the correct text
      setError(false) // Set error to false
      setIsAnswered(true) // Set isAnswered to true
      updateCorrect() // Update the number of correct answers --> func passed from the parent through props
      updateAnswered() // Update the total number of questions answered --> func passed from the parent through props
    } else if (selectedAnswer === wrongAnswer) {
      setHelperText(`Sorry, wrong answer! Correct answer is: ${correctAnswer}`) // Display the incorrect text with the right answer
      setError(true) // Set error to true to make the text red
      setIsAnswered(true) // Set is answered to true
      updateAnswered() // Update the total number of questions answered --> func passed from the parent through props
    } else {
      setHelperText('Please select an option.') // Display text to have the user choose an option
      setError(true) // Set error to true to make the text red
    }
  }

  return(
    <div>
      {/* Display the question */}
      <p>{decodeHTML(quizQuestion.question)}</p>
      {/* Below code from https://mui.com/material-ui/react-radio-button/ to create a multiple choice radio group */}
      <FormControl sx={{ m: 3, marginTop: 0 }} error={error} variant="standard">
        <FormLabel id="mc-question-label"></FormLabel>
        <RadioGroup
          aria-labelledby="mc-question-label"
          name="mc-question"
          value={selectedAnswer}
          onChange={handleRadioChange}
          disabled={isAnswered}
        >
          {/* Set up the two options of True and False */}
          <FormControlLabel key='True' value='True' control={<Radio />} label='True' disabled={isAnswered}/>
          <FormControlLabel key='False' value='False' control={<Radio />} label='False' disabled={isAnswered}/>
        </RadioGroup>
        {/* Display the helper text */}
        <FormHelperText>{helperText}</FormHelperText>
        {/* Create a button to check the answer */}
        { !isAnswered ? <Button onClick={checkAnswer} variant="contained">Check Answer</Button> : null}
      </FormControl>
    </div>
  )
}