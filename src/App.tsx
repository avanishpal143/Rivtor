import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';

// Shell & Utilities
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { ScrollToTop } from './components/ScrollToTop';

// Content Sections
import { Hero } from './sections/Hero';
import { Challenges } from './sections/Challenges';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Architecture } from './sections/Architecture';
import { Cloud } from './sections/Cloud';
import { Consulting } from './sections/Consulting';
import { Process } from './sections/Process';
import { Industries } from './sections/Industries';
import { BusinessValue } from './sections/BusinessValue';
import { Comparison } from './sections/Comparison';
import { SuccessStory } from './sections/SuccessStory';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';

export const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Add lenis class for CSS setups
    document.documentElement.classList.add('lenis');

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-bg-brand text-text-brand antialiased selection:bg-accent/20 select-text">
        {/* Search Engine Optimization Head tags */}
        <SEO />
        
        {/* Dynamic Cursor Glow Overlay */}
        <CursorGlow />

        {/* Global Navigation Header */}
        <Header />

        {/* Floating Go to Top Button */}
        <ScrollToTop />

        {/* Storytelling Content Layers */}
        <main className="w-full">
          {/* 01. Hero (100vh with Three.js scene) */}
          <Hero />

          {/* 02. Technology Challenges (Legacy Drag Clip-Path panels) */}
          <Challenges />

          {/* 03. About Rivtor (Magazine Typography Editorial layout) */}
          <About />

          {/* 04. Engineering Expertise (6 Alternating Asymmetrical Row comps) */}
          <Expertise />

          {/* 05. Enterprise Architecture (SVG dynamic pipeline drawing) */}
          <Architecture />

          {/* 06. Cloud Engineering (Interactive deployment simulation console) */}
          <Cloud />

          {/* 07. Technology Consulting (Luxury split advisory photo layout) */}
          <Consulting />

          {/* 08. Engineering Process (Horizontal pin-scroll timeline progress) */}
          <Process />

          {/* 09. Industries (Floating, asymmetrical border-l glass grids) */}
          <Industries />

          {/* 10. Business Value (Animated count-up KPI counters) */}
          <BusinessValue />

          {/* 11. Comparison Section (Glass IT vs. Rivtor comparison table) */}
          <Comparison />

          {/* 12. Success Story (Timeline redesign case study details) */}
          <SuccessStory />

          {/* 13. Testimonials (Infinite looping slow horizontal marquee) */}
          <Testimonials />

          {/* 14. FAQ (Framer Motion height accordions) */}
          <FAQ />

          {/* 15. Final CTA (Premium CTA card with no forms) */}
          <FinalCTA />
        </main>

        {/* Global Brand Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
