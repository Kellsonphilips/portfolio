'use client';

import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      
      <div className="relative">
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="p-3 rounded-full bg-[#DC8923] text-white hover:bg-[#372207] transition-colors"
          aria-label="Change language"
        >
          <Globe className="w-5 h-5" />
        </button>
        
        {showLanguages && (
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setShowLanguages(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  language === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 