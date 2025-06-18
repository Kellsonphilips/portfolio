'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from './projects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ict');

  const tabs = [
    { id: 'ict', label: 'ICT Solutions' },
    { id: 'webApps', label: 'Web Applications' },
    { id: 'dataAnalytics', label: 'Data Analytics' }
  ];

  return (
    <div className="min-h-screen from-blue-50 to-indigo-100 py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            My Projects
          </h1>
          <p className="text-lg text-text-light dark:text-text-dark">
            Explore my work across different domains and technologies.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex rounded-lg bg-white/30 p-1 backdrop-blur-sm">
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
          {projects[activeTab].map((project) => (
            <div
              key={project.id}
              className="dark:bg-gray-800 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300"
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
                  {project.title}
                </h3>
                <p className="text-text-light dark:text-text-dark light mb-4">
                  {project.description}
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
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gray-500"
                  >
                    <Github className="w-5 h-5" />
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