import React from 'react';

const OngoingQuizModal = ({ setShowModal, explanation }) => {
  const handleCloseModalClick = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      setShowModal(false);
    }
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-colorS1 p-6 rounded-lg w-full max-w-md max-h-1/4 mx-4 relative">
        <button
          onClick={handleCloseModalClick}
          className="absolute top-2 right-2 text-bodyText bg-colorS2 hover:bg-colorS1 p-1 rounded-full focus:outline-none"
        >
          X
        </button>
        <h1 className="text-bodyText text-lg md:text-xl lg:text-2xl mb-4">
          {explanation}
        </h1>
      </div>
    </div>
  );
};

export default OngoingQuizModal;
