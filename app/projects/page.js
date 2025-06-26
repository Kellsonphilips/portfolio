'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from './projects';
import useScrollReveal from '@/components/useScrollReveal';
import { useLanguage } from '@/components/LanguageContext';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ict');
  const { t } = useLanguage();

  const tabs = [
    { id: 'ict', label: t('projects.tabs.ict') },
    { id: 'webApps', label: t('projects.tabs.webApps') },
    { id: 'dataAnalytics', label: t('projects.tabs.dataAnalytics') }
  ];

  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const cardRefs = useRef([]);

  const currentProjects = projects[activeTab];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      ref.style.opacity = 0;
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      ref.style.transform = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
      ref.style.transition =
        `opacity 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.2}s, ` +
        `transform 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.2}s`;
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
  }, [currentProjects.length, activeTab]);

  return (
    <div className="min-h-screen from-blue-50 to-indigo-100 py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 ref={headerRef} className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            {t('projects.title')}
          </h1>
          <p ref={paraRef} className="text-lg text-text-light dark:text-text-dark">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="card-3d-glow inline-flex rounded-lg bg-white/30 p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-900 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, idx) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[idx] = el}
              className="card card-3d-glow dark:bg-gray-800 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-primary font-semibold mb-2">
                  {t(`project.${project.id}.title`)}
                </h3>
                <p className="text-text-light dark:text-text-dark light mb-4">
                  {t(`project.${project.id}.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                  >
                    {t('projects.viewProject')}
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gray-500"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 