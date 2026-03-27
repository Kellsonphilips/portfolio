'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import profilePic from '@/public/Images/profile/profilelogoNobg.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rabbitRef = useRef(null);
  const homeRef = useRef(null);
  const nameRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark shadow-md transition-shadow duration-300"
      aria-label="Main Navigation"
    >
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity no-underline"
            onClick={handleMenuClick}
          >
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="w-12 h-10 object-cover"
              width={40}
              height={40}
            />
            <span
              ref={nameRef}
              className="font-bold text-xl text-text-light dark:text-text-dark animate-navbar-fade underline-animate"
            >
              Philip O.
            </span>
          </Link>
          {/* <span
            ref={rabbitRef}
            className="hidden md:block absolute top-1/2 left-0 z-50 animate-rabbit-dance"
            style={{ pointerEvents: 'none' }}
            aria-label="Dancing Rabbit"
          >
            🐇
          </span> */}
          <button
            className="md:hidden p-2 text-text-light dark:text-text-dark transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <ul
            className={`absolute md:relative top-full left-0 right-0 md:top-auto bg-background-light dark:bg-background-dark shadow-lg md:shadow-none p-4 md:p-0 md:flex md:items-center md:justify-center gap-6 ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="text-center" ref={homeRef}>
              <Link
                href="/"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/projects"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Projects
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/skills"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Skills
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/capabilities"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Capabilities
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/blog"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Blog
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/contact"
                className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate no-underline"
                onClick={handleMenuClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 
