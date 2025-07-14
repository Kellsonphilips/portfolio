'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getBlogPosts } from '../blogs';
import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import JsonLdBlog from '../../../components/JsonLdBlog';

export const metadata = {
  title: "Blog Post | Philip Kelechukwu Orji Portfolio",
  description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
  alternates: {
    canonical: "https://philipkelechiorji.vercel.app/blog/[slug]",
  },
  openGraph: {
    title: "Blog Post | Philip Kelechukwu Orji Portfolio",
    description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
    url: "https://philipkelechiorji.vercel.app/blog/[slug]",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "/Images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
    type: "article",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Blog Post | Philip Kelechukwu Orji Portfolio",
    description: "Read insightful articles on ICT, web development, data analytics, and more by Philip Kelechukwu Orji.",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
};

export default function BlogPost() {
  const params = useParams();
  const { language } = useLanguage();
  const [BlogComponent, setBlogComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadBlogContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const blogPosts = getBlogPosts(language);
        const foundPost = blogPosts.find(p => p.slug === params.slug);
        
        if (!foundPost) {
          setError('Blog post not found');
          return;
        }

        setPost(foundPost);
        // Load the blog component dynamically
        const Component = await foundPost.content();
        setBlogComponent(() => Component);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogContent();
  }, [params.slug, language]);

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading mb-4"></div>
          <p className="text-text-light dark:text-text-dark">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-text-light dark:text-text-dark">{error}</p>
          <a 
            href="/blog" 
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  if (!BlogComponent || !post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-light dark:text-text-dark">Blog post not found</p>
          <a 
            href="/blog" 
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Replace these with real data from your blog post
  const title = 'Blog Post Title';
  const description = 'Blog post description/excerpt.';
  const url = 'https://philipkelechiorji.vercel.app/blog/[slug]';
  const datePublished = '2024-01-01';
  const image = 'https://philipkelechiorji.vercel.app/Images/profile.jpg';

  return (
    <>
      <JsonLdBlog
        title={title}
        description={description}
        url={url}
        datePublished={datePublished}
        image={image}
      />
      <article className="container mx-auto px-4 py-10 bg-background rounded-lg shadow-lg my-8 animate-fade-in">
        <div className="pt-24">
          <Link
            href="/blog"
            className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-6 no-underline"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            {post.title}
          </h1>
          <p className="text-text-light dark:text-text-dark text-sm mb-6">
            Published on {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })} &bull;{" "}
            {post.readTime}
          </p>
          <div className="prose prose-lg mx-auto text-text dark:prose-invert">
            <BlogComponent />
          </div>
        </div>
      </article>
    </>
  );
} 
