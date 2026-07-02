'use client';

import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 pt-24"
    >
      {/* Glowing Auras */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/15 to-transparent rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Welcome Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism text-xs font-semibold tracking-widest text-[#00E5FF] uppercase mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Welcome to my portfolio
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-tight mb-4"
        >
          Abdul{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500 text-glow">
            Rehman
          </span>
        </motion.h1>

        {/* Job Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-sans font-medium tracking-wide mb-6"
        >
          Full Stack Software Engineer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-base md:text-lg text-[#A0AEC0] mb-12 font-sans font-normal leading-relaxed"
        >
          Building Fast, Scalable & Beautiful Web Applications.
          <br />
          <span className="text-white/80 text-sm font-semibold mt-2 block">
            Laravel | WordPress | React.js | Node.js Developer
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full justify-center"
        >
          <Magnetic>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group pointer-events-auto cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl transition-colors duration-300 group-hover:bg-transparent uppercase tracking-wider gap-2">
                View Portfolio
                <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              </span>
            </button>
          </Magnetic>

          <Magnetic>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full glassmorphism text-sm font-semibold uppercase tracking-wider text-white hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer text-[#A0AEC0] hover:text-white transition-colors duration-300 z-10"
      >
        <span className="text-xs uppercase tracking-widest font-sans">Scroll Down</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
