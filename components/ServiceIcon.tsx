'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  delay?: number;
}

export default function ServiceIcon({ icon: Icon, title, subtitle, delay = 0 }: ServiceIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#FFF8E8] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Blue Header */}
      <div className="bg-primary py-3 px-4">
        <h3 className="text-white text-sm font-semibold tracking-wide uppercase text-center">
          {title}
        </h3>
      </div>

      {/* Icon Container */}
      <div className="relative p-8 flex flex-col items-center justify-center min-h-[160px]">
        {/* Icon with blue outline */}
        <div className="relative">
          <Icon 
            className="w-20 h-20 text-primary stroke-[1.5]" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Orange accent arrow */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-6 h-6"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, type: 'spring' }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#FF9B00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Subtitle if provided */}
        {subtitle && (
          <p className="mt-4 text-xs text-slate-600 text-center leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover effect - subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

