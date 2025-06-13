'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const tabs = ['ICT', 'Web Apps', 'Data Analytics'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ICT');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      
      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will be rendered here based on activeTab */}
        <ProjectCard
          title="Sample Project"
          description="A brief description of the project"
          tags={['React', 'Node.js', 'MongoDB']}
          githubUrl="https://github.com"
          liveUrl="https://example.com"
        />
      </div>
    </div>
  );
} 