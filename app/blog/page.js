'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from './blogs';
import useScrollReveal from '@/components/useScrollReveal';
import { useRef, useEffect } from 'react';

export default function Blog() {
  const headerRef = useScrollReveal('left', 0);
  const paraRef = useScrollReveal('right', 0.15);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      ref.style.opacity = 0;
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      ref.style.transform = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
      ref.style.transition =
        `opacity 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.2}s, ` +
        `transform 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.2}s`;
      const handleReveal = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.style.opacity = 1;
            ref.style.transform = 'translateX(0)';
          }
        });
      };
      const observer = new window.IntersectionObserver(handleReveal, {
        threshold: 0.2,
      });
      observer.observe(ref);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 ref={headerRef} className="text-4xl font-bold mb-8 text-text-light dark:text-text-dark text-center">
          Blog Posts
        </h1>
        <p ref={paraRef} className="text-xl flex justify-center text-center mb-8">
          Read some of  my blog posts and if you my expertise in technical writing, Get in Touch!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
              <div
                ref={el => cardRefs.current[idx] = el}
                className="card card-3d-glow rounded-lg shadow-lg hover-lift h-full flex flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-text-light dark:text-text-dark">
                  <h2 className="text-xl font-semibold mb-2 text-primary hover:text-primary/50 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm mb-4">
                    {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                  </p>
                  <p className="text-text flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 