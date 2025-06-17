'use client';

import { useLanguage } from './LanguageProvider';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh-CN', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageToggle() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <select
      value={currentLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
} 