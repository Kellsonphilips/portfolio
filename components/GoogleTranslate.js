'use client';

import { useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

export default function GoogleTranslate() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar', // Add more languages as needed
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    // Update Google Translate when language changes
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = currentLanguage;
        select.dispatchEvent(new Event('change'));
      }
    }
  }, [currentLanguage]);

  return (
    <div id="google_translate_element" className="hidden" />
  );
} 