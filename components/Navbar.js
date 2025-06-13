'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">MyPortfolio</h1>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <ul className={`md:flex gap-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/capabilities">Capabilities</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
} 
