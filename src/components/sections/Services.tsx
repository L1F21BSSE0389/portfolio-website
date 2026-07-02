'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Globe2,
  Laptop,
  Cpu,
  Zap,
  Wrench,
  Shuffle,
  Bot,
  Settings,
} from 'lucide-react';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications constructed with robust backends and premium responsive frontends.',
    icon: Code2,
  },
  {
    title: 'Laravel Development',
    description: 'Custom enterprise-grade applications, packages, and secure web modules utilizing modern PHP frameworks.',
    icon: Server,
  },
  {
    title: 'WordPress Development',
    description: 'Premium custom themes, plugin architecture, multisite management, and WooCommerce integrations.',
    icon: Globe2,
  },
  {
    title: 'React Frontend',
    description: 'Highly interactive client side views built using React.js and Next.js for fluid visual experiences.',
    icon: Laptop,
  },
  {
    title: 'Backend APIs',
    description: 'Secure, RESTful, and GraphQL integrations with high-performance querying and JWT authorization.',
    icon: Cpu,
  },
  {
    title: 'Speed Optimization',
    description: 'Lighthouse score enhancement, server-side caching, asset minification, and database query tuning.',
    icon: Zap,
  },
  {
    title: 'Website Maintenance',
    description: 'Continuous security audits, backup configurations, server hosting, and bug troubleshooting updates.',
    icon: Wrench,
  },
  {
    title: 'Workflow Automation',
    description: 'Connecting business tools with automated workflows, custom scripts, webhooks, and cron executions.',
    icon: Shuffle,
  },
  {
    title: 'AI Integration',
    description: 'Deploying intelligence using OpenAI, WhatsApp bots, vector stores, and automated prompt processing.',
    icon: Bot,
  },
  {
    title: 'Custom Web Solutions',
    description: 'Tailored SaaS engineering, CRM setups, and customized inventory tools that resolve actual bottlenecks.',
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen py-24 px-6 md:px-12 bg-[#050816] flex flex-col justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full filter blur-[90px] pointer-events-none" />

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
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            My <span className="text-[#7C3AED]">Services</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group p-6 rounded-2xl bg-[#0a0f26]/40 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 hover:border-cyan-400/25 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] flex flex-col items-start gap-4"
              >
                {/* Border animation glow indicator */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Ambient glow */}
                <div className="absolute -left-16 -top-16 w-32 h-32 bg-gradient-to-br from-[#00E5FF]/5 to-transparent rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                {/* Service Icon */}
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-[#00E5FF] group-hover:text-slate-950 transition-all duration-300 border border-cyan-500/20 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-white mt-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#A0AEC0] text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
