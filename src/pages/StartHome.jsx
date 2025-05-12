import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'

export default function StartHome() {
  // Set up the ability to move to the quiz page when it's ready
  const navigate = useNavigate()
  // Set up the state to manage all of the possible categories, the user's chosen category, and the user's chosen difficulty
  const [allCategories, setAllCategories] = useState()
  const [chosenCategory, setChosenCategory] = useState('')
  const [chosenDifficulty, setChosenDifficulty] = useState('')

  // Fire this request on every render to get all of the categories from the Open Trivia DB
  useEffect(() => {
    fetch(`https://opentdb.com/api_category.php`)
      .then(res => res.json())
      .then(data => setAllCategories(data.trivia_categories))
      .catch(() => document.getElementById("message").textContent = `An error occured fecthing the category data. Please try again later.`)
  }, [])

  // Two functions to set the chosen category or difficulty based on what the user chooses
  const handleCategoryChange = (event) => {
    setChosenCategory(event.target.value)
  }
  const handleDifficultyChange = (event) => {
    setChosenDifficulty(event.target.value)
  }

  // Function to check if the user is ready to move to the quiz
  // the user is ready if they have properly chosen a category and difficulty
  const startQuiz = () => {
    if (chosenCategory === '' || chosenDifficulty === '') {
      document.getElementById("message").textContent = "Please select a category and/or difficulty before starting."
    } else {
      // This allows me to navigate to the quiz route and pass the category and difficulty as state
      navigate('/quiz', { state: { category: chosenCategory, difficulty: chosenDifficulty } })
    }
  }
  
  return (
    <div>
      {/* Provide a header to welcome the user and let them know what to do */}
      <h1>Welcome to My Trivia Quiz!</h1>
      <h3>To get started, please select a category and difficulty then press Start Quiz.</h3>

      {/* Below code from https://mui.com/material-ui/react-select/ to create a dropdown for the category and difficulty */}
      <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={chosenCategory}
            label="Category"
            onChange={handleCategoryChange}
            style={{textAlign: 'left'}}
          >
            {/* Loop through all of the categories and create a MenuItem */}
            { allCategories ? 
                allCategories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                )) : null
            }
          </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={chosenDifficulty}
            label="Difficulty"
            onChange={handleDifficultyChange}
            style={{textAlign: 'left'}}
          >
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Medium' value='medium'>Medium</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
          </Select>
      </FormControl>
      <br />
      <br />
      {/* Create a button to start the quiz only if the category and difficulty have been chosen */}
      <Button onClick={startQuiz} variant="contained">Start Quiz</Button>
      {/* Space for an error message if something goes wrong when fetching the categories */}
      <p id="message"></p>
    </div>
  )
}