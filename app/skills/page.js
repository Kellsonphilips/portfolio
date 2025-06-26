'use client';

import Image from 'next/image';
import useScrollReveal from '@/components/useScrollReveal';
import { useRef, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageContext';

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  "Backend Development": ["Node.js", "Python", "Java", "SQL", "MongoDB"],
  "Data Analytics": ["Python", "R", "SQL", "Excel", "Tableau", "Power BI"],
  "DevOps & Tools": ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
};

const categoryImages = {
  "Frontend Development": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000",
  "Backend Development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  "Data Analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  "DevOps & Tools": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
};

export default function Skills() {
  const headerRef = useScrollReveal('left', 0);
  const skillCategories = Object.entries(skills);
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
  }, [skillCategories.length]);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 ref={headerRef} className="text-3xl text-text text-center font-bold mb-8">
          {t('skills.title')}
        </h1>
        <p className="text-lg text-center text-secondary-color mb-8">
          {t('skills.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(([category, skillList], idx) => (
            <div
              key={category}
              ref={el => cardRefs.current[idx] = el}
              className="card-3d-glow dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={categoryImages[category]}
                  alt={category}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl text-primary font-semibold mb-4">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 