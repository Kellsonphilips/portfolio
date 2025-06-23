// useScrollReveal.js
'use client';
import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Adds a reveal animation to a ref when it enters the viewport.
 * @param {'left' | 'right' | 'random'} direction - Animation direction
 * @param {number} delay - Animation delay in seconds
 * @returns {React.RefObject}
 */
export default function useScrollReveal(direction = 'left', delay = 0) {
  const ref = useRef(null);
  // Store the chosen direction for this instance
  const chosenDirectionRef = useRef(
    direction === 'random'
      ? (Math.random() < 0.5 ? 'left' : 'right')
      : direction
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.style.opacity = 0;
    node.style.transform =
      chosenDirectionRef.current === 'left' ? 'translateX(-60px)' : 'translateX(60px)';
    node.style.transition =
      `opacity 2s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s, ` +
      `transform 2s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`;

    const handleReveal = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = 1;
          node.style.transform = 'translateX(0)';
        }
      });
    };

    const observer = new window.IntersectionObserver(handleReveal, {
      threshold: 0.2,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]); // direction is locked per instance

  return ref;
} 