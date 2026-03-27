'use client';

import Button from './Button';
import { projects } from '../app/projects/projects';
import useScrollReveal from './useScrollReveal';
import SafeAnimatedCard from './SafeAnimatedCard';
import ErrorBoundary from './ErrorBoundary';

const FEATURED_TITLE = "Featured Projects";
const FEATURED_SUBTITLE = "A selection of standout projects showcasing my skills and experience across different domains.";
const FEATURED_VIEW_ALL = "View All Projects";

export default function FeaturedProjects() {
  // Combine all projects from different categories
  const allProjects = [
    ...projects.ict,
    ...projects.webApps,
  ];

  // Projects with id 4, 7, and 9
  const featuredProjects = allProjects.filter(p => [1, 4, 6].includes(p.id));

  const headerRef = useScrollReveal('left', 0);
  const subtitleRef = useScrollReveal('right', 0.2);
  const buttonRef = useScrollReveal('right', 0.8);

  return (
    <ErrorBoundary>
      <section className="py-16 bg-background px-8 md:pl-10 lg:pl-15">
        <div className="container mx-auto">
          <h2
            ref={headerRef}
            className="text-3xl font-bold text-center mb-8 text-text"
          >
            {FEATURED_TITLE}
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-center text-secondary-color mb-8"
          >
            {FEATURED_SUBTITLE}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <SafeAnimatedCard
                key={project.id}
                project={project}
                delay={idx * 800}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <div ref={buttonRef} className="inline-block relative z-10">
              <Button
                href="/projects"
                variant="primary"
                className="card-3d-glow relative z-10"
                showArrow
                aria-label="View all projects by Philip Kelechukwu Orji"
              >
                {FEATURED_VIEW_ALL}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 