'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 sm:p-3 rounded-full bg-background-light dark:bg-background-dark shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Select language"
        title="Select language"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC8923]" />
      </button>
      {open && (
        <div className="absolute right-0 bottom-full mb-2 w-40 bg-white dark:bg-gray-800 rounded shadow-lg z-50" role="menu" aria-label="Select language">
          <button
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${language === 'en' ? 'font-bold text-[#DC8923]' : ''}`}
            onClick={() => { setLanguage('en'); setOpen(false); }}
            role="menuitem"
          >
            English
          </button>
          <button
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${language === 'fr' ? 'font-bold text-[#DC8923]' : ''}`}
            onClick={() => { setLanguage('fr'); setOpen(false); }}
            role="menuitem"
          >
            Français
          </button>
          <button
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${language === 'es' ? 'font-bold text-[#DC8923]' : ''}`}
            onClick={() => { setLanguage('es'); setOpen(false); }}
            role="menuitem"
          >
            Español
          </button>
          <button
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${language === 'de' ? 'font-bold text-[#DC8923]' : ''}`}
            onClick={() => { setLanguage('de'); setOpen(false); }}
            role="menuitem"
          >
            Deutsch
          </button>
          <button
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${language === 'zh' ? 'font-bold text-[#DC8923]' : ''}`}
            onClick={() => { setLanguage('zh'); setOpen(false); }}
            role="menuitem"
          >
            中文 (简体)
          </button>
        </div>
      )}
    </div>
  );
} 