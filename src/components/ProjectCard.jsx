import React from "react";

function ProjectCard({ image, name, left, link }) {
    return (
      <div className={`flex ${left ? 'flex-row' : 'flex-row-reverse'} gap-28`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Project" className="w-52" />
        </a>
        <h1 className="w-14">{name}</h1>
      </div>
    );
  }
  
  export default ProjectCard;
  