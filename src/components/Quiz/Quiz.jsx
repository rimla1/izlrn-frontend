import React, { useState } from 'react'
import LoadingQuiz from './LoadingQuiz'
import OngoingQuiz from './OngoingQuiz'
import ResultQuiz from './ResultQuiz'
import StartQuiz from './StartQuiz'

const Quiz = () => {
  const [stageOfQuiz, setStageOfQuiz] = useState("Start Quiz")
  const [questions, setQuestions] = useState([])
  const [finalResult, setFinalResult] = useState("")



    return (
        <div className='bg-colorS4 text-bodyText min-h-screen flex justify-center items-center'>
          <div className='bg-colorS1 text-childText p-4'>
            {stageOfQuiz === "Start Quiz" && <StartQuiz setStageOfQuiz={setStageOfQuiz} setQuestions={setQuestions}/>}
            {stageOfQuiz === "Loading Quiz" && <LoadingQuiz />}
            {stageOfQuiz === "Ongoing Quiz" && <OngoingQuiz setStageOfQuiz={setStageOfQuiz} setFinalResult={setFinalResult} questions={questions}/>}
            {stageOfQuiz === "Result Quiz" && <ResultQuiz setStageOfQuiz={setStageOfQuiz} finalResult={finalResult} setQuestions={setQuestions}/>}
          </div>
        </div>
      )
  
}

export default Quiz