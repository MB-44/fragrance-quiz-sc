
import React from 'react';
import { Gender } from './FragranceFinderQuiz';

interface QuestionOneProps {
  selectedGender: Gender | null;
  onGenderSelect: (gender: Gender) => void;
  onConfirm: () => void;
}

const QuestionOne = ({ selectedGender, onGenderSelect, onConfirm }: QuestionOneProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 animate-fade-in">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            QUESTION 01
          </p>
          <h2 className="text-2xl font-light text-gray-800">
            Who is this fragrance for?
          </h2>
        </div>

        <div className="space-y-6">
          <button
            onClick={() => onGenderSelect('FOR HIM')}
            className={`w-full max-w-md mx-auto block py-6 px-8 rounded-full border-2 transition-all duration-300 ${
              selectedGender === 'FOR HIM'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-lg font-light tracking-wide">FOR HIM</span>
          </button>

          <button
            onClick={() => onGenderSelect('FOR HER')}
            className={`w-full max-w-md mx-auto block py-6 px-8 rounded-full border-2 transition-all duration-300 ${
              selectedGender === 'FOR HER'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-lg font-light tracking-wide">FOR HER</span>
          </button>

          <button
            onClick={() => onGenderSelect('FOR ALL')}
            className={`w-full max-w-md mx-auto block py-6 px-8 rounded-full border-2 transition-all duration-300 ${
              selectedGender === 'FOR ALL'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-lg font-light tracking-wide">FOR ALL</span>
          </button>
        </div>

        {selectedGender && (
          <button
            onClick={onConfirm}
            className="bg-black text-white px-12 py-3 rounded-full font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
          >
            CONFIRM
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionOne;
