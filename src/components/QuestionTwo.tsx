
import React from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Gender, FragranceMoment } from './FragranceFinderQuiz';

interface QuestionTwoProps {
  gender: Gender;
  selectedMoment: FragranceMoment | null;
  onMomentSelect: (moment: FragranceMoment) => void;
  onConfirm: () => void;
  onBack: () => void;
  onRestart: () => void;
}

const QuestionTwo = ({ gender, selectedMoment, onMomentSelect, onConfirm, onBack, onRestart }: QuestionTwoProps) => {
  const getOptions = (): FragranceMoment[] => {
    if (gender === 'FOR HER') {
      return [
        'For a special outing',
        'For self-care and relaxation',
        'For everyday freshness',
        'For quick touch-ups on the go'
      ];
    } else {
      return [
        'For a special outing',
        'For self-care and refreshment',
        'For everyday freshness',
        'For quick touch-ups on the go'
      ];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8 animate-fade-in">
      {/* Navigation */}
      <div className="flex items-center space-x-6 mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-wide">Back</span>
        </button>
        <button
          onClick={onRestart}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <RotateCcw size={20} />
          <span className="text-sm uppercase tracking-wide">Restart</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center space-y-12">
          <div className="space-y-4">
            <p className="text-sm tracking-wider text-gray-500 uppercase">
              QUESTION 02
            </p>
            <h2 className="text-2xl font-light text-gray-800">
              Choose your ideal fragrance moment:
            </h2>
          </div>

          <div className="space-y-4 group">
            {getOptions().map((option) => (
              <button
                key={option}
                onClick={() => onMomentSelect(option)}
                className={`w-full max-w-lg mx-auto block py-5 px-8 rounded-lg border-2 transition-all duration-300 ${
                  selectedMoment === option
                    ? 'bg-white text-black border-black shadow-lg'
                    : 'bg-white text-black border-gray-300 hover:border-gray-400 group-hover:opacity-30 hover:!opacity-100 hover:bg-white/90 hover:backdrop-blur-sm'
                }`}
              >
                <span className="text-base font-light tracking-wide">{option}</span>
              </button>
            ))}
          </div>

          {selectedMoment && (
            <button
              onClick={onConfirm}
              className="bg-black text-white px-12 py-3 rounded-lg font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
            >
              CONFIRM
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;
