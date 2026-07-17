'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import BackToTop from '@/components/ui/BackToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SceneCanvas from '@/components/three/SceneCanvas';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic mouse movements mapping to CSS properties for page spotlight
  useEffect(() => {
    if (isLoading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isLoading]);

  // Initialize Lenis smooth scroll on mount
  useEffect(() => {
    if (isLoading) return;

    let lenisInstance: any = null;
    
    // Dynamically import lenis to avoid SSR issues
    import('lenis').then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    return () => {
      lenisInstance?.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen w-full bg-[#050816] text-white">
          {/* Custom Interactivity UI */}
          <CustomCursor />
          <ScrollProgressBar />
          <BackToTop />
          
          {/* Dynamic Page Cursor Spotlight */}
          <div className="spotlight-bg" />
          
          {/* Sticky Navbar */}
          <Navbar />
          
          {/* 3D background scene (stays fixed or moves under page layout) */}
          <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
            <SceneCanvas />
          </div>
          
          {/* Sections Wrap (z-10 to stay above 3D scene but allows interaction where appropriate) */}
          <div className="relative z-10 w-full flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
