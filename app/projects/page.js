'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from './projects';
import useScrollReveal from '@/components/useScrollReveal';
import { useLanguage } from '@/components/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const tabsRef = useScrollReveal('left', 0.3);

  // Create refs for project cards with staggered delays
  const card1Ref = useScrollReveal('left', 0.45);
  const card2Ref = useScrollReveal('right', 0.6);
  const card3Ref = useScrollReveal('left', 0.75);
  const card4Ref = useScrollReveal('right', 0.9);
  const card5Ref = useScrollReveal('left', 1.05);
  const card6Ref = useScrollReveal('right', 1.2);

  const [activeTab, setActiveTab] = useState('webApps');

  const tabs = [
    { id: 'webApps', label: t('projects.tabs.webApps') },
    { id: 'ict', label: t('projects.tabs.ict') },
    { id: 'dataAnalytics', label: t('projects.tabs.dataAnalytics') }
  ];

  const currentProjects = projects[activeTab];

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12 sm:py-8 mt-20">
        <h1
          ref={headerRef}
          className="text-3xl text-primary text-center font-bold mb-8"
        >
          {t("projects.title")}
        </h1>
        <p
          ref={paraRef}
          className="text-lg text-center text-text-secondary-light dark:text-text-secondary-dark mb-8 text-wrap"
        >
          {t("projects.subtitle")}
        </p>

        <div ref={tabsRef} className="flex justify-center mb-8">
          <div className="inline-flex flex-row sm:flex-row bg-background-light/20 dark:bg-background-light/60 justify-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-xl backdrop-blur-sm border border-background-light/30 dark:border-background-dark/30 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-background-light/60 dark:bg-background-dark/60 text-text-light dark:text-text-dark hover:bg-background-light/80 dark:hover:bg-background-dark/80 border border-primary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-6">
          {currentProjects.map((project, idx) => {
            // Assign refs based on index with more cards support
            const cardRef = 
              idx === 0 ? card1Ref : 
              idx === 1 ? card2Ref : 
              idx === 2 ? card3Ref : 
              idx === 3 ? card4Ref : 
              idx === 4 ? card5Ref : 
              card6Ref;
            
            return (
              <div
                key={project.id}
                ref={cardRef}
                className="card-3d-glow bg-background-light/10 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-background-light/20 dark:border-background-dark/30"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
                    {t(`project.${project.id}.title`)}
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    {t(`project.${project.id}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-sm border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-text-light px-3 py-1 rounded-lg hover:bg-secondary hover:text-text-dark transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      View Live
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary dark:hover:text-text-dark transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        {t("projectCard.github")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 