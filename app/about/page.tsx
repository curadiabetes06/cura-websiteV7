'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Users, Target, Award } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';

export default function AboutPage() {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const values = [
    {
      icon: Heart,
      title: t.about.values.compassionateCare.title,
      description: t.about.values.compassionateCare.description,
    },
    {
      icon: Users,
      title: t.about.values.teamExcellence.title,
      description: t.about.values.teamExcellence.description,
    },
    {
      icon: Target,
      title: t.about.values.patientCentered.title,
      description: t.about.values.patientCentered.description,
    },
    {
      icon: Award,
      title: t.about.values.clinicalExcellence.title,
      description: t.about.values.clinicalExcellence.description,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Gradient Background with Cura Loop Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
          {/* Decorative Loop Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          {/* Floating Particles */}
          <FloatingParticles count={15} size="sm" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-primary dark:text-secondary mb-6"
              >
                {t.about.title}
              </motion.h1>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                    {t.about.mission.title}
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t.about.mission.text1}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Animated Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.2,
                type: 'spring',
                stiffness: 80,
                damping: 12,
                delay: 0.3
              }}
              className="relative h-96 lg:h-[500px] flex items-center justify-center"
            >
              {/* Elegant Glow Background */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(4, 77, 130, 0.15) 0%, transparent 70%)',
                    'radial-gradient(circle at 30% 40%, rgba(135, 205, 255, 0.2) 0%, transparent 70%)',
                    'radial-gradient(circle at 70% 60%, rgba(255, 221, 135, 0.15) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(4, 77, 130, 0.15) 0%, transparent 70%)',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Animated Glow Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(135, 205, 255, 0.3) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 221, 135, 0.25) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              {/* Animated Logo Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center z-10"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {/* Outer Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Animated Logo GIF */}
                <div className="relative w-full h-full z-10">
                  <Image
                    src="/logo-animation.gif"
                    alt="Cura Diabetes Animated Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    unoptimized
                  />
                </div>

                {/* Floating Light Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                    style={{
                      left: `${50 + Math.sin(i * Math.PI / 4) * 60}%`,
                      top: `${50 + Math.cos(i * Math.PI / 4) * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-soft rounded-3xl p-12 shadow-xl">
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                {t.about.mission.text2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whole-Body Care Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-6">
                {t.about.wholeCare.title}
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.about.wholeCare.text}
              </p>
            </div>

            {/* Care Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.about.wholeCare.areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">
                    {area}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medical Founder Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
                {t.about.medicalFounder.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {t.about.medicalFounder.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/dr-osama-hamdy.png"
                    alt="Dr. Osama Hamdy - Medical Founder"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-2">
                      {t.about.medicalFounder.name}
                    </h3>
                    <p className="text-xl text-secondary dark:text-cyan-400 font-semibold mb-4">
                      {t.about.medicalFounder.role}
                    </p>
                  </div>

                  <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p className="text-lg leading-relaxed">
                      {t.about.medicalFounder.bio1}
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      {t.about.medicalFounder.bio2}
                    </p>

                    <div className="pt-4 border-t border-slate-300 dark:border-slate-600">
                      <p className="text-base text-slate-600 dark:text-slate-400">
                        <span className="font-semibold">{t.about.medicalFounder.achievements}</span> {t.about.medicalFounder.achievementsText}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
              {t.about.values.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t.about.values.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.partnerForLife.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.about.partnerForLife.subtitle}
            </p>
            <a
              href="/patient-portal"
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-2xl"
            >
              {t.common.getStarted}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

