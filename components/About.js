'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-secondary-color">
          <p className="mb-4">
            Hello! I&apos;m Philip Kelechukwu Orji, an ICT Solution Provider, Software Engineer, and Data Analyst with a passion for transforming complex challenges into elegant, efficient, and scalable digital solutions. My journey in technology has been driven by a relentless curiosity and a commitment to continuous learning.
          </p>
          <p className="mb-4">
            With a solid foundation in software development, I specialize in crafting robust web applications using modern frameworks like React and Next.js, backed by powerful backend technologies. My expertise extends to data analysis, where I leverage statistical methods and machine learning to extract actionable insights from raw data, helping businesses make informed decisions.
          </p>
          <p className="mb-4">
            I thrive in environments where innovation is encouraged and problem-solving is at the forefront. Whether it&apos;s architecting a new system, optimizing existing processes, or diving deep into data to uncover hidden patterns, I am dedicated to delivering high-quality results that exceed expectations.
          </p>
          <p className="mb-4">
            My approach is collaborative and user-centric. I believe that the best solutions emerge from a deep understanding of user needs and close collaboration with stakeholders. I am always eager to take on new challenges and contribute to projects that make a real impact.
          </p>
          <p>
            Feel free to explore my projects and skills, and don&apos;t hesitate to reach out if you have a project in mind or just want to connect!
          </p>
        </div>
      </div>
    </section>
  );
} 