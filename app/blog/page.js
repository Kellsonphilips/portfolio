'use client';

import Link from 'next/link';
import { blogPosts } from './blogs';

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.slug}
            className="block"
          >
            <div className="card p-6 rounded-lg shadow-lg hover-lift h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-2 text-black hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-secondary-color text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-text flex-grow">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 