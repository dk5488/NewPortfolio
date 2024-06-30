import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';

const AnimatedStars = ({ skillLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const animationSteps = 20; 
    const stepDuration = 20; 

    
    const stepIncrement = skillLevel / animationSteps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCurrentLevel(currentStep * stepIncrement);

      if (currentStep >= animationSteps) {
        clearInterval(interval);
        setCurrentLevel(skillLevel); 
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [skillLevel]);

  return (
    <ReactStars
      count={5}
      color1="gray"
      color2="red"
      edit={false}
      value={currentLevel}
    />
  );
};

export default AnimatedStars;
