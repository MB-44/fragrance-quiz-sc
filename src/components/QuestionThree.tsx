
import React from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Gender, FragranceType } from './FragranceFinderQuiz';

interface QuestionThreeProps {
  gender: Gender;
  selectedType: FragranceType | null;
  onTypeSelect: (type: FragranceType) => void;
  onConfirm: () => void;
  onBack: () => void;
  onRestart: () => void;
}

const QuestionThree = ({ gender, selectedType, onTypeSelect, onConfirm, onBack, onRestart }: QuestionThreeProps) => {
  const getOptions = (): Array<{ type: FragranceType; image: string }> => {
    if (gender === 'FOR HER') {
      return [
        { 
          type: 'Beachy Fresh', 
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
        },
        { 
          type: 'Floral Sweet', 
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop'
        }
      ];
    } else {
      return [
        { 
          type: 'Beachy Fresh', 
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
        },
        { 
          type: 'Woody & Masculine', 
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop'
        }
      ];
    }
  };

  const options = getOptions();

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
        <div className="max-w-4xl w-full text-center space-y-12">
          <div className="space-y-4">
            <p className="text-sm tracking-wider text-gray-500 uppercase">
              QUESTION 03
            </p>
            <h2 className="text-2xl font-light text-gray-800">
              Which kind of fragrance do you prefer?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto group">
            {options.map((option) => (
              <div
                key={option.type}
                onClick={() => onTypeSelect(option.type)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedType === option.type ? 'scale-105' : 'group-hover:opacity-30 hover:!opacity-100 hover:scale-102'
                }`}
              >
                <div className={`bg-white rounded-lg p-6 border-2 transition-all duration-300 ${
                  selectedType === option.type 
                    ? 'border-black shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-white/90 hover:backdrop-blur-sm'
                }`}>
                  <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.type}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-light tracking-wide text-gray-800">
                    {option.type.toUpperCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {selectedType && (
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

export default QuestionThree;
