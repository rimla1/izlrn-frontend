import React, { useRef} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const LessonInput = ({setStageOfQuiz, setQuestions}) => {
  const lesson = useRef(null);
  const language = useSelector((store) => store.language)

  const handleCreateQuizFromLessonSubmit = async (e) => {
    e.preventDefault();
    setStageOfQuiz("Loading Quiz")
    await createQuiz()
    setStageOfQuiz("Ongoing Quiz")
  };

  const createQuiz = async () => {
    try {
      const response = await axios.post("http://3.67.135.183:3000/lesson", {
        lesson: lesson.current.value,
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
    <div className='text-bodyText flex w-1/2 justify-center items-center p-4'>
      <form onSubmit={handleCreateQuizFromLessonSubmit} className='w-full max-w-lg bg-colorS2 shadow-lg rounded-lg p-6'>
        <div className='mb-4'>
          <label
            htmlFor='lessonContent'
            className='block text-lg font-semibold mb-2'
          >
            Lesson Content
          </label>
          <textarea
            ref={lesson}
            id='lessonContent'
            required
            className='w-full h-64 bg-colorS1 md:h-96 p-3 border border-colorS4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-colorS3 overflow-y-scroll'
            placeholder='Type your lesson content here...'
            rows='10'
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-colorS3 text-bodyText px-6 py-2 rounded-md text-lg font-semibold hover:bg-colorS4 focus:outline-none focus:ring-2 focus:ring-colorS4 transition-colors duration-200'
          >
            Create Quiz from Lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default LessonInput
