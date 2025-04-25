"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Refined Particle component for a more subtle effect
const Particle = ({ delay = 0 }) => {
  // Much more subtle dimensions
  const width = Math.random() < 0.8 ? 1 : 2; // Mostly 1px lines
  const height = 20 + Math.random() * 40; // Shorter streaks (20-60px)
  const left = `${Math.random() * 100}%`; // Random horizontal position
  const initialY = -Math.random() * 100; // Random starting point above viewport
  
  // Fewer particles with glow
  const hasGlow = Math.random() < 0.15;
  
  return (
    <motion.div
      className="absolute rain-particle"
      style={{
        left,
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(to bottom, rgba(203, 172, 249, ${hasGlow ? 0.5 : 0.3}) 0%, rgba(203, 172, 249, 0.1) 70%, transparent 100%)`,
        zIndex: 1, // Lower z-index to ensure content priority
        boxShadow: hasGlow ? '0 0 3px rgba(203, 172, 249, 0.3)' : 'none',
        willChange: 'transform, opacity', // Performance optimization
        pointerEvents: 'none', // Ensure it doesn't block interactions
      }}
      initial={{ 
        opacity: 0, 
        y: initialY,
      }}
      animate={{ 
        opacity: [0, hasGlow ? 0.5 : 0.3, 0], // Much lower opacity
        y: [initialY, `${100 + Math.random() * 20}vh`],
      }}
      transition={{ 
        duration: 2 + Math.random() * 2, // Slightly faster
        ease: "linear",
        repeat: Infinity,
        delay: delay,
        repeatDelay: Math.random() * 0.5 + 0.5 // Longer delays between particles
      }}
    />
  );
};

// Static line element - much more subtle
const StaticLine = ({ index }: { index: number }) => {
  return (
    <div 
      className="absolute rain-particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 70}%`, // Only in top 70% of screen, avoid bottom clutter
        width: '1px',
        height: `${10 + Math.random() * 20}px`, // Much shorter
        background: 'rgba(203, 172, 249, 0.15)', // Very faint
        opacity: 0.1 + Math.random() * 0.15, // Very low opacity
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

interface RainEffectProps {
  particleCount?: number;
  staticLineCount?: number;
  isReduced?: boolean;
}

export function RainyEffect({ 
  particleCount = 50, // Reduced default count
  staticLineCount = 10, // Reduced static lines
  isReduced = false 
}: RainEffectProps) {
  // Further reduce particles for most contexts
  const actualParticleCount = isReduced ? Math.floor(particleCount / 2) : particleCount;
  const actualStaticLineCount = isReduced ? Math.floor(staticLineCount / 2) : staticLineCount;
  
  // SSR safety - ensure particles are only rendered on client
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  return (
    <>
      {/* Animated rain particles with much lower z-index and count */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {[...Array(actualParticleCount)].map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>
      
      {/* Minimal static lines, only in top portion */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {[...Array(actualStaticLineCount)].map((_, i) => (
          <StaticLine key={i} index={i} />
        ))}
      </div>
      
      {/* Much more subtle ambient glow */}
      <div className="fixed top-[30%] left-[30%] w-64 h-64 bg-purple/[0.01] rounded-full filter blur-3xl pointer-events-none" style={{ zIndex: 1 }} />
    </>
  );
}