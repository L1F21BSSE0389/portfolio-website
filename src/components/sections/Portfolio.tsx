'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'SineCure Medical Billing',
    description:
      'Developed a responsive WordPress website for a US-based medical billing company. Customized layouts, optimized performance, and built professional service pages showcasing medical billing, coding, revenue cycle management, claims processing, and HIPAA-compliant healthcare solutions.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    github: 'https://github.com',
    live: 'https://github.com',
    image: '/projects/1.png',
    color: 'from-[#00E5FF] to-[#7C3AED]',
  },
  {
    title: 'PropertyMatch - Real Estate Platform',
    description:
      'Developed a full-stack real estate web platform using Laravel, PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap. PropertyMatch enables users to buy, sell, and rent properties through a user-friendly marketplace. Implemented features including property listings, user authentication, user dashboards, chatbot integration, investment calculator, and a no-commission property dealing model. Designed and developed responsive frontend interfaces along with backend functionality to provide a seamless real estate management experience.',
    tags: ["Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Real Estate Platform",
      "Chatbot Integration",
      "Full Stack Development"],
    github: '#',
    live: '#',
    image: '/projects/prop.jpg',
    color: 'from-[#7C3AED] to-[#22D3EE]',
  },
  {
    title: 'Next Step Movers & Packers (Dubai)',
    description:
      '"Developed a modern, responsive WordPress website for a Dubai-based business consultancy company specializing in company formation, visa services, and relocation support. Customized the WordPress theme using Elementor, structured service-focused landing pages, and created a professional, conversion-oriented design. The website highlights services such as business setup in UAE free zones, visa processing, Emirates ID assistance, and relocation guidance for entrepreneurs and families moving to Dubai.',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'SEO Optimization'],
    github: '#',
    live: 'https://nextstepmp.com/',
    image: '/projects/next.png',
    color: 'from-[#00E5FF] to-[#FF2D20]',
  },
  {
    title: 'Employee Management CRM System',
    description:
      'Developed a complete Employee Management CRM system using Laravel, PHP, MySQL, HTML, CSS, and JavaScript. The system provides an efficient platform to manage employee records, departments, roles, attendance details, and administrative operations. Implemented database-driven functionality, CRUD operations, authentication, and a responsive dashboard interface to improve business workflow and employee management processes.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Database Management'],
    github: '#',
    live: 'https://eapp.esoftbay.com/',
    image: '/projects/crm.JPG',
    color: 'from-[#22D3EE] to-green-400',
  },
  {
    title: 'LifeTouch Healthcare Wellness',
    description:
      'Developed a modern and responsive WordPress healthcare website for a mental health and psychiatry service provider. Customized the WordPress theme, designed professional service pages, and created a user-friendly interface to showcase psychiatric care, mental health evaluations, medication management, psychopharmacology, and telehealth services. Optimized the website for mobile responsiveness, performance, and an improved patient experience with a clean healthcare-focused design.',
    tags: ["WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Healthcare Website",
      "UI/UX Design",
      "SEO Optimization"],
    github: "#",
    live: "https://lifetouchwellness.com/",
    image: "/projects/mental.jpg",
    color: "from-teal-500 to-cyan-600"
  },
    {
  title: "Shoping World - E-Commerce Store",
  description:
    "Developed a modern and responsive WordPress e-commerce website for a UK-based online shopping store. Customized the WooCommerce-based layout, designed product pages, organized multiple product categories, and enhanced the overall shopping experience. Implemented a clean user interface for showcasing electronics, gaming accessories, computer products, home audio accessories, and fashion items with responsive design and optimized performance.",
  tags: [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "HTML",
    "CSS",
    "JavaScript",
    "E-Commerce",
    "Responsive Design",
    "Product Management",
    "SEO Optimization"
  ],
  github: "#",
  live: "https://shopingworld.co.uk/",
  image: "/projects/store.png",
  color: "from-blue-500 to-purple-600"
}
];
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
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
          className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${project.color} p-[1.5px] mb-6`}
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          </div>
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
