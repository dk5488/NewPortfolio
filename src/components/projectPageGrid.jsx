import React from "react";
import { useState,useEffect,useRef } from "react";

function ProjectPageGrid({ imager, name, link, desc }) {

  const [isAnimVisible,setAnimVisible]=useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animRef.current) {
          setAnimVisible(true);
          console.log(isAnimVisible);
          
        }
        else{
          setAnimVisible(false);
        }

      },
      { threshold: 0.5 }
    );

    if (animRef.current) {
      observer.observe(animRef.current);
    }
  }, []);
  
  const animRef=useRef(null);

  return (

    <div className={`flex flex-col w-80 h-96 hover:border-4 hover:border-black overflow-hidden transition   ease-in-out duration-150 ${isAnimVisible?'opacity-1':'opacity-0'}`} ref={animRef}>
      <a href={link} className="flex-shrink-0 h-2/3">
        <img
          src={imager}
          alt="Project"
          className="object-cover w-full h-full"
          style={{ objectFit: 'cover' }}
        />
      </a>
      <div className="flex flex-col p-4 h-1/3">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectPageGrid;
