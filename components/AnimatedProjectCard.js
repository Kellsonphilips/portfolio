'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import useTypingAnimation from './useTypingAnimation';

export default function AnimatedProjectCard({ project, isVisible, delay = 0 }) {
  const { t } = useLanguage();
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);

  const titleText = t(`project.${project.id}.title`);
  const descText = t(`project.${project.id}.desc`);

  const titleAnimation = useTypingAnimation(titleText, 80, isVisible);
  const descAnimation = useTypingAnimation(descText, 30, titleAnimation.hasTyped);

  // Show technologies sequentially after description typing is complete
  useEffect(() => {
    if (descAnimation.hasTyped && !showTechnologies) {
      setShowTechnologies(true);
      
      // Show technologies one by one with delay
      project.technologies.forEach((tech, index) => {
        setTimeout(() => {
          setVisibleTechnologies(prev => [...prev, tech]);
        }, index * 200); // 200ms delay between each technology
      });
    }
  }, [descAnimation.hasTyped, showTechnologies, project.technologies]);

  // Reset animations when component unmounts or project changes
  useEffect(() => {
    return () => {
      titleAnimation.reset();
      descAnimation.reset();
      setShowTechnologies(false);
      setVisibleTechnologies([]);
    };
  }, [project.id, titleAnimation, descAnimation]);

  return (
    <div
      className="card card-3d-glow rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 p-8"
      aria-label={`Featured project: ${titleText}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl text-primary font-semibold mb-2 text-primary-color min-h-[1.5rem]">
        {titleAnimation.displayedText || titleText}
        {titleAnimation.isTyping && (
          <span className="animate-pulse">|</span>
        )}
      </h3>
      
      <p className="mb-4 text-secondary-color min-h-[4rem] leading-relaxed">
        {descAnimation.displayedText || descText}
        {descAnimation.isTyping && (
          <span className="animate-pulse">|</span>
        )}
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[2rem]">
        {visibleTechnologies.length > 0 ? (
          visibleTechnologies.map((tech) => (
            <span
              key={tech}
              className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full animate-fadeIn"
            >
              {tech}
            </span>
          ))
        ) : (
          project.technologies.map((tech) => (
            <span
              key={tech}
              className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))
        )}
      </div>
    </div>
  );
} 