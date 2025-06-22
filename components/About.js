'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';

export default function About() {
  const [showAll, setShowAll] = useState(false);

  // First paragraph
  const firstParagraph = `Hello! I'm Philip Kelechukwu Orji, an ICT Solution Provider, Software Engineer, and Data Analyst with a passion for transforming complex business challenges into elegant, efficient, and scalable digital solutions. My passion in building, and helping businesses shaped my journey in learning technology, and that has been driven by a relentless curiosity and a commitment to my continuous learning.`;
  // First sentence of second paragraph
  const secondParagraphFirstSentence = `With a solid foundation in software development, I specialize in crafting robust web applications using modern frameworks like React and Next.js, backed by powerful backend technologies.`;

  return (
    <section id="about" className="py-16 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-justify leading-relaxed text-secondary-color">
          {showAll ? (
            <>
              <p className="mb-4">
                Hello! I&apos;m Philip Kelechukwu Orji, an ICT Solution Provider,
                Software Engineer, and Data Analyst with a passion for transforming
                complex business challenges into elegant, efficient, and scalable digital
                solutions. My passion in building, and helping businesses shaped my journey in learning technology, and that has been driven by a relentless
                curiosity and a commitment to my continuous learning.
              </p>
              <p className="mb-4">
                With a solid foundation in software development, I specialize in
                crafting robust web applications using modern frameworks like React
                and Next.js, backed by powerful backend technologies. My expertise
                extends to data analysis, where I leverage statistical methods and
                machine learning to extract actionable insights from raw data,
                helping businesses make informed decisions.
              </p>
              <p className="mb-4">
                I thrive in environments where innovation is encouraged and
                problem-solving is at the forefront. Whether it&apos;s architecting
                a new system, optimizing existing processes, or diving deep into
                data to uncover hidden patterns, I am dedicated to delivering
                high-quality results that exceed expectations.
              </p>
              <p className="mb-4">
                My approach is collaborative and user-centric. I believe that the
                best solutions emerge from a deep understanding of user needs and
                close collaboration with stakeholders. I am always eager to take on
                new challenges and contribute to projects that make a real impact.
              </p>
              <p className="mb-4">
                Feel free to explore my projects and skills, and don&apos;t hesitate
                to reach out if you have a project in mind or just want to connect!
              </p>
              <div className="flex justify-center mt-8">
                <Button
                  href="/Philip_Orji_CV.pdf"
                  variant="primary"
                  className="card-3d-glow flex items-center gap-2"
                  showArrow={false}
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-4">{firstParagraph}</p>
              <p className="mb-4">{secondParagraphFirstSentence}...</p>
            </>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="card-3d-glow px-4 py-2 rounded bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less...' : 'Read More...'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 