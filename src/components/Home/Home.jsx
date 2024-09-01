import React from 'react';
import { useHome } from '../../hooks/Home/useHome';
import { languages } from '../../utils/languages/languages';

const Home = () => {
  const [handleStartQuizClick, language] = useHome()
  
  return (
    <div className="flex-grow bg-colorS4 text-bodyText min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">{languages[language].home.description}</h1>
      <button onClick={handleStartQuizClick} className="mt-4 px-6 py-2 bg-colorS2 text-bodyText rounded-md hover:bg-colorS1">
        {languages[language].home.btnStartQuiz}
      </button>
    </div>
  );
}

export default Home;
