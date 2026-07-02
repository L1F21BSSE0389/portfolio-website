'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Junior WordPress and Laravel Developer',
    company: 'eSoftbay',
    period: 'August 2025 – Present',
    type: 'Full-time',
    description:
      'Developed and maintained responsive WordPress, Shopify, and Laravel applications, custom plugins/themes, and payment integrations. Built backend REST APIs using Node.js & NestJS, managed Git/GitHub workflows, and optimized storefront speed & query performance across server environments.',
  },
  {
    role: 'WordPress Developer Intern',
    company: 'MSN Global IT Solution',
    period: 'Dec 2024 – Feb 2025',
    type: 'Internship',
    description:
      'Customized and maintained client WordPress sites, handled theme modifications, plugin installations, and page styling. Assisted in optimizing Shopify storefront performance and collaborated with developers to debug system bottlenecks.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center bg-[#050816]">
      {/* Glow Blur */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-gradient-to-l from-purple-500/10 to-transparent rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Work <span className="text-[#7C3AED]">Experience</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4 mx-auto md:mx-0" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Glowing Dot on timeline line */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 rounded-full bg-[#050816] border border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.7)] justify-center items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                </span>

                {/* Glassmorphic card */}
                <div className="p-6 md:p-8 rounded-2xl glassmorphism border border-white/5 transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#A0AEC0] bg-white/5 px-3 py-1 rounded-full border border-white/5 font-sans">
                        <Calendar className="h-3 w-3 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-semibold uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#A0AEC0] text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
