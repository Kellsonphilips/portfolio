'use client';

import Button from './Button';
import { projects } from '../app/projects/projects';
import useScrollReveal from './useScrollReveal';
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
  const subtitleRef = useScrollReveal('right', 0.2);
  const buttonRef = useScrollReveal('right', 0.8);

  // Create refs for each project card with staggered delays
  const card1Ref = useScrollReveal('left', 0.3);
  const card2Ref = useScrollReveal('right', 0.4);
  const card3Ref = useScrollReveal('left', 0.5);

  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background px-8 md:pl-10 lg:pl-15">
      <div className="container mx-auto">
        <h2
          ref={headerRef}
          className="text-3xl font-bold text-center mb-8 text-text"
        >
          {t("featured.title")}
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg text-center text-secondary-color mb-8"
        >
          {t("featured.subtitle")}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => {
            // Assign refs based on index
            const cardRef =
              idx === 0 ? card1Ref : idx === 1 ? card2Ref : card3Ref;

            return (
              <div
                key={project.id}
                ref={cardRef}
                className="card card-3d-glow rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                aria-label={`Featured project: ${t(
                  `project.${project.id}.title`
                )}`}
              >
                <h3 className="text-xl text-primary font-semibold mb-2 text-primary-color">
                  {t(`project.${project.id}.title`)}
                </h3>
                <p className="mb-4 text-secondary-color">
                  {t(`project.${project.id}.desc`)}
                </p>
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
            );
          })}
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
              {t("featured.viewAll")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 