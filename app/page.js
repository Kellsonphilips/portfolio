'use client';

import '@/app/globals.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import CallToAction from '@/components/CallToAction';
import Skills from '../app/skills/page';
import Capabilities from '../app/capabilities/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Hero />
      <About />
      <Skills />
      <Capabilities />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
}
