'use client';

import Button from './Button';
import { projects } from '../app/projects/projects';

export default function FeaturedProjects() {
  // Combine all projects from different categories
  const allProjects = [
    ...projects.ict,
    ...projects.webApps,
    ...projects.dataAnalytics
  ];

  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, 3).map((project) => (
            <div key={project.id} className="card card-3d-glow p-6 rounded-lg shadow-lg flex flex-col items-center text-center animate-slide-in">
              <h3 className="text-xl text-primary font-semibold mb-2 text-primary-color">{project.title}</h3>
              <p className="mb-4 text-secondary-color">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="card-tag text-blue-500 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/projects" variant="primary" showArrow>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
} 