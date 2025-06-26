'use client';

import Image from 'next/image';
import useScrollReveal from '@/components/useScrollReveal';
import { useRef, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageContext';

const capabilities = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using modern technologies and best practices.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000'
  },
  {
    title: 'Data Analysis',
    description: 'Data-driven insights and visualization using various analytical tools.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  },
  {
    title: 'ICT Solutions',
    description: 'Comprehensive ICT solutions for businesses and organizations.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000'
  },
  {
    title: 'Project Management',
    description: 'Agile project management and team collaboration.',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000'
  }
];

export default function Capabilities() {
  const headerRef = useScrollReveal('left', 0);
  const cardRefs = useRef([]);
  const { t } = useLanguage();

  // Precompute for cards
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
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 ref={headerRef} className="text-3xl text-text text-center font-bold mb-8">
          {t('capabilities.title')}
        </h1>
        <p className="text-lg text-center text-secondary-color mb-8">
          {t('capabilities.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, idx) => (
            <div
              key={capability.title}
              ref={el => cardRefs.current[idx] = el}
              className="card-3d-glow dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h2 className="text-xl text-primary font-semibold mb-2">
                  {capability.title}
                </h2>
                <p>{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 