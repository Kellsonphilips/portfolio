export const dynamic = 'force-static';
import '@/app/globals.css';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Hero />
      <About />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
}
