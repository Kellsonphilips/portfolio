'use client';

import { useState, useEffect, useRef } from 'react';

export default function useTypingAnimation(text, delay = 50, shouldStart = false) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const timeoutRef = useRef(null);

  // Reset when shouldStart changes to false
  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText('');
      setIsTyping(false);
      setHasTyped(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [shouldStart]);

  useEffect(() => {
    if (shouldStart && !hasTyped) {
      setIsTyping(true);
      setDisplayedText('');
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, delay);
        } else {
          setIsTyping(false);
          setHasTyped(true);
        }
      };

      typeNextChar();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shouldStart, text, delay, hasTyped]);

  const reset = () => {
    setDisplayedText('');
    setIsTyping(false);
    setHasTyped(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return { displayedText, isTyping, hasTyped, reset };
} 