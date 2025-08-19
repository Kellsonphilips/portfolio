'use client';

export default function JsonLdHome() {
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://philipkelechiorji.vercel.app/',
    name: 'Philip Kelechukwu Orji Portfolio',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://philipkelechiorji.vercel.app/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </>
  );
} 