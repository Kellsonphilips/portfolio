'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../blogs';

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-text py-8">Post not found.</p>;
  }

  const Content = post.content;

  return (
    <article className="container mx-auto px-4 py-10 bg-background rounded-lg shadow-lg my-8 animate-fade-in">
      <div className="pt-24">
        <Link
          href="/blog"
          className="flex items-center text-primary-color hover:text-accent-color transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blogs
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-color">
          {post.title}
        </h1>
        <p className="text-secondary-color text-sm mb-6">
          Published on {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })} &bull;{" "}
          {post.readTime}
        </p>
        <div className="prose prose-lg mx-auto text-text dark:prose-invert">
          <Content />
        </div>
      </div>
    </article>
  );
} 
