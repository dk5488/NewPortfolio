import React, { useState, useEffect,useRef } from 'react';
import ReactStars from 'react-stars';

const AnimatedStars = ({ skillLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
        }
        else{
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    observer.observe(ref.current);

    
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCurrentLevel(0); // Reset the animation when not visible
      return; 
    }
    const animationDuration = 500; // Total animation duration in milliseconds
    const frameRate = 70;          // Frames per second

    const totalFrames = animationDuration / 1000 * frameRate;
    const frameDuration = 1000 / frameRate;

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      setCurrentLevel(skillLevel * progress);

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        setCurrentLevel(skillLevel);
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, [skillLevel,isVisible]);

  return (
    <div ref={ref}>
      <ReactStars
      count={5}
      color1="gray"
      color2="red"
      edit={false}
      value={currentLevel}
      isHalf={true} 
    />
    </div>
    
  );
};

export default AnimatedStars;
