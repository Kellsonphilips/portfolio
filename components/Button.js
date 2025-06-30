'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  className = '', 
  showArrow = false,
  onClick
}) {
  const baseStyles = ''; // Tailwind classes are applied directly in variants or through global CSS
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  const buttonContent = (
    <>
      {children}
      {showArrow && <FiArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    // Check if it's an internal link (starts with /) or external link
    const isInternalLink = href.startsWith('/');
    
    if (isInternalLink) {
      return (
        <Link
          href={href}
          className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer transition-all duration-200 hover:scale-105 no-underline`}
        >
          {buttonContent}
        </Link>
      );
    } else {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer transition-all duration-200 hover:scale-105 no-underline`}
        >
          {buttonContent}
        </a>
      );
    }
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
    >
      {buttonContent}
    </button>
  );
} 