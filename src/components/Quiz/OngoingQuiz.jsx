import { useState } from 'react';
import OngoingQuizModal from './OngoingQuizModal';

const OngoingQuiz = ({ setStageOfQuiz, setFinalResult, questions}) => {
  console.log("Da li fail-a ovde?", questions)
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [numberOfRightAnswers, setNumberOfRightAnswers] = useState(0);
  const [next, setNext] = useState(true);
  const [selectAnswer, setSelectAnswer] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNextClick = () => {
    setIndexOfQuestion((indexOfQuestion) => indexOfQuestion + 1);
    setNext(true);
    setSelectAnswer(false);
    setShowCorrectAnswer(false);
    setShowModal(false);
  };

  const handleEndQuizClick = () => {
    setStageOfQuiz('Result Quiz');
    setFinalResult(`Final Score: ${numberOfRightAnswers}/${questions.length}`);
  };

  const handleAnswerClick = (correct) => {
    console.log(correct, 'ovo');
    if (correct) {
      setNumberOfRightAnswers(
        (numberOfRightAnswers) => numberOfRightAnswers + 1
      );
    }
    setShowCorrectAnswer(true);
    setNext(false);
    setSelectAnswer(true);
  };

  const handleExplanationClick = () => {
    setShowModal(true);
  };

  return (
    <div className='flex flex-col items-center p-4 bg-colorS1'>
      <div className='w-full text-center mb-4'>
        <h1 className='text-xl font-bold text-bodyText'>
          Score: {numberOfRightAnswers}/{questions.length}
        </h1>
      </div>

      <div className='w-full text-center mb-4'>
        <h1 className='text-lg text-bodyText'>
          {indexOfQuestion + 1}. {questions[indexOfQuestion].question}
        </h1>
      </div>

      <ul className='w-full max-w-md grid grid-cols-1 gap-4'>
        {questions[indexOfQuestion].answers.map((answer, index) => (
          <button
            key={index}
            disabled={selectAnswer}
            className={`w-full p-2 rounded-md text-bodyText bg-colorS2 cursor-pointer focus:outline-none ${
              showCorrectAnswer && answer.isCorrect ? 'bg-green-500' : ''
            }`}
            onClick={() => handleAnswerClick(answer.isCorrect)}
          >
            {answer.answer}
          </button>
        ))}
      </ul>

      <div className='w-full max-w-md flex flex-col items-center mt-4'>
        {!next && (
          <button
            onClick={handleExplanationClick}
            className='w-full p-2 rounded-md bg-colorS3 hover:bg-colorS4 text-bodyText mb-2'
          >
            Explanation
          </button>
        )}
        {indexOfQuestion < questions.length - 1 && (
          <button
            disabled={next}
            onClick={handleNextClick}
            className='w-full p-2 rounded-md bg-colorS3 hover:bg-colorS4 text-bodyText'
          >
            Next
          </button>
        )}
        {indexOfQuestion === questions.length - 1 && (
          <button
            disabled={next}
            onClick={handleEndQuizClick}
            className='w-full p-2 rounded-md bg-colorS2 hover:bg-colorS3 text-bodyText'
          >
            End Quiz
          </button>
        )}
        {showModal && (
          <OngoingQuizModal
            setShowModal={setShowModal}
            explanation={questions[indexOfQuestion].correctAnswerExplanation}
          />
        )}
      </div>
    </div>
  );
};

export default OngoingQuiz;
