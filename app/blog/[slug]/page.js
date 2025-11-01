import BlogPostClient from '../BlogPostClient';
import { getBlogPosts } from '../blogs';
import en from '../../../locales/en.json';

export async function generateStaticParams() {
  const posts = getBlogPosts('en');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const siteUrl = 'https://philipkelechiorji.vercel.app';

  const posts = getBlogPosts('en');
  const post = posts.find(p => p.slug === slug);

  const defaultTitle = 'Blog Post | Philip Kelechukwu Orji Portfolio';
  const defaultDescription = 'Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.';
  const defaultImage = `${siteUrl}/Images/profile.jpg`;
  const url = `${siteUrl}/blog/${slug}`;

  // Generate keywords based on category and service type
  const getKeywords = (category, service, title) => {
    const baseKeywords = [
      'Philip Kelechukwu Orji',
      'Philip Orji',
      'blog',
      'technology',
      'ICT solutions',
      'software engineering',
      'portfolio'
    ];
    
    const categoryKeywords = {
      'Web Development': ['web development', 'React', 'Next.js', 'frontend', 'full stack'],
      'Cloud Technologies': ['cloud computing', 'AWS', 'cloud migration', 'cloud engineering'],
      'Data Science': ['data science', 'data analytics', 'machine learning', 'data analysis'],
      'DevOps': ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'deployment'],
      'ICT Solutions': ['ICT', 'IT support', 'network engineering', 'system administration'],
      'Artificial Intelligence': ['AI', 'machine learning', 'artificial intelligence', 'ML']
    };

    const serviceKeywords = {
      'Web Dev': ['web development', 'React', 'Next.js'],
      'Cloud Migration': ['AWS', 'cloud migration', 'infrastructure'],
      'DevOps': ['Docker', 'Kubernetes', 'CI/CD'],
      'Data Analytics': ['data analysis', 'analytics', 'business intelligence'],
      'Network Engineering': ['networking', 'VPN', 'firewall', 'network security'],
      'Full Stack Development': ['full stack', 'React', 'Node.js', 'full stack development']
    };

    const keywords = [
      ...baseKeywords,
      ...(categoryKeywords[category] || []),
      ...(serviceKeywords[service] || []),
      ...title.toLowerCase().split(' ').filter(w => w.length > 3)
    ];

    return [...new Set(keywords)].join(', ');
  }

  if (!post) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      keywords: 'blog, technology, ICT, Philip Kelechukwu Orji',
      alternates: { 
        canonical: url 
      },
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url,
        siteName: 'Philip Kelechukwu Orji Portfolio',
        images: [
          { url: defaultImage, width: 1200, height: 630, alt: defaultTitle }
        ],
        type: 'article',
        locale: 'en_GB',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@JoinPhotonPhill',
        creator: '@JoinPhotonPhill',
        title: defaultTitle,
        description: defaultDescription,
        images: [ { url: defaultImage, alt: defaultTitle } ],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }

  const t = (key) => en[key] || key;
  const title = t(post.titleKey);
  const description = t(post.excerptKey);
  const category = t(post.categoryKey);
  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `${siteUrl}${post.image.startsWith('/') ? '' : '/'}${post.image}`)
    : `${siteUrl}/Images/profile/profilelogoNobg.png`;
  const keywords = getKeywords(category, '', title);

  return {
    title: `${title} | Philip Kelechukwu Orji Blog`,
    description,
    keywords,
    alternates: { 
      canonical: url 
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Philip Kelechukwu Orji Portfolio',
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: title }
      ],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Philip Kelechukwu Orji'],
      locale: 'en_GB',
      section: category,
      tags: [category],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@JoinPhotonPhill',
      creator: '@JoinPhotonPhill',
      title,
      description,
      images: [ { url: imageUrl, alt: title } ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:author': 'Philip Kelechukwu Orji',
      'article:published_time': post.date,
      'article:section': category,
      'article:tag': category,
    },
  };
}

export default function BlogPostPage({ params }) {
  return <BlogPostClient slug={params.slug} />;
}
