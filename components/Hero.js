'use client';

import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/Images/profile.jpg';
import useScrollReveal from './useScrollReveal';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import { FiArrowRight } from 'react-icons/fi';
import ErrorBoundary from './ErrorBoundary';

export default function Hero() {
  const { t } = useLanguage();
  const greeting = t('hero.greeting');
  const nameText = useMemo(() => " Philip Kelechukwu Orji", []);

  const headerRef = useScrollReveal('left', 0);
  const subtitleRef = useScrollReveal('right', 0.15);
  const paraRef = useScrollReveal('left', 0.3);
  const btn1Ref = useScrollReveal('right', 0.45);
  const btn2Ref = useScrollReveal('left', 0.6);

  // Animation
  const [typedName, setTypedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const startTyping = useCallback(() => {
    let i = 0;
    setTypedName('');
    setIsTypingComplete(false);
    
    const interval = setInterval(() => {
      setTypedName(nameText.slice(0, i + 1));
      i++;
      if (i === nameText.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [nameText]);
  
  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  return (
    <ErrorBoundary>
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 md:pl-10 lg:pl-15 pt-20 md:pt-0">
        <div className="md:w-2/3 px-6 md:text-left">
          <h1 ref={headerRef} className="text-3xl md:text-4xl font-bold mb-4">
            {greeting}
            <span className="text-[#DC8923] relative">
              <span
                aria-hidden="true"
                className="invisible absolute whitespace-pre"
              >
                {nameText}
              </span>
              {typedName}
              {!isTypingComplete && (
                <span className="border-r-2 border-[#DC8923] animate-blink align-middle ml-1">
                  &nbsp;
                </span>
              )}
            </span>
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl mb-4 font-bold text-text-light dark:text-text-dark text-wrap"
          >
            {t("hero.role")}
          </h2>
          <p
            ref={paraRef}
            className="text-md mb-6 text-justify text-text-light dark:text-text-dark text-wrap"
          >
            {t("hero.intro")}
          </p>

          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <div ref={btn1Ref} className="inline-block">
              <Link
                href="/contact"
                className="btn-primary text-nowrap card-3d-glow cursor-pointer transition-all duration-200 hover:scale-105 inline-flex items-center gap-2 no-underline"
                aria-label="Contact Philip Kelechukwu Orji"
              >
                {t("button.getInTouch")}
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div ref={btn2Ref} className="inline-block">
              <Link
                href="/projects"
                className="btn-secondary text-nowrap card-3d-glow cursor-pointer transition-all duration-200 hover:scale-105 inline-flex items-center gap-2 no-underline"
                aria-label="View Philip Kelechukwu Orji's Projects"
              >
                {t("button.viewProjects")}
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 px-0 md:pr-10 lg:pr-15 aspect-square rounded-full animate-scale-in">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="card-3d-glow hero-glow rounded-full object-cover hover-lift"
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 320px"
              priority
              aria-label="Philip Kelechukwu Orji profile photo"
            />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
} 