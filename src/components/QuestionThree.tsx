
import React from 'react';
import { Gender, FragranceType } from './FragranceFinderQuiz';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionThreeProps {
  gender: Gender;
  selectedType: FragranceType | null;
  onTypeSelect: (type: FragranceType) => void;
  onConfirm: () => void;
}

const QuestionThree = ({ gender, selectedType, onTypeSelect, onConfirm }: QuestionThreeProps) => {
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 animate-fade-in">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            QUESTION 03
          </p>
          <h2 className="text-2xl font-light text-gray-800">
            Which kind of fragrance do you prefer?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {options.map((option) => (
            <div
              key={option.type}
              onClick={() => onTypeSelect(option.type)}
              className={`cursor-pointer group transition-all duration-300 ${
                selectedType === option.type ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                selectedType === option.type 
                  ? 'border-black shadow-xl' 
                  : 'border-gray-200 group-hover:border-gray-300'
              }`}>
                <div className="aspect-square mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.type}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wide text-gray-800">
                  {option.type.toUpperCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-8">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          {selectedType && (
            <button
              onClick={onConfirm}
              className="bg-black text-white px-12 py-3 rounded-full font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
            >
              CONFIRM
            </button>
          )}
          
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionThree;
