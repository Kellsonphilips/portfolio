'use client';

import Button from './Button';
import { useState } from 'react';
import useScrollReveal from './useScrollReveal';
import { useLanguage } from './LanguageContext';

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

  // First paragraph
  const firstParagraph = `Hello! I'm Philip Kelechukwu Orji, an ICT Solution Provider, Software Engineer, and Data Analyst with a passion for transforming complex business challenges into elegant, efficient, and scalable digital solutions. My passion in building, and helping businesses shaped my journey in learning technology, and that has been driven by a relentless curiosity and a commitment to my continuous learning.`;
  // First sentence of second paragraph
  const secondParagraphFirstSentence = `With a solid foundation in software development, I specialize in crafting robust web applications using modern frameworks like React and Next.js, backed by powerful backend technologies.`;

  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={headerRef} className="text-3xl font-bold text-center mb-8 text-text">
          {t('about.title')}
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-justify leading-relaxed text-secondary-color">
          {showAll ? (
            <>
              <p ref={paraRef0} className="mb-4">{t('about.p1')}</p>
              <p ref={paraRef1} className="mb-4">{t('about.p2')}</p>
              <p ref={paraRef2} className="mb-4">{t('about.p3')}</p>
              <p ref={paraRef3} className="mb-4">{t('about.p4')}</p>
              <p ref={paraRef4} className="mb-4">{t('about.p5')}</p>
              <div className="flex justify-center mt-8">
                <div ref={downloadBtnRef} className="inline-block">
                  <Button
                    href="/Philip_Orji_CV.pdf"
                    variant="primary"
                    className="card-3d-glow flex items-center gap-2"
                    showArrow={false}
                  >
                    <span>{t('about.downloadCV')}</span>
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
              <p ref={paraRef0} className="mb-4">{t('about.p1')}</p>
              <p ref={paraRef1} className="mb-4">{t('about.p2short')}...</p>
            </>
          )}
          <div className="flex justify-center mt-4">
            <div ref={readMoreBtnRef} className="inline-block">
              <button
                className="card-3d-glow px-4 py-2 rounded bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? t('about.showLess') : t('about.readMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 