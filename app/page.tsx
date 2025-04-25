"use client";
import clsx from "clsx";
import Hero from "@/components/Hero";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Welcome } from "@/components/ui/Welcome";
import { RainyEffect } from "@/components/animations/RainyEffect";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  
  return (
    <>
      {/* Much more subtle rain effect */}
      <RainyEffect isReduced={!showWelcome} particleCount={50} staticLineCount={10} />
      
      <AnimatePresence mode="wait">
        {showWelcome && <Welcome onComplete={() => setShowWelcome(false)} />}

        {!showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <main 
              className={clsx([
                'relative overflow-hidden mx-auto sm:px-10 px-5',
                'flex flex-col justify-center items-center',
                "bg-black-100 min-h-screen" // Solid background for readability
              ])}
            >
              {/* Content with higher z-index to ensure it's above the rain */}
              <div className='max-w-7xl w-full relative z-10'>
                <Hero />
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}