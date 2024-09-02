import React from 'react'

const ResultQuiz = ({setStageOfQuiz ,finalResult, setQuestions}) => {
  const handleTryAgainClick = () => {
    setQuestions([])
    setStageOfQuiz("Start Quiz")
  }

  return (
    <div>
        <h1>{finalResult}</h1>
        <button onClick={handleTryAgainClick}>Try Again</button>
    </div>
  )
}

export default ResultQuiz