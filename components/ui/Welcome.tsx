"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/utils/animation";
import { Terminal, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Terminal,
        title: "Welcome to My Digital Space",
        description: "Where innovation meets creativity"
    },
    {
        icon: Code2,
        title: "Crafting Digital Experiences",
        description: "Through clean code and thoughtful design"
    },
    {
        icon: Rocket,
        title: "Let's Build Something Amazing",
        description: "Transforming ideas into reality"
    }
];

// Particle component for the rain effect
const Particle = ({ delay = 0 }) => {
  // Increase dimensions for better visibility
  const width = Math.random() < 0.2 ? 3 : Math.random() < 0.6 ? 2 : 1; // More variation in width
  const height = 30 + Math.random() * 60; // Longer streaks (30-90px)
  const left = `${Math.random() * 100}%`; // Random horizontal position
  const initialY = -Math.random() * 100; // Random starting point above viewport
  
  // Decide particle type - some with glow effect
  const hasGlow = Math.random() < 0.3;
  
  return (
    <motion.div
      className={`absolute ${hasGlow ? 'shadow-[0_0_8px_#CBACF9] shadow-purple' : ''}`}
      style={{
        left,
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(to bottom, #CBACF9 0%, rgba(203, 172, 249, 0.6) 70%, transparent 100%)`,
      }}
      initial={{ 
        opacity: 0, 
        y: initialY,
      }}
      animate={{ 
        opacity: [0, hasGlow ? 1 : 0.8, 0], 
        y: [initialY, `${100 + Math.random() * 20}vh`],
      }}
      transition={{ 
        duration: 1.5 + Math.random() * 2, // Random duration between 1.5-3.5s
        ease: "linear",
        repeat: Infinity,
        delay: delay,
        repeatDelay: Math.random() * 0.5
      }}
    />
  );
};

// Create multiple particles
const RainEffect = ({ count = 100 }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(count)].map((_, i) => (
        <Particle key={i} delay={i * 0.06} />
      ))}
    </div>
  );
};

interface WelcomeProps {
  onComplete: () => void;
}

export function Welcome({ onComplete }: WelcomeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsComplete(true);
        setTimeout(() => onComplete(), 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black-100"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rain effect with increased visibility */}
      <RainEffect count={100} />
      
      {/* Additional static lines for visual interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[1.5px] bg-purple/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${20 + Math.random() * 80}px`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            steps.map((step, index) => {
              if (currentStep !== index) return null;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="mb-8 inline-block"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-purple/20 flex items-center justify-center mx-auto backdrop-blur-sm">
                      <Icon className="w-10 h-10 text-purple" />
                    </div>
                  </motion.div>
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    variants={fadeIn}
                  >
                    {step.title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-white-100"
                    variants={fadeIn}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-t-2 border-r-2 border-purple rounded-full animate-spin" />
                  <div className="absolute inset-2 border-t-2 border-l-2 border-purple/50 rounded-full animate-spin-slow" />
                  <div className="absolute inset-4 border-b-2 border-r-2 border-blue-100/70 rounded-full animate-spin-slower" />
                </div>
              </div>
              <p className="text-xl font-medium text-purple animate-pulse">
                Preparing your experience...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Adding a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-200/80 to-black-100 z-0" />
      
      {/* Add glow effects for more ambiance */}
      <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-purple/5 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-blue-100/5 rounded-full filter blur-3xl z-0" />
    </motion.div>
  );
}