'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow fade-out animation to finish
          }, 400);
          return 100;
        }
        // Random increments for a more natural look
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] font-display"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px] animate-pulse delay-700" />

          <div className="relative flex flex-col items-center max-w-md w-full px-6">
            {/* Title / Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 text-center"
            >
              ABDUL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">REHMAN</span>
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-sm font-sans tracking-widest text-[#A0AEC0] uppercase mb-12 text-center"
            >
              Full Stack Software Engineer
            </motion.p>

            {/* Progress Container */}
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Percentage */}
            <div className="flex justify-between w-full text-xs font-sans text-[#A0AEC0]">
              <span>INITIALIZING SYSTEM...</span>
              <span className="font-mono text-cyan-400 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
