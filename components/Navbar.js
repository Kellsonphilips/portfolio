'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import profilePic from '@/public/Images/profile.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rabbitRef = useRef(null);
  const homeRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full w-10 h-10 object-cover"
            priority
          />
          <span
            ref={nameRef}
            className="font-bold text-xl text-text-light dark:text-text-dark animate-navbar-fade underline-animate"
          >
            Philip K.C O.
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
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/projects"
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/skills"
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/capabilities"
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Capabilities
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/blog"
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/contact"
              className="block py-2 transition-colors text-text-light dark:text-text-dark hover:text-[#DC8923] dark:hover:text-[#DC8923] underline-animate"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 
