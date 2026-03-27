"use client"

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

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
          Twitter
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://www.instagram.com/joinphotonphill/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Philip Kelechukwu Orji on Instagram"
        >
          Instagram
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://www.linkedin.com/in/philip-kelechi-orji-a3579b128/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Philip Kelechukwu Orji on LinkedIn"
        >
          LinkedIn
        </a>
        <a
          className="dark:hover:text-text-dark"
          href="https://github.com/Kellsonphilips"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Philip Kelechukwu Orji's GitHub profile"
        >
          GitHub
        </a>
      </div>
      <p className="text-sm text-text-light dark:text-text-dark">
        {`Copyright © ${year} Philip Kelechukwu Orji. All rights reserved.`}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/privacy"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </Link>
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/faq"
          aria-label="Frequently Asked Questions"
        >
          FAQ
        </Link>
        <Link
          className="dark:hover:text-text-dark no-underline"
          href="/blog"
          aria-label="Blog Posts"
        >
          Blogs
        </Link>
      </div>
    </footer>
  );
} 
