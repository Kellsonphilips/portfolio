'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Sun, Moon, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const iconAnimation = "animate-social-rotate-color";

function SocialIcons() {
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasBeenVisible(true);
        } else {
          setVisible(false);
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

  const icons = [
    {
      href: "https://github.com/Kellsonphilips",
      title: "GitHub",
      Icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/philip-kelechi-orji-a3579b128/",
      title: "LinkedIn",
      Icon: Linkedin,
    },
    {
      href: "https://x.com/JoinPhotonPhill",
      title: "𝕏 (Twitter)",
      Icon: Twitter,
    },
    {
      href: "https://www.instagram.com/joinphotonphill/",
      title: "Instagram",
      Icon: Instagram,
    },
  ];

  return (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 transition-opacity duration-500 ${hasBeenVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Social Links"
    >
      {icons.map(({ href, title, Icon }, idx) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className={`hover:text-[#DC8923] transition-colors ${activeIndex === idx ? 'animate-social-rotate-color-step' : ''}`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}

export default function ToggleButtons() {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <>
      <SocialIcons />
      <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
        {/* Theme Toggle */}
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

        {/* Language Toggle */}
        {/* <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="p-1 sm:p-2 rounded-lg bg-background-light dark:bg-background-dark shadow-lg hover:shadow-xl transition-all duration-300 text-text-light dark:text-text-dark border border-gray-200 dark:border-gray-700 text-sm sm:text-base"
          aria-label="Select language"
          title="Select your preferred language"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="ru">Русский</option>
          <option value="zh-CN">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ar">العربية</option>
        </select> */}
      </div>
    </>
  );
} 