'use client';

import Image from 'next/image';

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  "Backend Development": ["Node.js", "Python", "Java", "SQL", "MongoDB"],
  "Data Analytics": ["Python", "R", "SQL", "Excel", "Tableau", "Power BI"],
  "DevOps & Tools": ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
};

const categoryImages = {
  "Frontend Development": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000",
  "Backend Development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  "Data Analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  "DevOps & Tools": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
};

export default function Skills() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl text-text-light dark:text-text-dark font-bold mb-8">
          Technical Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={categoryImages[category]}
                  alt={category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl text-primary font-semibold mb-4">{category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 