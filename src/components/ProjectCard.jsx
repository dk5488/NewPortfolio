import React from "react";
import { motion } from "framer-motion"

function ProjectCard({ image, name, left, link }) {
  return (
    <motion.div
      className={`flex ${left ? 'flex-row' : 'flex-row-reverse'} gap-28`}
      // Add motion animation on hover and while in view
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: left ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.img
          src={image}
          alt="Project"
          className="w-52"
          // Add subtle hover effects for the image
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </a>
      <motion.h1
        className="w-14"
        // Animating the name of the project for a subtle fade-in effect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {name}
      </motion.h1>
    </motion.div>
  );
}

export default ProjectCard;
