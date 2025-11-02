'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MorphingShapeProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function MorphingShape({ 
  className = '', 
  color = '#87CDFF',
  size = 200 
}: MorphingShapeProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#044D82" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <motion.path
        d="M100,20 Q150,50 170,100 Q150,150 100,180 Q50,150 30,100 Q50,50 100,20 Z"
        fill="url(#gradient1)"
        filter="url(#glow)"
        animate={{
          d: [
            'M100,20 Q150,50 170,100 Q150,150 100,180 Q50,150 30,100 Q50,50 100,20 Z',
            'M100,30 Q160,60 180,100 Q160,140 100,170 Q40,140 20,100 Q40,60 100,30 Z',
            'M100,25 Q145,55 175,100 Q145,145 100,175 Q55,145 25,100 Q55,55 100,25 Z',
            'M100,20 Q150,50 170,100 Q150,150 100,180 Q50,150 30,100 Q50,50 100,20 Z',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
}

