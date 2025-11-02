'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  size?: 'sm' | 'md';
}

export default function FloatingParticles({ 
  count = 8, 
  className = '',
  size = 'sm' 
}: FloatingParticlesProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate stable positions based on index (not random)
  const getStablePosition = (index: number, total: number) => {
    // Use a pseudo-random but consistent seed based on index
    const seed = index * 123.456;
    const left = ((Math.sin(seed) * 50 + 50) + index * (100 / total)) % 100;
    const top = ((Math.cos(seed * 0.7) * 50 + 50) + index * (100 / total)) % 100;
    return { left, top };
  };

  if (!isMounted) return null;

  const sizeClass = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';
  const particleColor = size === 'sm' ? 'bg-primary' : 'bg-white';

  return (
    <>
      {[...Array(count)].map((_, i) => {
        const position = getStablePosition(i, count);
        return (
          <motion.div
            key={i}
            className={`absolute ${sizeClass} ${particleColor} rounded-full ${className}`}
            animate={{
              x: [0, (Math.sin(i) * 50 - 25)],
              y: [0, (Math.cos(i * 0.7) * 50 - 25)],
              opacity: [0, 0.8, 0],
              scale: size === 'md' ? [0, 1.5, 0] : [0, 1, 0]
            }}
            transition={{
              duration: 3 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.max(10, Math.min(90, position.left))}%`,
              top: `${Math.max(10, Math.min(90, position.top))}%`
            }}
          />
        );
      })}
    </>
  );
}
