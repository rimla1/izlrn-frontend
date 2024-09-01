import React from 'react';

const LoadingQuiz = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorS1 text-bodyText p-4">
      <h1 className="text-lg sm:text-2xl font-bold mb-4 text-colorS2 text-center">
        Crafting the quiz for your needs, please wait...
      </h1>
      <div className="flex space-x-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-colorS2 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-colorS3 rounded-full animate-pulse delay-150"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-colorS4 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingQuiz;
