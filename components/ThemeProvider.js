'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLanguage = localStorage.getItem('language') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, changeLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext); 