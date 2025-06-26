'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const languageFiles = {
  en: () => import('../locales/en.json'),
  fr: () => import('../locales/fr.json'),
  es: () => import('../locales/es.json'),
  de: () => import('../locales/de.json'),
  zh: () => import('../locales/zh.json'),
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    (languageFiles[language] || languageFiles['en'])().then(module => {
      setMessages(module.default || module);
    });
  }, [language]);

  const t = (key) => messages[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 