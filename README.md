[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/U_8smgip)
# CSE264 Project 8: Building a React Trivia Application
## Due: Monday, March 31, 2025 at 11:59 PM
## Add your full name and Lehigh email address to this README!

## Melissa Wade (mcw224@lehigh.edu)


Build an interactive Trivia Game using [React](https://react.dev), the [Material UI Component Library](https://mui.com), and the [Open Trivia Database](https://opentdb.com). This project will integrate core concepts within the React library to create an interactive and challenging trivia game.

### Open Trivia Database
The Open Trivia Database is an open sourced database with an API layer on top.  Since this is an open API, the API may respond with a 429 error indicatoring 'Too Many Requests'.  This will reset in a moment or two.

All information regarding the API, including endpoint and response overview can be found on the [API documentation page](https://opentdb.com/api_config.php).

### React Application
The React Application should fulfull the following User Requirements:

* Basic App Structure
    * Create a home screen with options to select a category and difficulty level (easy, medium, hard).
      * Category API Endpoint: https://opentdb.com/api_category.php
    * Add a "Start Quiz"/"Get Questions" button to initiate the quiz after selecting options.
* Quiz Functionality
    * Fetch questions based on the selected category and difficulty level using the Trivia API.
      * Questions Endpoint Example: https://opentdb.com/api.php?amount=10&category=9&difficulty=medium
    * Display each question with four multiple-choice answers or True/False selection. 
    * Ensure that the answers are randomized (Do not always have the first selection as the correct answer)
    * Users should be able to select one answer per question.
    * Questions should either be displayed on the page OR Include a "Next" button to move to the next question after answering.
    * Once answered, indicate whether the questionw as answered correctly or not
* Scoring System
    * Keep track of correct answers to calculate the user's score.
    * At the end of the quiz, display the total score and the percentage of correct answers.
* Result Summary Screen
    * Provide a summary page at the end of the quiz showing:
        * Total score out of total questions.
        * Percentage of correct answers.
    * Offer a "Retry Quiz"/"Restart Quiz" button.
    * Users should be able to restart another quiz without reloading the page
* Additional Requirements
    * Additional styling or animations for better user experience.


### Install and Run
This project uses React + Vite template which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

You must have node.js running on your machine. Once you have cloned this project you can run `npm install` to install all the packages for this project. Then running `npm run dev` will run the dev version of this code, which will run this project on localhost:5173 (or at the location specified in the console).

### Grading
* **App Functionality** -- **10 points** -- App contains a home screen, required selectors and buttons
* **Quiz Functionality** -- **25 points** -- Correct implementation of question fetching, question and answer display, answer selection, and answer feedback
* **Scoring System** -- **15 points** -- Accurate tracking and display of score.
* **Results Summary Screen** -- **15 points** -- Final summary results are calculated and displayed when the quiz is complete.
* **Code Quality** -- **15 points** -- Clean, modular, and well-commented code with meaningful variable names.
* **Overall Functionality** -- **20 points** -- The Trivia game works as intended without any major bugs.

* If code doesn't run/compile you can get no more than a 60. But please write comments and a README to explain what you were trying to do. 
