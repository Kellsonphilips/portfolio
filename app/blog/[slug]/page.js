'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../blogs';

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-700">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </Link>
      
      <article className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {post.category}
          </span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
} 