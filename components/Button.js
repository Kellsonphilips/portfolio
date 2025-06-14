'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
} 