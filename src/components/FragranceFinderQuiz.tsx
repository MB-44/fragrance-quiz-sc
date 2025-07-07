
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';

export type Gender = 'FOR HER' | 'FOR HIM';
export type FragranceMoment = 'For a special outing' | 'For self-care and relaxation' | 'For self-care and refreshment' | 'For everyday freshness' | 'For quick touch-ups on the go';
export type FragranceType = 'Beachy Fresh' | 'Floral Sweet' | 'Woody & Masculine';

interface QuizState {
  gender: Gender | null;
  moment: FragranceMoment | null;
  type: FragranceType | null;
}

const FragranceFinderQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quizState, setQuizState] = useState<QuizState>({
    gender: null,
    moment: null,
    type: null
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleGenderSelect = (gender: Gender) => {
    setQuizState(prev => ({ ...prev, gender }));
  };

  const handleMomentSelect = (moment: FragranceMoment) => {
    setQuizState(prev => ({ ...prev, moment }));
  };

  const handleTypeSelect = (type: FragranceType) => {
    setQuizState(prev => ({ ...prev, type }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const goBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const restart = () => {
    setCurrentStep(1);
    setQuizState({
      gender: null,
      moment: null,
      type: null
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      {currentStep === 1 && (
        <QuestionOne 
          selectedGender={quizState.gender}
          onGenderSelect={handleGenderSelect}
          onConfirm={nextStep}
          onRestart={restart}
        />
      )}
      {currentStep === 2 && (
        <QuestionTwo 
          gender={quizState.gender!}
          selectedMoment={quizState.moment}
          onMomentSelect={handleMomentSelect}
          onConfirm={nextStep}
          onBack={goBack}
          onRestart={restart}
        />
      )}
      {currentStep === 3 && (
        <QuestionThree 
          gender={quizState.gender!}
          selectedType={quizState.type}
          onTypeSelect={handleTypeSelect}
          onConfirm={() => console.log('Quiz completed:', quizState)}
          onBack={goBack}
          onRestart={restart}
        />
      )}
    </div>
  );
};

export default FragranceFinderQuiz;
