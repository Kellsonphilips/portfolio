'use client';

import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "../app/projects/projects";
import { useLanguage } from "./LanguageContext";
import ErrorBoundary from './ErrorBoundary';

export default function ProjectsPageClient() {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("ict");

  const tabs = [
    { key: "ict", label: t("projects.tabs.ict") },
    { key: "webApps", label: t("projects.tabs.webApps") },
    { key: "dataAnalytics", label: t("projects.tabs.dataAnalytics") },
  ];

  const currentProjects = projects[selectedTab];

  return (
    <ErrorBoundary>
      <section className="py-16 bg-background px-8 md:pl-10 lg:pl-15">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-text">
            {t("projects.title")}
          </h1>
          <p className="text-lg text-center text-secondary-color mb-8">
            {t("projects.subtitle")}
          </p>
          <div className="flex justify-center mb-8 gap-4 flex-wrap" role="tablist" aria-label="Project categories">
            {tabs.map((tab, idx) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={selectedTab === tab.key}
                tabIndex={selectedTab === tab.key ? 0 : -1}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  selectedTab === tab.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary/20"
                }`}
                onClick={() => setSelectedTab(tab.key)}
                onKeyDown={e => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedTab(tabs[(idx + 1) % tabs.length].key);
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedTab(tabs[(idx - 1 + tabs.length) % tabs.length].key);
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-6">
            {currentProjects.map((project, idx) => (
              <div
                key={project.id}
                className="card-3d-glow my-3 bg-background-light/10 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-background-light/20 dark:border-background-dark/30 flex flex-col relative"
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
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl text-primary font-semibold mb-2">
                    {t(`project.${project.id}.title`)}
                  </h3>
                  <p className="mb-4 text-secondary-color flex-1">
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
                  <div className="flex gap-2 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary whitespace-nowrap"
                        aria-label={t("projectCard.liveDemo")}
                      >
                        View Live
                      </a>
                    )}
                  </div>
                  {project.github && (
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary dark:hover:text-text-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={t("projectCard.github")}
                        style={{ display: 'inline-flex', alignItems: 'center', fontSize: '1.5rem', padding: 0 }}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 