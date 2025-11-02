'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  Microscope, 
  Stethoscope, 
  Brain, 
  Pill,
  Activity,
  Shield,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyCuraPage() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  const umbrellaScale = useTransform(scrollYProgress, [0, 0.6], [1.45, 1.1]);
  const heroHighlights: string[] = t.whyCura.hero?.highlights ?? [];
  const highlightIcons = [Shield, Sparkles, Activity];

  const services = [
    {
      icon: Stethoscope,
      title: t.services.list.specialists.title,
      description: t.services.list.specialists.description,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Microscope,
      title: t.services.list.labTesting.title,
      description: t.services.list.labTesting.description,
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Heart,
      title: t.services.list.nutrition.title,
      description: t.services.list.nutrition.description,
      gradient: 'from-red-500 to-orange-500',
      delay: 0.3
    },
    {
      icon: Brain,
      title: t.services.list.wellness.title,
      description: t.services.list.wellness.description,
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.4
    },
    {
      icon: Pill,
      title: t.services.list.insulinDelivery.title,
      description: t.services.list.insulinDelivery.description,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.5
    },
    {
      icon: Activity,
      title: t.services.list.monitoring.title,
      description: t.services.list.monitoring.description,
      gradient: 'from-yellow-500 to-amber-500',
      delay: 0.6
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Elegant Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/20 to-transparent dark:from-slate-900/40 dark:via-slate-950/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      </div>

      {/* Coded Umbrella Background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.08] dark:opacity-[0.06]"
        style={{ 
          scale: umbrellaScale,
          transformOrigin: '50% 35%'
        }}
        animate={{ y: [0, -15, 10, 0] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <div className="w-[120vw] h-[120vh] -translate-y-16">
          <CodedUmbrella />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Elegant Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary animate-pulse" />
                <span className="text-sm tracking-wide font-medium text-primary/90 dark:text-secondary/90">
                  {t.whyCura.subtitle}
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-slate-900 dark:text-white"
                style={{ lineHeight: '1.1' }}
              >
                <span className="font-extralight">{t.whyCura.hero?.title?.split(' ')[0] ?? 'Under'}</span>
                <br />
                <span className="font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent dark:from-secondary dark:to-cyan-300">
                  {t.whyCura.hero?.title?.split(' ').slice(1).join(' ') ?? 'One Umbrella'}
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-light mb-16"
              >
                {t.whyCura.hero?.description ?? t.whyCura.pillars.comprehensive.description}
              </motion.p>

              {/* Elegant Feature Pills */}
              {heroHighlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-3 mb-20"
                >
                  {heroHighlights.map((highlight, index) => {
                    const HighlightIcon = highlightIcons[index % highlightIcons.length];
                    return (
                      <motion.div
                        key={`${highlight}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur transition-all duration-500 rounded-full" />
                        <div className="relative flex items-center gap-2.5 px-5 py-3 rounded-full border border-slate-200/80 bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-300">
                          <HighlightIcon className="w-4 h-4 text-primary/70 dark:text-secondary/70" strokeWidth={2} />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {highlight}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Decorative Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/30"
              />
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-32"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 dark:border-primary/20 bg-gradient-to-br from-slate-50/80 to-white/80 dark:from-slate-900/80 dark:to-slate-950/80 backdrop-blur-xl p-16 text-center"
            >
              {/* Subtle Background Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
                    <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                  {t.whyCura.pillars.comprehensive.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                  {t.whyCura.pillars.comprehensive.details}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Elegant Service Card Component
function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient, 
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  gradient: string; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white/50 dark:border-slate-800/60 dark:bg-slate-900/30 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/80 dark:hover:bg-slate-900/50 hover:border-slate-300/60 dark:hover:border-slate-700/60 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-950/50">
        
        {/* Subtle Top Accent */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} opacity-40`} />
        
        {/* Icon */}
        <div className="mb-6 flex items-start justify-between">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} opacity-90 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-100`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Coded Umbrella Background Component
function CodedUmbrella() {
  const ribPositions = [0.1, 0.24, 0.38, 0.5, 0.62, 0.76, 0.9];
  const dropletPositions = [
    { cx: 360, delay: 0 },
    { cx: 480, delay: 0.35 },
    { cx: 720, delay: 0.7 },
    { cx: 880, delay: 1.05 },
  ];

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="canopyGradient" x1="200" y1="260" x2="1000" y2="720">
          <stop offset="0%" stopColor="#044D82" />
          <stop offset="55%" stopColor="#0B6FAB" />
          <stop offset="100%" stopColor="#87CDFF" />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="280" y1="320" x2="920" y2="520">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="ribGradient" x1="600" y1="240" x2="600" y2="720">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>
        <linearGradient id="handleGradient" x1="600" y1="720" x2="520" y2="1020">
          <stop offset="0%" stopColor="#0B6FAB" />
          <stop offset="100%" stopColor="#044D82" />
        </linearGradient>
        <radialGradient id="handleHighlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#87CDFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#044D82" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="groundGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(4,77,130,0.25)" />
          <stop offset="100%" stopColor="rgba(4,77,130,0)" />
        </radialGradient>
        <radialGradient id="tipGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFDD87" />
          <stop offset="100%" stopColor="#87CDFF" />
        </radialGradient>
        <radialGradient id="raindropGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(135,205,255,0.4)" />
        </radialGradient>
      </defs>

      <motion.ellipse
        cx="600"
        cy="830"
        rx="420"
        ry="190"
        fill="url(#groundGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.28, 0.18, 0.28] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.g
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <motion.g
          animate={{ y: [-10, 4, -10] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.path
            d="M200 640 Q600 200 1000 640 L1000 720 Q940 693 880 720 Q820 693 760 720 Q700 693 640 720 Q580 693 520 720 Q460 693 400 720 Q340 693 280 720 Q240 693 200 720 Z"
            fill="url(#canopyGradient)"
            stroke="rgba(4,77,130,0.45)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            d="M240 640 Q600 240 960 640 L960 685 Q600 535 240 685 Z"
            fill="url(#highlightGradient)"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M200 720 Q340 690 480 720 Q600 760 720 720 Q860 690 1000 720"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={4}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="12 18"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          {ribPositions.map((position, index) => {
            const x = 200 + 800 * position;
            const isCenter = Math.abs(position - 0.5) < 0.01;
            return (
              <motion.line
                key={`rib-${index}`}
                x1={600}
                y1={240}
                x2={x}
                y2={720}
                stroke="url(#ribGradient)"
                strokeWidth={isCenter ? 5 : 3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.6, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
              />
            );
          })}
          <motion.line
            x1={600}
            y1={220}
            x2={600}
            y2={720}
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={6}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.75 }}
            transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }}
          />
          <motion.path
            d="M600 720 L600 980 Q600 1035 540 1035"
            stroke="url(#handleGradient)"
            strokeWidth={12}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.9, pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.6, ease: 'easeOut' }}
          />
          <motion.circle
            cx={540}
            cy={1035}
            r={18}
            fill="url(#handleHighlight)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 2, delay: 1.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 4 }}
          />
          <motion.circle
            cx={600}
            cy={215}
            r={16}
            fill="url(#tipGlow)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth={3}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          />
          <motion.circle
            cx={600}
            cy={720}
            r={10}
            fill="rgba(255,255,255,0.85)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          />
        </motion.g>
      </motion.g>

      {dropletPositions.map(({ cx, delay }, index) => (
        <motion.ellipse
          key={`drop-${index}`}
          cx={cx}
          rx={6}
          ry={14}
          cy={760}
          fill="url(#raindropGradient)"
          initial={{ opacity: 0, cy: 760 }}
          animate={{ opacity: [0, 0.7, 0], cy: [760, 820, 860] }}
          transition={{ duration: 4 + index * 0.3, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}
