'use client';

export default function JsonLdHome() {
  const siteUrl = 'https://philipkelechiorji.vercel.app';

  // WebSite Schema
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${siteUrl}/`,
    name: 'Philip Kelechukwu Orji Portfolio',
    description: 'Professional portfolio of Philip Kelechukwu Orji - ICT Solution Provider, Software Engineer, and Project Manager. Explore projects, skills, capabilities, and technology blog.',
    inLanguage: ['en', 'fr', 'es', 'de', 'zh'],
    publisher: {
      '@type': 'Organization',
      name: 'Philip Kelechukwu Orji Portfolio',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Images/profile/profilelogoNobg.png`,
        width: 800,
        height: 800
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Portfolio/CreativeWork Schema
  const portfolioLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/#portfolio`,
    name: 'Philip Kelechukwu Orji Portfolio',
    description: 'Professional portfolio showcasing ICT solutions, software engineering projects, cloud computing implementations, and network engineering expertise.',
    creator: {
      '@type': 'Person',
      name: 'Philip Kelechukwu Orji',
      url: siteUrl
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en',
    genre: ['Technology', 'Software Engineering', 'ICT Solutions', 'Portfolio'],
    keywords: 'portfolio, software engineer, ICT solutions, web development, cloud computing, network engineering, project management, Philip Kelechukwu Orji',
    mainEntity: {
      '@type': 'Person',
      name: 'Philip Kelechukwu Orji'
    }
  };

  // BreadcrumbList for Homepage
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
} 