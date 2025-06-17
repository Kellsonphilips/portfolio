'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Sun, Moon } from 'lucide-react';

export default function ToggleButtons() {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
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
      <select
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
      </select>
    </div>
  );
} 