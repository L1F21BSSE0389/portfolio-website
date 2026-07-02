'use client';

import { motion } from 'framer-motion';
import { Layers, Terminal, Globe, Server, Database, Code, ShieldCheck, GitBranch, Cpu } from 'lucide-react';

const skills = [
  { name: 'Laravel', level: 90, icon: Server, color: 'from-[#FF2D20] to-orange-500' },
  { name: 'React.js', level: 88, icon: Code, color: 'from-[#61DAFB] to-cyan-500' },
  { name: 'Node.js', level: 85, icon: Terminal, color: 'from-[#339933] to-green-500' },
  { name: 'NestJS', level: 80, icon: Cpu, color: 'from-[#E0234E] to-red-400' },
  { name: 'WordPress', level: 92, icon: Globe, color: 'from-[#21759B] to-blue-500' },
  { name: 'Shopify', level: 85, icon: Layers, color: 'from-[#96BF48] to-green-400' },
  { name: 'PHP', level: 88, icon: Layers, color: 'from-[#777BB4] to-indigo-500' },
  { name: 'JavaScript', level: 90, icon: Cpu, color: 'from-[#F7DF1E] to-yellow-500' },
  { name: 'HTML & CSS', level: 92, icon: Code, color: 'from-[#E34F26] to-[#1572B6]' },
  { name: 'DevOps', level: 80, icon: ShieldCheck, color: 'from-[#2496ED] to-blue-400' },
  { name: 'SQL Database', level: 82, icon: Database, color: 'from-[#00758F] to-[#F29111]' },
  { name: 'C++', level: 75, icon: Terminal, color: 'from-[#00599C] to-blue-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center bg-[#050816]">
      {/* Glowing background blur */}
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full filter blur-[80px] pointer-events-none" />

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
            My Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Technical <span className="text-[#7C3AED]">Skills</span>
          </motion.h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group p-6 rounded-2xl glassmorphism border border-white/5 overflow-hidden transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_10px_35px_rgba(0,229,255,0.15)] flex flex-col justify-between min-h-[180px]"
              >
                {/* Background glow on hover */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-gradient-to-tr from-cyan-400/5 to-purple-500/5 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Icon Header */}
                  <div className={`p-3 bg-gradient-to-br ${skill.color} bg-opacity-10 text-white rounded-xl w-fit mb-4 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-semibold font-display text-base tracking-wide">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress bar info */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1 text-xs text-[#A0AEC0] font-sans">
                    <span>Proficiency</span>
                    <span className="font-mono text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
