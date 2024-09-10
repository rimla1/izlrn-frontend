import LessonInput from './LessonInput';
import { useState } from 'react';
import LoadingQuiz from '../Quiz/LoadingQuiz';
import OngoingQuiz from '../Quiz/OngoingQuiz';
import ResultQuiz from '../Quiz/ResultQuiz';

const Lesson = () => {
  const [stageOfQuiz, setStageOfQuiz] = useState("Start Quiz")
  const [questions, setQuestions] = useState(null)
  const [finalResult, setFinalResult] = useState(null)

  return (
    <div className='bg-colorS4 text-bodyText min-h-screen flex justify-center items-center'>
            {stageOfQuiz === "Start Quiz" && <LessonInput setStageOfQuiz={setStageOfQuiz} setQuestions={setQuestions}/>}
            {stageOfQuiz === "Loading Quiz" && <LoadingQuiz />}
            {stageOfQuiz === "Ongoing Quiz" && <OngoingQuiz setStageOfQuiz={setStageOfQuiz} setFinalResult={setFinalResult} questions={questions}/>}
            {stageOfQuiz === "Result Quiz" && <ResultQuiz setStageOfQuiz={setStageOfQuiz} finalResult={finalResult} setQuestions={setQuestions}/>}
  </div>
  )
};

export default Lesson;
