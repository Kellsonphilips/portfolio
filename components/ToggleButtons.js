'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { socialIcons } from './socialIcons';

function SocialIcons() {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(aboutSection);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  // Animation sequence logic
  useEffect(() => {
    if (!hasBeenVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 2000); // 2s per icon
    return () => clearInterval(interval);
  }, [hasBeenVisible]);

  return (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 transition-opacity duration-500 ${
        hasBeenVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
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

export default function ToggleButtons() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <SocialIcons />
      <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-3 rounded-full bg-background-light dark:bg-background-dark shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          )}
        </button>
      </div>
    </>
  );
} 