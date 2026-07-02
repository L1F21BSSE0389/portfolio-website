'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background glow on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 200; // Offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'py-4 bg-[#050816]/70 backdrop-blur-md border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
          : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl md:text-2xl font-display font-bold text-white tracking-wider flex items-center gap-1 group"
        >
          <span>ABDUL</span>
          <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">REHMAN</span>
        </a>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 glassmorphism rounded-full px-6 py-2 border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm font-sans tracking-wide transition-all duration-300 px-3 py-1 block ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-[#A0AEC0] hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Download CV Button wrapper in magnetic */}
          <Magnetic>
            <a
              href="/Abdul_Rehman_CV.pdf"
              download="Abdul_Rehman_CV.pdf"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
            >
              <span className="absolute inset-0 rotate-180 bg-[conic-gradient(from_90deg_at_50%_50%,#00E5FF_0%,#7C3AED_50%,#00E5FF_100%)] opacity-70" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-3xl transition-colors duration-300 group-hover:bg-slate-900 gap-1.5 uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5 text-cyan-400" />
                Download CV
              </span>
            </a>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white glassmorphism rounded-full"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-[#050816]/95 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:hidden flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-sans tracking-wide transition-all duration-300 block py-2 border-b border-white/5 ${
                      isActive ? 'text-cyan-400 font-semibold pl-2 border-l-2 border-l-cyan-400' : 'text-[#A0AEC0] hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/Abdul_Rehman_CV.pdf"
            download="Abdul_Rehman_CV.pdf"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-semibold uppercase tracking-wider text-white"
          >
            <FileText className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      )}
    </nav>
  );
}
