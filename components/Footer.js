"use client"

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900/10 dark:bg-background text-center py-6 mt-10 border-t border-t-primary">
      <div className="flex justify-center gap-4 mb-4">
        <a
          className="dark:hover:text-text-dark"
          href="https://x.com/JoinPhotonPhill"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Philip Kelechukwu Orji on Twitter"
        >
          {t("footer.twitter")}
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://www.instagram.com/joinphotonphill/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Philip Kelechukwu Orji on Instagram"
        >
          {t("footer.instagram")}
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://www.linkedin.com/in/philip-kelechi-orji-a3579b128/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Philip Kelechukwu Orji on LinkedIn"
        >
          {t("footer.linkedin")}
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://github.com/Kellsonphilips"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Philip Kelechukwu Orji's GitHub profile"
        >
          {t("footer.github")}
        </a>
      </div>
      <p className="text-sm text-text-light dark:text-text-dark">
        {t("footer.copyright").replace("{year}", year)}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/privacy"
          aria-label="Privacy Policy"
        >
          {t("footer.privacy")}
        </Link>
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/faq"
          aria-label="Frequently Asked Questions"
        >
          {t("footer.faq")}
        </Link>
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/blog"
          aria-label="Blog Posts"
        >
          {t("footer.blogs")}
        </Link>
      </div>
    </footer>
  );
} 
