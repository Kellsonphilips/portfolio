'use client';

import Button from './Button';
import { projects } from '../app/projects/projects';
import useScrollReveal from './useScrollReveal';
import { useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function FeaturedProjects() {
  // Combine all projects from different categories
  const allProjects = [
    ...projects.ict,
    ...projects.webApps,
    ...projects.dataAnalytics
  ];

  // Projects with id 4, 7, and 9
  const featuredProjects = allProjects.filter(p => [4, 7, 9].includes(p.id));

  const headerRef = useScrollReveal('left', 0);
  const buttonRef = useScrollReveal('right', 0.5);

  const cardRefs = useRef([]);

  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      ref.style.opacity = 0;
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      ref.style.transform = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
      ref.style.transition =
        `opacity 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.1}s, ` +
        `transform 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.1}s`;
      const handleReveal = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.style.opacity = 1;
            ref.style.transform = 'translateX(0)';
          }
        });
      };
      const observer = new window.IntersectionObserver(handleReveal, {
        threshold: 0.2,
      });
      observer.observe(ref);
      return () => observer.disconnect();
    });
  }, [featuredProjects.length]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 ref={headerRef} className="text-3xl font-bold text-center mb-8 text-text">
          {t('featured.title')}
        </h2>
        <p className="text-lg text-center text-secondary-color mb-8">
          {t('featured.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[idx] = el}
              className="card card-3d-glow p-6 rounded-lg shadow-lg flex flex-col items-center text-center animate-slide-in"
              aria-label={`Featured project: ${project.title}`}
            >
              <h3 className="text-xl text-primary font-semibold mb-2 text-primary-color">
                {t(`project.${project.id}.title`)}
              </h3>
              <p className="mb-4 text-secondary-color">{t(`project.${project.id}.desc`)}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div ref={buttonRef} className="inline-block">
            <Button
              href="/projects"
              variant="primary"
              className="card-3d-glow"
              showArrow
              aria-label="View all projects by Philip Kelechukwu Orji"
            >
              {t('featured.viewAll')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 