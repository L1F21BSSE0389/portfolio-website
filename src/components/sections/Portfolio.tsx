'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Home, Stethoscope, Heart, Bot, ShieldCheck, Layers } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Property Match',
    description: 'Final year real estate web application allowing users to buy, sell, and rent properties easily. Features property listings, user login, chatbot, investment calculator, and a no-commission model.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML CSS', 'JavaScript'],
    github: 'https://github.com',
    live: 'https://github.com',
    icon: Home,
    color: 'from-[#00E5FF] to-[#7C3AED]',
  },
  {
    title: 'DevOps CI/CD Deployment',
    description: 'Collaborative term project implementing DevOps practices using GitHub Actions. Followed Git flow to build and deploy static site workflows with staging and production environments, ensuring branch protection.',
    tags: ['GitHub Actions', 'Git', 'HTML CSS', 'CI/CD', 'GitHub Pages'],
    github: 'https://github.com',
    live: 'https://github.com',
    icon: ShieldCheck,
    color: 'from-[#7C3AED] to-[#22D3EE]',
  },
  {
    title: 'Shopify E-Commerce Store',
    description: 'Developed and optimized custom Shopify store layouts, integrating payment gateways, third-party apps, custom product management systems, and high performance storefront tuning.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://github.com',
    icon: Layers,
    color: 'from-[#FF2D20] to-[#FF2D20]', // Let's import Layers if needed or use Home/Bot/ShieldCheck. Oh, wait, is Layers in the imports? Let's check imports in Portfolio.tsx on line 5
  },
  {
    title: 'AI WhatsApp Order Bot',
    description: 'An AI-powered order automation bot designed to process conversational customer WhatsApp messages and synchronize order logs with Laravel backend databases.',
    tags: ['Node.js', 'NestJS', 'Laravel', 'AI Integration'],
    github: 'https://github.com',
    live: 'https://github.com',
    icon: Bot,
    color: 'from-[#22D3EE] to-green-400',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tracking coordinates
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  // Map coordinate range to 3D rotation angles (-12 to 12 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Normalized position from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl glassmorphism border border-white/5 transition-all duration-300 hover:border-cyan-400/20 flex flex-col justify-between min-h-[430px] group cursor-pointer"
    >
      {/* Background glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl opacity-100 pointer-events-none" />

      {/* Decorative inner ambient light */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Project Header abstract image */}
        <div
          className={`h-40 rounded-xl bg-gradient-to-br ${project.color} p-[1.5px] overflow-hidden mb-6 relative flex items-center justify-center`}
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="absolute inset-0 bg-slate-950/80 rounded-xl" />
          {/* Animated decorative grid lines */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <Icon className="h-12 w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
        </div>

        {/* Project Title */}
        <h3
          className="text-xl font-bold font-display text-white mb-2"
          style={{ transform: 'translateZ(30px)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-[#A0AEC0] text-sm font-sans leading-relaxed mb-6"
          style={{ transform: 'translateZ(10px)' }}
        >
          {project.description}
        </p>
      </div>

      {/* Footer Info */}
      <div>
        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#A0AEC0] hover:text-white transition-colors duration-300 font-semibold"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#00E5FF] hover:text-white transition-colors duration-300 font-semibold"
          >
            Live Demo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen py-24 px-6 md:px-12 bg-[#050816] overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#7C3AED]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2"
          >
            Featured Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            My <span className="text-[#7C3AED]">Projects</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
