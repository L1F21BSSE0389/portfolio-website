'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function CountUp({ end, suffix = '', duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center bg-[#050816]">
      {/* Glowing Auras */}
      <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-gradient-to-l from-purple-500/10 to-transparent rounded-full filter blur-[70px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* Section Title */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            About <span className="text-[#7C3AED]">Me</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white/90 font-display leading-snug">
              I'm a passionate Full Stack Software Engineer specializing in Laravel, WordPress, React.js, and Node.js.
            </h3>
            <p className="text-[#A0AEC0] leading-relaxed text-sm md:text-base">
              My engineering journey is driven by the thrill of solving complex problems. I craft modern websites, fast scalable web applications, secure REST APIs, automated workflow systems, custom business solutions, and smooth AI integrations.
            </p>
            <p className="text-[#A0AEC0] leading-relaxed text-sm md:text-base font-normal">
              I believe in clean architecture, performance optimization, and visually stunning user experiences. Whether it's crafting high-conversion frontends or structuring databases, I aim for production-grade reliability and Awwwards-level design.
            </p>

            {/* Quick Education Card */}
            <div className="p-6 rounded-2xl glassmorphism border border-white/5 flex gap-4 items-start">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-[#7C3AED]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-[#00E5FF] font-semibold tracking-wider block mb-1">EDUCATION</span>
                <h4 className="text-white font-semibold text-base font-display">Bachelors in Software Engineering (CGPA 3.33/4)</h4>
                <p className="text-sm text-[#A0AEC0] mt-0.5">University of Central Punjab (UCP) | 2021 - 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stat 1 */}
              <div className="p-6 rounded-2xl glassmorphism border border-white/5 text-center flex flex-col justify-center items-center h-32 hover:border-[#00E5FF]/30 transition-colors duration-300">
                <CountUp end={25} suffix="+" />
                <span className="text-xs text-[#A0AEC0] font-sans uppercase tracking-wider mt-2 font-medium">Projects Done</span>
              </div>
              {/* Stat 2 */}
              <div className="p-6 rounded-2xl glassmorphism border border-white/5 text-center flex flex-col justify-center items-center h-32 hover:border-[#7C3AED]/30 transition-colors duration-300">
                <CountUp end={2} suffix="+" />
                <span className="text-xs text-[#A0AEC0] font-sans uppercase tracking-wider mt-2 font-medium">Years Exp</span>
              </div>
              {/* Stat 3 */}
              <div className="p-6 rounded-2xl glassmorphism border border-white/5 text-center flex flex-col justify-center items-center h-32 hover:border-[#7C3AED]/30 transition-colors duration-300">
                <CountUp end={15} suffix="+" />
                <span className="text-xs text-[#A0AEC0] font-sans uppercase tracking-wider mt-2 font-medium">Technologies</span>
              </div>
              {/* Stat 4 */}
              <div className="p-6 rounded-2xl glassmorphism border border-white/5 text-center flex flex-col justify-center items-center h-32 hover:border-[#00E5FF]/30 transition-colors duration-300">
                <CountUp end={100} suffix="%" />
                <span className="text-xs text-[#A0AEC0] font-sans uppercase tracking-wider mt-2 font-medium">Satisfaction</span>
              </div>
            </motion.div>

            {/* Quick Experience Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl glassmorphism border border-white/5 flex gap-4 items-start hover:border-cyan-500/20 transition-colors duration-300"
            >
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-[#00E5FF]">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-purple-400 font-semibold tracking-wider block mb-1">CURRENT STATUS</span>
                <h4 className="text-white font-semibold text-base font-display">Junior WordPress & Laravel Developer</h4>
                <p className="text-sm text-[#A0AEC0] mt-0.5">eSoftbay — August 2025 - Present (Full-time Web Engineering)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
