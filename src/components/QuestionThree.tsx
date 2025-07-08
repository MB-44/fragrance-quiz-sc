import React, { useState } from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Gender, FragranceType } from './FragranceFinderQuiz';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface QuestionThreeProps {
  gender: Gender;
  selectedType: FragranceType | null;
  onTypeSelect: (type: FragranceType) => void;
  onConfirm: () => void;
  onBack: () => void;
  onRestart: () => void;
}

const QuestionThree = ({ gender, selectedType, onTypeSelect, onConfirm, onBack, onRestart }: QuestionThreeProps) => {
  const [showResult, setShowResult] = useState(false);

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

  const getResultImage = () => {
    const options = getOptions();
    const selectedOption = options.find(option => option.type === selectedType);
    return selectedOption?.image || options[0].image;
  };

  const getCollectionUrl = () => {
    if (gender === 'FOR HIM') {
      if (selectedType === 'Beachy Fresh') {
        return 'https://lk.spaceylon.com/collections/beachy-fresh-him';
      } else if (selectedType === 'Woody & Masculine') {
        return 'https://lk.spaceylon.com/collections/woody-masculine';
      }
    }
    // Return a default URL or handle other cases as needed
    return '#';
  };

  const handleConfirm = () => {
    setShowResult(true);
    onConfirm();
  };

  const handleDiscoverCollection = () => {
    const url = getCollectionUrl();
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  const options = getOptions();

  if (showResult && selectedType) {
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

        {/* Result Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-gray-800">
                Perfect Match Found!
              </h2>
              <p className="text-lg text-gray-600">
                Based on your preferences: {selectedType}
              </p>
            </div>

            {/* Result Image */}
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={getResultImage()} 
                  alt={selectedType}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Discover Collection Button */}
            <button 
              onClick={handleDiscoverCollection}
              className="bg-black text-white px-12 py-4 rounded-md font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              DISCOVER COLLECTION
            </button>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full text-center space-y-12">
          <div className="space-y-4">
            <p className="text-sm tracking-wider text-gray-500 uppercase">
              QUESTION 03
            </p>
            <h2 className="text-2xl font-light text-gray-800">
              Which kind of fragrance do you prefer?
            </h2>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {options.map((option) => (
                  <CarouselItem key={option.type}>
                    <div
                      onClick={() => onTypeSelect(option.type)}
                      className={`cursor-pointer transition-all duration-500 transform ${
                        selectedType === option.type 
                          ? 'scale-105 brightness-110' 
                          : selectedType 
                            ? 'opacity-40 scale-95' 
                            : 'hover:scale-102'
                      }`}
                    >
                      <div className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 shadow-lg ${
                        selectedType === option.type 
                          ? 'border-black shadow-2xl' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="aspect-square mb-6 rounded-xl overflow-hidden">
                          <img 
                            src={option.image} 
                            alt={option.type}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-medium tracking-wide text-gray-800 uppercase">
                          {option.type}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex justify-center gap-8 max-w-4xl mx-auto group">
            {options.map((option) => (
              <div
                key={option.type}
                onClick={() => onTypeSelect(option.type)}
                className={`cursor-pointer transition-all duration-500 transform ${
                  selectedType === option.type 
                    ? 'scale-105 brightness-110' 
                    : selectedType 
                      ? 'opacity-40 scale-95' 
                      : 'group-hover:opacity-30 hover:!opacity-100 hover:scale-102'
                }`}
              >
                <div className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 shadow-lg ${
                  selectedType === option.type 
                    ? 'border-black shadow-2xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="aspect-square mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-gray-800 uppercase">
                    {option.type}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {selectedType && (
            <button
              onClick={handleConfirm}
              className="bg-black text-white px-12 py-3 rounded-md font-light tracking-wider hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
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
