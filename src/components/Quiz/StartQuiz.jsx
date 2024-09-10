import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { languages } from '../../utils/languages/languages';
import { rating } from '../../utils/constants/ratings';

const StartQuiz = ({ setStageOfQuiz, setQuestions }) => {
  const language = useSelector((store) => store.language);

  const rating = useRef(null);
  const lesson = useRef(null);
  const subject = useRef(null);
  const age = useRef(null);

  const handleStartQuizSubmit = async (e) => {
    e.preventDefault();
    setStageOfQuiz('Loading Quiz');
    await getQuiz();
    setStageOfQuiz('Ongoing Quiz');
  };

  const getQuiz = async () => {
    try {
      const response = await axios.post("http://3.67.135.183:3000/", {
        rating: rating.current.value,
        lesson: lesson.current.value,
        subject: subject.current.value,
        age: age.current.value,
        language: language
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      const quiz = response.data;
      setQuestions(quiz)
    } catch (error) {
      console.error('Error fetching quiz:', error);
    }
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleStartQuizSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-4'>
          <input
            ref={rating}
            required
            placeholder={languages[language].quiz.ratingPlaceholder}
            className='bg-colorS2 text-bodyText p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-colorS3'
          />
          <input
            ref={lesson}
            required
            placeholder={languages[language].quiz.lessonPlaceholder}
            className='bg-colorS2 text-bodyText p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-colorS3'
          />
          <input
            ref={subject}
            required
            placeholder={languages[language].quiz.subjectPlaceholder}
            className='bg-colorS2 text-bodyText p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-colorS3'
          />
          <input
            ref={age}
            required
            placeholder={languages[language].quiz.agePlaceholder}
            className='bg-colorS2 text-bodyText p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-colorS3'
          />
        </div>
        <div className='flex justify-center mb-4'>
          <button
            type='submit'
            className='bg-colorS2 text-bodyText p-2 rounded-md '
          >
            {languages[language].quiz.startQuiz}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartQuiz;
