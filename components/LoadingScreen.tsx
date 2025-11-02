'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Don't render on server
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Animated Logo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/logo-animation.gif"
              alt="Cura Diabetes Loading"
              fill
              className="object-contain"
              priority
              loading="eager"
              unoptimized
            />
          </div>

          {/* Loading Text */}
          <motion.div
            className="absolute bottom-20 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-lg text-primary font-semibold tracking-wider">
              LOADING
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

