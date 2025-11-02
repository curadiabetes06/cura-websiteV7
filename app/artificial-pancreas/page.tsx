'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Plane,
  GraduationCap,
  Activity,
  PhoneCall,
  Package,
  Award,
  Clock,
  HeartPulse,
} from 'lucide-react';

export default function ArtificialPancreasPage() {
  const { t, locale } = useLanguage();
  
  // Mouse tracking for interactive gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const timelinePhases = [
    {
      id: 'arrival',
      phase: t.artificialPancreas.timeline.arrival.phase,
      duration: t.artificialPancreas.timeline.arrival.duration,
      icon: Plane,
      color: 'from-accent to-orange',
      items: t.artificialPancreas.timeline.arrival.items,
    },
    {
      id: 'week1',
      phase: t.artificialPancreas.timeline.week1.phase,
      duration: t.artificialPancreas.timeline.week1.duration,
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      items: t.artificialPancreas.timeline.week1.items,
    },
    {
      id: 'week2',
      phase: t.artificialPancreas.timeline.week2.phase,
      duration: t.artificialPancreas.timeline.week2.duration,
      icon: Activity,
      color: 'from-secondary to-cyan-500',
      items: t.artificialPancreas.timeline.week2.items,
    },
    {
      id: 'included',
      phase: t.artificialPancreas.timeline.includes.phase,
      duration: t.artificialPancreas.timeline.includes.duration,
      icon: Package,
      color: 'from-primary to-secondary',
      items: t.artificialPancreas.timeline.includes.items,
    },
    {
      id: 'followup',
      phase: t.artificialPancreas.timeline.followup.phase,
      duration: t.artificialPancreas.timeline.followup.duration,
      icon: PhoneCall,
      color: 'from-purple-500 to-indigo-500',
      items: t.artificialPancreas.timeline.followup.items,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 relative">
      {/* Animated Interactive Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Interactive Gradient Following Mouse */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(135,205,255,0.4) 0%, transparent 70%)',
            x: mouseXSpring,
            y: mouseYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30 dark:opacity-20"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(135,205,255,0.3) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(255,221,135,0.25) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(4,77,130,0.2) 0%, transparent 70%)',
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Subtle Wave Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10 dark:opacity-5"
          style={{
            background: 'linear-gradient(to top, rgba(135,205,255,0.3), transparent)',
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-white/40 to-transparent dark:from-slate-900/60 dark:via-slate-950/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
            >
              <Award className="w-4 h-4 text-primary dark:text-secondary" />
              <span className="text-sm tracking-wide font-medium text-primary/90 dark:text-secondary/90">
                {t.artificialPancreas.timeline.badge}
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
              <span className="font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent dark:from-secondary dark:to-cyan-300">
                {t.artificialPancreas.hero.title}
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl md:text-2xl leading-relaxed text-slate-600 dark:text-slate-400 font-light mb-12"
            >
              {t.artificialPancreas.hero.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                {t.artificialPancreas.hero.cta}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-px w-32 mx-auto mt-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/30"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
              {t.artificialPancreas.overview.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {t.artificialPancreas.overview.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 dark:opacity-30" />

            {/* Timeline Items */}
            {timelinePhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: 'backOut' }}
                  className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} shadow-lg flex items-center justify-center`}
                >
                  <phase.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl border border-slate-200/60 bg-white/80 dark:border-slate-800/60 dark:bg-slate-900/50 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Top Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${phase.color} opacity-60`} />

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm mb-4">
                      <Clock className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {phase.duration}
                      </span>
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
                      {phase.phase}
                    </h3>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + itemIndex * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                        >
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} flex-shrink-0`} />
                          <span className="text-sm md:text-base leading-relaxed font-light">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section id="join" className="py-32 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 dark:border-primary/20 bg-gradient-to-br from-slate-50/80 to-white/80 dark:from-slate-900/80 dark:to-slate-950/80 backdrop-blur-xl p-16 text-center">
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
                    <HeartPulse className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                  {t.artificialPancreas.finalCta.text}
                  <br />
                  {t.artificialPancreas.finalCta.text2}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10"
                >
                  {t.artificialPancreas.finalCta.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="/patient-portal"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  >
                    {t.artificialPancreas.finalCta.button}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-medium text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                  >
                    {t.common.contactUs}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

