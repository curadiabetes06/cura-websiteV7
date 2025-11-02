'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface AnimatedThemeToggleProps {
  isScrolled?: boolean;
}

export default function AnimatedThemeToggle({ isScrolled = false }: AnimatedThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      data-theme-toggle="true"
      className="relative group"
      aria-label="Toggle Theme"
      style={{ 
        cursor: 'pointer',
        pointerEvents: 'auto',
        zIndex: 30,
        position: 'relative'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Elegant Glass Container */}
      <div className={`relative p-3 rounded-2xl backdrop-blur-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-100/80 dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600'
          : 'bg-white/20 border border-white/40'
      }`}>
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="flex items-center justify-center"
            >
              <Moon className={`w-5 h-5 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ scale: 0, rotate: 180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -180, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="flex items-center justify-center"
            >
              <Sun className={`w-5 h-5 ${
                isScrolled ? 'text-amber-500' : 'text-white'
              }`} strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Elegant glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl blur-lg -z-10 ${
            isDark 
              ? 'bg-gradient-to-r from-indigo-400/30 to-purple-500/30' 
              : 'bg-gradient-to-r from-amber-400/30 to-orange-500/30'
          }`}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.button>
  );
}

