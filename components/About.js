'use client';

import Button from './Button';
import { useState } from 'react';
import useScrollReveal from './useScrollReveal';
import ErrorBoundary from './ErrorBoundary';

const ABOUT_TITLE = "About Me";
const ABOUT_P1 = "Hello! I'm Philip Kelechukwu Orji, a versatile professional at the intersection of technology and management. As an ICT Solution Provider, Software Engineer, and Project Manager, I bring a unique blend of technical expertise and strategic oversight to every project I undertake. My journey in the tech world is driven by a relentless curiosity and a passion for creating solutions that are not only innovative but also practical and impactful.";
const ABOUT_P2 = "My software engineering background has equipped me with a strong foundation in developing robust and scalable web applications. I am proficient in modern frameworks like React and Next.js, and I am adept at leveraging powerful backend technologies to build seamless digital experiences. I thrive on tackling complex technical challenges and transforming intricate requirements into elegant, functional code.";
const ABOUT_P2SHORT = "My software engineering background has equipped me with a strong foundation in developing robust and scalable web applications using modern frameworks and powerful backend technologies.";
const ABOUT_P3 = "As a Project Manager, I excel in steering projects from ideation to successful deployment. I am a firm believer in agile methodologies and collaborative teamwork. My approach involves meticulous planning, clear communication, and a proactive attitude towards problem-solving. I am committed to ensuring that projects are delivered on time, within budget, and to the highest standards of quality.";
const ABOUT_P4 = "In my role as an ICT Solution Provider, I focus on understanding the unique needs of businesses and crafting tailored technology strategies to help them achieve their goals. Whether it's optimizing existing systems or architecting new ones, my goal is always to deliver solutions that enhance efficiency, drive growth, and provide a competitive edge.";
const ABOUT_P5 = "I am passionate about continuous learning and am always exploring new technologies and methodologies to stay at the forefront of the industry. I invite you to explore my portfolio to see examples of my work. If you have a project in mind or would like to connect, please don't hesitate to reach out!";
const ABOUT_DOWNLOAD_CV = "Download CV";
const ABOUT_READ_MORE = "Read More...";
const ABOUT_SHOW_LESS = "Show Less...";

export default function About() {
  const [showAll, setShowAll] = useState(false);
  const headerRef = useScrollReveal('left', 0);
  const downloadBtnRef = useScrollReveal('right', 0.5);
  const readMoreBtnRef = useScrollReveal('left', 0.7);

  // Precompute refs for paragraphs (max 5)
  const paraRef0 = useScrollReveal('random', 0.1);
  const paraRef1 = useScrollReveal('random', 0.25);
  const paraRef2 = useScrollReveal('random', 0.4);
  const paraRef3 = useScrollReveal('random', 0.55);
  const paraRef4 = useScrollReveal('random', 0.7);

  return (
    <ErrorBoundary>
      <section id="about" className="py-16 bg-background px-8 md:px-10 lg:px-15">
        <div className="container mx-auto px-4">
          <h2
            ref={headerRef}
            className="text-3xl font-bold text-center mb-8 text-text"
          >
            {ABOUT_TITLE}
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-justify leading-relaxed text-secondary-color text-wrap">
            {showAll ? (
              <>
                <p ref={paraRef0} className="mb-4">
                  {ABOUT_P1}
                </p>
                <p ref={paraRef1} className="mb-4">
                  {ABOUT_P2}
                </p>
                <p ref={paraRef2} className="mb-4">
                  {ABOUT_P3}
                </p>
                <p ref={paraRef3} className="mb-4">
                  {ABOUT_P4}
                </p>
                <p ref={paraRef4} className="mb-4">
                  {ABOUT_P5}
                </p>
                <div className="flex justify-center mt-8">
                  <div ref={downloadBtnRef} className="inline-block">
                    <Button
                      href="/Philip_Orji_CVi.pdf"
                      variant="primary"
                      className="card-3d-glow flex items-center gap-2"
                      showArrow={false}
                    >
                      <span>{ABOUT_DOWNLOAD_CV}</span>
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
                </div>
              </>
            ) : (
              <>
                <p ref={paraRef0} className="mb-4">
                  {ABOUT_P1}
                </p>
                <p ref={paraRef1} className="mb-4">
                  {ABOUT_P2SHORT}...
                </p>
              </>
            )}
            <div className="flex justify-center mt-4">
              <div ref={readMoreBtnRef} className="inline-block">
                <button
                  className="card-3d-glow px-4 py-2 rounded bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? ABOUT_SHOW_LESS : ABOUT_READ_MORE}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 