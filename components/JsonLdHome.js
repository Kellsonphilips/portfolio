'use client';

export default function JsonLdHome() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Philip Kelechukwu Orji',
    url: 'https://philipkelechiorji.vercel.app/',
    image: 'https://philipkelechiorji.vercel.app/Images/profile.jpg',
    sameAs: [
      'https://github.com/Kellsonphilips',
      'https://www.linkedin.com/in/philipkelechukwuorji/',
      'https://twitter.com/JoinPhotonPhill'
    ],
    jobTitle: 'ICT Solution Provider, Software Engineer & Data Analyst',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    }
  };
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </>
  );
} 