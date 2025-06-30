'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const supportedLanguages = ['en', 'fr', 'es', 'de', 'zh'];

const LanguageContext = createContext();

// Cache for loaded language files
const languageCache = new Map();

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
  const [isLoading, setIsLoading] = useState(false);

  // Initialize language preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let cachedLanguage = localStorage.getItem('portfolio_language') || 'en';
      if (!supportedLanguages.includes(cachedLanguage)) {
        cachedLanguage = 'en';
        localStorage.setItem('portfolio_language', 'en');
      }
      setLanguage(cachedLanguage);
    }
  }, []);

  // Load language messages with caching
  useEffect(() => {
    const langKey = supportedLanguages.includes(language) ? language : 'en';
    
    // Check cache first
    if (languageCache.has(langKey)) {
      setMessages(languageCache.get(langKey));
      return;
    }

    setIsLoading(true);
    languageFiles[langKey]()
      .then(module => {
        const messages = module.default || module;
        // Cache the messages
        languageCache.set(langKey, messages);
        setMessages(messages);
      })
      .catch(error => {
        console.error(`Failed to load language ${langKey}:`, error);
        // Fallback to English
        if (langKey !== 'en') {
          setLanguage('en');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [language]);

  // Cache language changes
  const changeLanguage = (newLanguage) => {
    const langKey = supportedLanguages.includes(newLanguage) ? newLanguage : 'en';
    setLanguage(langKey);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_language', langKey);
    }
  };

  const t = useMemo(() => {
    return (key) => messages[key] || key;
  }, [messages]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage, 
      t,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 