
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center animate-fade-in">
      <div className="text-center space-y-8">
        <div className="mb-4">
          <img 
            src="/logo.png" 
            alt="Brand Logo" 
            className="h-24 w-auto mx-auto"
          />
        </div>
        <h1 className="text-3xl font-light tracking-wide text-gray-800 mb-8">
          FRAGRANCE FINDER
        </h1>
        <div className="text-lg text-gray-600 animate-pulse">
          Your experience is loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
