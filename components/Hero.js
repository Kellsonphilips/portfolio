'use client';

import Image from 'next/image';
import profilePic from '@/public/Images/profile.jpg';
import Button from './Button';
import useScrollReveal from './useScrollReveal';
import { useEffect, useState } from 'react';

export default function Hero() {
  const fullText = "Hi, I'm ";
  const nameText = "Philip Kelechukwu Orji";

  const headerRef = useScrollReveal('left', 0);
  const subtitleRef = useScrollReveal('right', 0.15);
  const paraRef = useScrollReveal('left', 0.3);
  const btn1Ref = useScrollReveal('right', 0.45);
  const btn2Ref = useScrollReveal('left', 0.6);

  // Animation
  const [typedName, setTypedName] = useState('');
  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;
    const startTyping = () => {
      setTypedName('');
      i = 0;
      interval = setInterval(() => {
        setTypedName(nameText.slice(0, i + 1));
        i++;
        if (i === nameText.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            startTyping();
          }, 4000);
        }
      }, 150);
    };
    startTyping();
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [nameText]);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-6 pl-0 md:pl-10 lg:pl-20 pt-20 md:pt-0">
      <div className="md:w-2/3 px-6 md:text-left">
        <h1 ref={headerRef} className="text-3xl md:text-4xl font-bold mb-4">
          {fullText}
          <span className="text-[#DC8923]">
            {typedName}
            <span className="border-r-2 border-[#DC8923] animate-blink align-middle ml-1">
              &nbsp;
            </span>
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl mb-4 font-bold text-text-light dark:text-text-dark"
        >
          ICT Solution Provider, Software Engineer & Data Analyst
        </p>
        <p
          ref={paraRef}
          className="text-md mb-6 text-justify text-text-light dark:text-text-dark"
        >
          Welcome to my professional space, where I showcase my projects,
          skills, and capabilities. I am a passionate ICT Solution Provider,
          Software Engineer, and Data Analyst, I specialize in building robust
          web applications and extracting actionable insights from data. I help
          businesses transform their ideas into digital reality. Explore my
          portfolio to see how I blend technology, creativity, and strategy to
          drive real impact and also check <a href="/faq">FAQ</a> for any
          question you might have or simply &ldquo;Get in touch 👇.&ldquo;
          Appreciate you checking me out!
        </p>
        <div className="flex flex-row gap-4 md:justify-start">
          <div ref={btn1Ref} className="inline-block">
            <Button
              href="/contact"
              variant="primary"
              className="card-3d-glow text-nowrap"
              showArrow
            >
              Get in Touch
            </Button>
          </div>
          <div ref={btn2Ref} className="inline-block">
            <Button
              href="/projects"
              variant="secondary"
              className="card-3d-glow text-nowrap"
              showArrow
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square rounded-full animate-scale-in">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="card-3d-glow hero-glow rounded-full object-cover hover-lift"
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 320px"
            priority
          />
        </div>
      </div>
    </section>
  );
} 