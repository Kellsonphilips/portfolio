"use client"

import { useLanguage } from './LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900/10 dark:bg-background text-center py-6 mt-10 border-t border-t-primary">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://x.com/JoinPhotonPhill"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Philip Kelechukwu Orji on Twitter"
        >
          {t('footer.twitter')}
        </a>
        <a
          href="https://www.instagram.com/joinphotonphill/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Philip Kelechukwu Orji on Instagram"
        >
          {t('footer.instagram')}
        </a>
        <a
          href="https://www.linkedin.com/in/philip-kelechi-orji-a3579b128/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Philip Kelechukwu Orji on LinkedIn"
        >
          {t('footer.linkedin')}
        </a>
        <a
          href="https://github.com/Kellsonphilips"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Philip Kelechukwu Orji's GitHub profile"
        >
          {t('footer.github')}
        </a>
      </div>
      <p className="text-sm text-text-light dark:text-text-dark">
        {t('footer.copyright').replace('{year}', year)}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <a href="/privacy" aria-label="Privacy Policy">{t('footer.privacy')}</a>
        <a href="/faq" aria-label="Frequently Asked Questions">{t('footer.faq')}</a>
        <a href="/blog" aria-label="Blog Posts">{t('footer.blogs')}</a>
      </div>
    </footer>
  );
} 
