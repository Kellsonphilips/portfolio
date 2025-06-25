'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from './faqs';
import useScrollReveal from '@/components/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollReveal('left', 0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      ref.style.opacity = 0;
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      ref.style.transform = direction === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
      ref.style.transition =
        `opacity 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.1}s, ` +
        `transform 2s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx + 0.1}s`;
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24">
      <div className="container h-full text-text-light dark:text-text-dark mx-auto px-4 py-8">
        <h1 ref={headerRef} className="text-3xl flex justify-center font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="card-3d-glow w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="card-3d-glow px-6 pb-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 