'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import useScrollReveal from '@/components/useScrollReveal';

export default function Skills() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);

  // Create refs for skill category cards with staggered delays
  const card1Ref = useScrollReveal('left', 0.3);
  const card2Ref = useScrollReveal('right', 0.45);
  const card3Ref = useScrollReveal('left', 0.6);
  const card4Ref = useScrollReveal('right', 0.75);

  const skillCategories = [
    ['Frontend Development', ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']],
    ['Backend Development', ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB']],
    ['Network Engineering', ['Firewalls', 'Routing/Switching', 'VPN', 'Security Auditing']],
    ['DevOps & Tools', ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']]
  ];

  const categoryImages = {
    "Frontend Development":
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
    "Backend Development":
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    "Network Engineering":
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    "DevOps & Tools":
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
  };

  return (
    <div className="pt-24 px-8 md:pl-10 lg:pl-15">
      <div className="container mx-auto px-4 py-12 sm:py-8 mt-20">
        <h1 ref={headerRef} className="text-3xl text-center font-bold mb-8">
          {t("skills.title")}
        </h1>
        <p
          ref={paraRef}
          className="text-lg text-center text-text-light dark:text-text-dark mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          {t("skills.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(([category, skillList], idx) => {
            // Assign refs based on index
            const cardRef =
              idx === 0
                ? card1Ref
                : idx === 1
                ? card2Ref
                : idx === 2
                ? card3Ref
                : card4Ref;

            return (
              <div
                key={category}
                ref={cardRef}
                className="card-3d-glow my-3 bg-background-light/10 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-background-light/20 dark:border-background-dark/30"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={categoryImages[category]}
                    alt={t(`skills.category.${category}`)}
                    fill
                    priority={idx < 2}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl text-primary font-semibold mb-4">
                    {t(`skills.category.${category}`)}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                      >
                        {t(`skills.skill.${skill}`)}
                      </span>
                    ))}
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