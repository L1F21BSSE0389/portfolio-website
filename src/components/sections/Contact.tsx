'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 md:px-12 bg-[#050816] flex flex-col justify-center overflow-hidden">
      {/* Background glow auras */}
      <div className="absolute top-[20%] right-[5%] w-[350px] h-[350px] bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full filter blur-[90px] pointer-events-none" />

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
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Contact <span className="text-[#7C3AED]">Me</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white">Let's discuss your next project</h3>
              <p className="text-[#A0AEC0] text-sm md:text-base leading-relaxed font-sans">
                Whether you need a custom Laravel portal, WordPress site development, frontend React views, REST APIs, or automated workflow connections, feel free to reach out. I will respond within 24 hours.
              </p>
            </div>

            {/* Links List */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 group-hover:bg-[#00E5FF] group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-[#A0AEC0] block font-sans">EMAIL</span>
                  <a href="mailto:aabdulrehmann10@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base font-semibold">
                    aabdulrehmann10@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-[#A0AEC0] block font-sans">PHONE</span>
                  <a href="tel:+923086040810" className="text-white hover:text-purple-400 transition-colors duration-300 text-sm md:text-base font-semibold">
                    +92 308 6040810
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 group-hover:bg-[#00E5FF] group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-[#A0AEC0] block font-sans">LINKEDIN</span>
                  <a href="https://www.linkedin.com/in/abdul-rehman-ba699a2b5" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base font-semibold">
                    linkedin.com/in/abdul-rehman-ba699a2b5
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-[#A0AEC0] block font-sans">GITHUB</span>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 text-sm md:text-base font-semibold">
                    github.com/abdul-rehman
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-cyan-400 mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold font-display text-white mb-2">Message Sent!</h4>
                <p className="text-[#A0AEC0] text-sm max-w-sm font-sans">
                  Thank you for reaching out. Your query has been routed to <strong>aabdulrehmann10@gmail.com</strong>. I will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs text-[#A0AEC0] font-sans font-semibold uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/40 transition-colors duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs text-[#A0AEC0] font-sans font-semibold uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/40 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs text-[#A0AEC0] font-sans font-semibold uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/40 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-end">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group disabled:opacity-50 cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-transparent uppercase tracking-wider gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="h-4 w-4 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      </span>
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
