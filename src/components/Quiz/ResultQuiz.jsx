import React from 'react'

const ResultQuiz = ({ setStageOfQuiz, finalResult, setQuestions }) => {
  const handleTryAgainClick = () => {
    setQuestions([])
    setStageOfQuiz("Start Quiz")
  }

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-bodyText">{finalResult}</h1>
      <button 
        onClick={handleTryAgainClick} 
        className="px-6 py-2 bg-colorS3 text-bodyText rounded-md hover:bg-colorS4"
      >
        Try Again
      </button>
    </div>
  )
}

export default ResultQuiz
