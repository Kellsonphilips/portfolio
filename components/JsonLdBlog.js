'use client';

export default function JsonLdBlog({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified,
  image,
  authorName = 'Philip Kelechukwu Orji',
  authorUrl = 'https://philipkelechiorji.vercel.app/',
  category,
  keywords = []
}) {
  const siteUrl = 'https://philipkelechiorji.vercel.app';
  
  // Ensure image is an array and has absolute URL
  const imageArray = Array.isArray(image) ? image : [image];
  const normalizedImages = imageArray.map(img => 
    img.startsWith('http') ? img : `${siteUrl}${img.startsWith('/') ? '' : '/'}${img}`
  );

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      sameAs: [
        'https://twitter.com/JoinPhotonPhill',
        authorUrl
      ]
    },
    image: normalizedImages,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  // Add category if provided
  if (category) {
    blogLd.articleSection = category;
  }

  // Add keywords if provided
  if (keywords.length > 0) {
    blogLd.keywords = keywords.join(', ');
  }

  // Add breadcrumb structured data
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} 
      />
    </>
  );
} 