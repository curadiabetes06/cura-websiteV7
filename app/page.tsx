'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Eye,
  Activity,
  Users,
  FlaskConical,
  Salad,
  UserCheck,
  Baby,
  Stethoscope,
  Award,
  Zap,
  ChevronRight,
} from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import HeroMorph from '@/components/HeroMorph';
import FloatingParticles from '@/components/FloatingParticles';

export default function ElegantHomePage() {
  const { t, locale } = useLanguage();

  // Services matching the visual identity
  const featuredServices = [
    { icon: Heart, title: 'Cardiology', subtitle: 'Heart Health Specialists' },
    { icon: Eye, title: 'Ophthalmology', subtitle: 'Eye Care & Retina' },
    { icon: Activity, title: 'Nephrology', subtitle: 'Kidney Health' },
    { icon: FlaskConical, title: 'Laboratory', subtitle: 'Point-of-Care Testing' },
    { icon: Salad, title: 'Nutrition', subtitle: 'Personalized Plans' },
    { icon: UserCheck, title: 'Care Ambassador', subtitle: 'Dedicated Support' },
    { icon: Baby, title: 'Pediatrics', subtitle: 'Children\'s Care' },
    { icon: Stethoscope, title: 'Endocrinology', subtitle: 'Diabetes Specialists' },
  ];

  const programs = [
    { icon: Award, title: 'DO IT Program', subtitle: 'Diabetes Optimization' },
    { icon: Zap, title: 'AID Program', subtitle: 'Automated Insulin Delivery' },
    { icon: Users, title: 'Group Education', subtitle: 'Community Learning' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900">
        {/* Hero Section - Elegant with Morphing */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#044D82] via-[#0561A3] to-[#87CDFF]">
          {/* Dynamic Morphing Canvas Background */}
          <HeroMorph />

          {/* Animated Gradient Layers - Darker overlay */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(255, 221, 135, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 70%, rgba(255, 221, 135, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(135, 205, 255, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(255, 221, 135, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
            {/* Animated Logo GIF - Bigger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1,
                type: 'spring',
                stiffness: 80,
                damping: 12
              }}
              className="mb-3 flex items-center justify-center"
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                {/* Stronger Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full blur-[100px] opacity-40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                
                <Image
                  src="/logo-animation.gif"
                  alt="Cura Diabetes"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                  priority
                  loading="eager"
                  unoptimized
                />
              </motion.div>
            </motion.div>

            {/* Heading - Pure White for Contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight text-center"
            >
              {t.home.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-white font-light max-w-4xl mx-auto leading-relaxed text-center"
            >
              {t.home.hero.subtitle}
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="w-8 h-14 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-2 h-3 bg-white rounded-full"
                  animate={{ y: [0, 24, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>

        </section>


        {/* Programs Section with Scroll Morph */}
        <motion.section 
          className="py-32 bg-gradient-to-b from-[#87CDFF]/20 via-white to-white dark:from-[#87CDFF]/10 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {/* Morphing Background Shape */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ scale: 0.8, rotate: 0 }}
            whileInView={{ scale: 1.2, rotate: 45 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#87CDFF] to-[#FFDD87] rounded-full blur-3xl" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Featured Program Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary to-[#87CDFF] p-16 text-white flex items-center">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-light mb-6">
                      {t.home.hero.title}
                    </h3>
                    <p className="text-xl opacity-90 mb-8 font-light leading-relaxed">
                      {t.home.hero.subtitle}
                    </p>
                    <Link
                      href="/artificial-pancreas"
                      className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-[#FFF8E8] transition-all hover:scale-105"
                    >
                      <span>{locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </div>
                <div className="bg-[#FFF8E8] dark:bg-slate-700 p-16 flex items-center justify-center relative overflow-hidden">
                  <motion.div 
                    className="relative w-64 h-64"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <Image
                      src="/logo-animation.gif"
                      alt="Cura Programs"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </motion.div>
                  
                  {/* Floating particles */}
                  <FloatingParticles count={8} size="sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Cura - Clean Statement */}
        <motion.section 
          className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Morphing blob */}
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#87CDFF]/20 to-[#FFDD87]/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-6xl font-light text-primary dark:text-white mb-8 leading-tight">
                  {locale === 'ar' ? 'نموذج رعاية صحية يدور حولك' : 'A Healthcare Model That Revolves Around You'}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
                  {t.about.mission.text1}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  {[
                    { number: '01', title: locale === 'ar' ? 'شامل' : 'Comprehensive', text: locale === 'ar' ? 'رعاية متعددة التخصصات' : 'Complete multidisciplinary care' },
                    { number: '02', title: locale === 'ar' ? 'متميز' : 'Concierge', text: locale === 'ar' ? 'اهتمام شخصي' : 'Personalized attention' },
                    { number: '03', title: locale === 'ar' ? 'حديث' : 'Cutting-Edge', text: locale === 'ar' ? 'أحدث التقنيات' : 'Latest technology' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-[#F8FCFF] dark:from-slate-800 dark:to-slate-700 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="text-6xl font-light text-[#87CDFF] mb-4">
                        {item.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-primary dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-light">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <Link href="/why-cura">
                  <motion.button
                    className="inline-flex items-center mt-16 px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{locale === 'ar' ? 'اكتشف لماذا كيورا' : 'Discover Why Cura'}</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Artificial Pancreas Program Section */}
        <motion.section 
          className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Elegant Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/20 to-transparent dark:from-slate-900/40 dark:via-slate-950/20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
                >
                  <Award className="w-4 h-4 text-primary dark:text-secondary" />
                  <span className="text-sm tracking-wide font-medium text-primary/90 dark:text-secondary/90">
                    {locale === 'ar' ? 'برنامج متخصص' : 'Specialized Program'}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-slate-900 dark:text-white"
                  style={{ lineHeight: '1.1' }}
                >
                  <span className="font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent dark:from-secondary dark:to-cyan-300">
                    {t.artificialPancreas.hero.title}
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-light mb-12"
                >
                  {t.artificialPancreas.hero.subtitle}
                </motion.p>

                {/* Decorative Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/30 mb-12"
                />
              </motion.div>

              {/* Program Highlights Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2.5rem] border border-white/50 dark:border-slate-800/70 bg-white/80 dark:bg-slate-900/75 backdrop-blur-2xl p-8 md:p-12 shadow-[0_40px_100px_-40px_rgba(4,77,130,0.55)] dark:shadow-[0_40px_100px_-40px_rgba(15,23,42,0.8)]"
              >
                {/* Subtle Background Elements */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/20 rounded-[2.5rem]" />
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <p className="text-sm font-medium text-primary/70 dark:text-secondary/70 mb-4">
                      {locale === 'ar' ? 'الأول في الشرق الأوسط وأفريقيا' : 'First in Middle East, Africa & Southern/Eastern Europe'}
                    </p>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-8">
                      {t.artificialPancreas.overview.text}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      { 
                        title: locale === 'ar' ? 'الأسبوع الأول' : 'Week 1: DO IT Program',
                        subtitle: t.artificialPancreas.doitProgram.subtitle,
                        color: 'from-green-500 to-emerald-500'
                      },
                      { 
                        title: locale === 'ar' ? 'الأسبوع الثاني' : 'Week 2: AID Program',
                        subtitle: t.artificialPancreas.aidProgram.subtitle,
                        color: 'from-secondary to-cyan-500'
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                        className="group"
                      >
                        <div className="relative h-full rounded-3xl border border-slate-200/60 bg-white/50 dark:border-slate-800/60 dark:bg-slate-900/30 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-white/80 dark:hover:bg-slate-900/50 hover:border-slate-300/60 dark:hover:border-slate-700/60 hover:shadow-xl">
                          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60`} />
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/artificial-pancreas">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-2"
                    >
                      {t.artificialPancreas.hero.cta}
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-32 bg-gradient-to-br from-primary via-[#0561A3] to-[#87CDFF] relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Animated particles */}
          <FloatingParticles count={12} size="md" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
                {locale === 'ar' ? 'هل أنت مستعد لتحويل رعايتك؟' : 'Ready to Transform Your Care?'}
              </h2>
              <p className="text-2xl text-white/90 mb-12 font-light leading-relaxed">
                {locale === 'ar' ? 'انضم إلى آلاف المرضى الذين يختبرون رعاية السكري على مستوى عالمي' : 'Join thousands of patients experiencing world-class diabetes care'}
              </p>
              <Link href="/patient-portal">
                <motion.button
                  className="inline-flex items-center px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-[#FFF8E8] transition-all shadow-2xl"
                  whileHover={{ scale: 1.1, boxShadow: '0 20px 60px rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{locale === 'ar' ? 'ابدأ اليوم' : 'Get Started Today'}</span>
                  <ChevronRight className="w-6 h-6 ml-3" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
  );
}

