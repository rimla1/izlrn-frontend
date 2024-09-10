import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {


  const {isDarkModeOn} = useSelector((store) => store.theme)

  return (
    <div className={isDarkModeOn ? 'dark' : 'light'}>
      <div className="flex justify-center items-center min-h-screen bg-colorS4 p-4">
        <div className="max-w-lg w-full bg-colorS3 text-colorS4 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-colorS1 text-lg sm:text-xl mb-6">
            {'An unexpected error occurred. Please try again.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-colorS2 hover:bg-colorS1 text-colorS4 font-semibold py-2 px-6 rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;

