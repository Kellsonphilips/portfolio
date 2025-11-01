'use client';

import { faqKeys } from '../app/faq/faqs';
import en from '../locales/en.json';

export default function JsonLdFAQ() {
  const siteUrl = 'https://philipkelechiorji.vercel.app';
  const t = (key) => en[key] || key;

  const faqPageLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqKeys.map((faq, index) => ({
      '@type': 'Question',
      name: t(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(faq.answer)
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
    />
  );
}

