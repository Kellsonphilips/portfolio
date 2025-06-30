'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { socialIcons } from './socialIcons';
import LanguageSwitcher from './LanguageSwitcher';

function SocialIcons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Animation sequence logic - starts immediately
  const startAnimation = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 2000); // 2s per icon
  }, []);

  useEffect(() => {
    startAnimation();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 transition-opacity duration-500 opacity-100"
      aria-label="Social Links"
    >
      {socialIcons.map(({ href, title, Icon }, idx) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className={`hover:text-[#DC8923] transition-colors ${
            activeIndex === idx ? "animate-social-rotate-color-step" : ""
          }`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}

function ThemeAndLanguageControls() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <button
        onClick={toggleTheme}
        className="p-2 sm:p-3 rounded-full bg-background-light dark:bg-background-dark shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC8923]" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC8923]" />
        )}
      </button>
      <LanguageSwitcher />
    </div>
  );
}

export default function ToggleButtons() {
  return (
    <>
      <SocialIcons />
      <ThemeAndLanguageControls />
    </>
  );
} 