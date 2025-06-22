'use client';

import Image from 'next/image';
import profilePic from '@/public/Images/profile.jpg';
import Button from './Button';

export default function Hero() {
  const fullText = "Hi, I'm Philip Kelechukwu Orji";
  const nameText = "Philip Kelechukwu Orji";
  const nameStartIndex = fullText.indexOf(nameText);

  const renderAnimatedText = (textToAnimate) => {
    return textToAnimate.split('').map((char, index) => {
      const isNameChar = index >= nameStartIndex && index < nameStartIndex + nameText.length;
      return (
        <span
          key={index}
          className={`${isNameChar ? 'animate-color-change text-[#DC8923]' : ''}`}
          style={{ animationDelay: `${0.10 * index}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-6 mt-20 animate-fade-in">
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark animate-typing">
          {renderAnimatedText(fullText)}
        </h1>
        <p className="text-xl mb-4 text-text-light dark:text-text-dark">
          ICT Solution Provider, Software Engineer & Data Analyst
        </p>
        <p className="text-md mb-6 text-gray-600 dark:text-gray-300">
          Welcome to my professional space, where I showcase my projects,
          skills, and capabilities. I help businesses transform their ideas into
          digital reality.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button
            href="/contact"
            variant="primary"
            className="card-3d-glow"
            showArrow
          >
            Get in Touch
          </Button>
          <Button
            href="/projects"
            variant="secondary"
            className="card-3d-glow"
            showArrow
          >
            View Projects
          </Button>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 animate-scale-in">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="card-3d-glow rounded-full object-cover hover-lift"
            fill
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 320px"
            priority
          />
        </div>
      </div>
    </section>
  );
} 