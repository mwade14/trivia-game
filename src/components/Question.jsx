import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import TrueFalseQuestion from './TrueFalseQuestion'

// Create a MultipleChoiceQuestion or TrueFalseQuestion depending on the question type
// pass all of the relevant props to these question types
const Question = ({quizQuestion, updateCorrect, updateAnswered}) => {
  return(
    <div>
      {quizQuestion.type === "multiple"
        ? (<MultipleChoiceQuestion quizQuestion={quizQuestion} updateCorrect={updateCorrect} updateAnswered={updateAnswered} />)
        : (<TrueFalseQuestion quizQuestion={quizQuestion} updateCorrect={updateCorrect} updateAnswered={updateAnswered} />)
      }
    </div>
  )
}

export default Question