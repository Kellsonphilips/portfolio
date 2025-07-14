'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'German' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'zh', name: 'Chinese' },
];

const baseUrl = 'https://philipkelechiorji.vercel.app';

export default function HreflangTags() {
  const pathname = usePathname();

  return (
    <Head>
      {languages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={`${baseUrl}${pathname}`.replace(/\/+/g, '/')}
        />
      ))}
      {/* x-default for fallback */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pathname}`.replace(/\/+/g, '/')} />
    </Head>
  );
} 