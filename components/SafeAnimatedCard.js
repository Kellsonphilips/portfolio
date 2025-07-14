'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const SafeAnimatedCard = function SafeAnimatedCard({ project, delay = 0 }) {
  const { t } = useLanguage();
  const [currentText, setCurrentText] = useState('');
  const [currentDesc, setCurrentDesc] = useState('');
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [visibleTechs, setVisibleTechs] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  const titleText = t(`project.${project.id}.title`);
  const descText = t(`project.${project.id}.desc`);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Start title animation after delay
          const titleTimer = setTimeout(() => {
            let titleIndex = 0;
            const typeTitle = () => {
              if (titleIndex < titleText.length) {
                setCurrentText(titleText.slice(0, titleIndex + 1));
                titleIndex++;
                setTimeout(typeTitle, 120); // Slower typing speed
              } else {
                // Start description animation after title is complete
                let descIndex = 0;
                const typeDesc = () => {
                  if (descIndex < descText.length) {
                    setCurrentDesc(descText.slice(0, descIndex + 1));
                    descIndex++;
                    setTimeout(typeDesc, 60); // Slower typing speed
                  } else {
                    // Show technologies after description is complete
                    setShowTechnologies(true);
                    project.technologies.forEach((tech, index) => {
                      setTimeout(() => {
                        setVisibleTechs(prev => [...prev, tech]);
                      }, index * 400); // Slower technology appearance
                    });
                  }
                };
                typeDesc();
              }
            };
            typeTitle();
          }, delay);

          return () => {
            clearTimeout(titleTimer);
          };
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of card is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [titleText, descText, delay, project.technologies, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="card card-3d-glow rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 p-8"
      aria-label={`Featured project: ${titleText}`}
    >
      <h3 className="text-xl text-primary font-semibold mb-2 text-primary-color min-h-[1.5rem]">
        {hasAnimated ? currentText : ''}
        {currentText.length < titleText.length && hasAnimated && currentText.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
      </h3>
      
      <p className="mb-4 text-secondary-color min-h-[4rem] leading-relaxed">
        {hasAnimated ? currentDesc : ''}
        {currentDesc.length < descText.length && hasAnimated && currentDesc.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[2rem]">
        {showTechnologies && hasAnimated ? (
          visibleTechs.map((tech) => (
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
              className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full opacity-0"
            >
              {tech}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(SafeAnimatedCard); 