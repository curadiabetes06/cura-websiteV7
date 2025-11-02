'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  FileText,
  FlaskConical,
  BarChart3,
  GraduationCap,
  Salad,
  Activity,
  Smartphone,
  Check,
} from 'lucide-react';

export default function PatientProcessPage() {
  const { t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      title: t.process.steps.admin.title,
      description: t.process.steps.admin.description,
      details:
        'Quick and easy registration process. We gather all your medical history and insurance information to ensure smooth care coordination.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      icon: FileText,
      title: t.process.steps.preVisit.title,
      description: t.process.steps.preVisit.description,
      details:
        'Complete a comprehensive health questionnaire and review your medical history with our team before your first visit.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      number: 3,
      icon: FlaskConical,
      title: t.process.steps.laboratory.title,
      description: t.process.steps.laboratory.description,
      details:
        'State-of-the-art point-of-care testing for HbA1c, lipid profile, kidney function, and more - all done on-site.',
      color: 'from-teal-500 to-green-500',
    },
    {
      number: 4,
      icon: BarChart3,
      title: t.process.steps.labResults.title,
      description: t.process.steps.labResults.description,
      details:
        'Review your test results immediately with your physician. No waiting days for results - we discuss them during your visit.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: 5,
      icon: GraduationCap,
      title: t.process.steps.education.title,
      description: t.process.steps.education.description,
      details:
        'Learn about diabetes management, medication, lifestyle modifications, and how to use your monitoring devices.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      number: 6,
      icon: Salad,
      title: t.process.steps.nutrition.title,
      description: t.process.steps.nutrition.description,
      details:
        'Work one-on-one with our nutritionist to create a meal plan that fits your lifestyle, culture, and health goals.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: 7,
      icon: Activity,
      title: t.process.steps.cgm.title,
      description: t.process.steps.cgm.description,
      details:
        'Get fitted with a continuous glucose monitor and learn how to interpret your data for better blood sugar control.',
      color: 'from-red-500 to-pink-500',
    },
    {
      number: 8,
      icon: Smartphone,
      title: t.process.steps.app.title,
      description: t.process.steps.app.description,
      details:
        'Download and set up the Cura app to track your health, communicate with your care team, and access all your medical records.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-soft">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-secondary mb-6">
              {t.process.title}
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Step by step, we're with you every moment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transform -translate-y-1/2" />

              {/* Timeline Steps */}
              <div className="relative grid grid-cols-8 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    {/* Icon Circle */}
                    <button
                      onClick={() =>
                        setSelectedStep(selectedStep === index ? null : index)
                      }
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all z-10 mb-4 group`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </button>

                    {/* Step Number */}
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg font-bold text-primary dark:text-secondary mb-3 border-2 border-primary dark:border-secondary">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-center text-slate-800 dark:text-slate-200 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 flex justify-center mt-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {step.description}
                  </p>
                  <button
                    onClick={() =>
                      setSelectedStep(selectedStep === index ? null : index)
                    }
                    className="text-primary dark:text-secondary font-semibold hover:underline"
                  >
                    {selectedStep === index ? 'Show Less' : 'Learn More'} →
                  </button>
                  <AnimatePresence>
                    {selectedStep === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                      >
                        <p className="text-slate-700 dark:text-slate-300">
                          {step.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Modal for Desktop */}
          <AnimatePresence>
            {selectedStep !== null && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="hidden lg:block mt-16 bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${steps[selectedStep].color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    {React.createElement(steps[selectedStep].icon, {
                      className: 'w-10 h-10 text-white',
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {steps[selectedStep].number}
                      </span>
                      <h3 className="text-3xl font-bold text-primary dark:text-secondary">
                        {steps[selectedStep].title}
                      </h3>
                    </div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                      {steps[selectedStep].description}
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {steps[selectedStep].details}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-orange mb-6"
          >
            {t.process.subtitle}
          </motion.h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary dark:text-secondary mb-12 text-center">
            What Makes Our Process Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Waiting',
                description:
                  'Everything happens in one visit - tests, results, consultations, and education.',
              },
              {
                title: 'No Gaps',
                description:
                  'Every specialist knows your full history and coordinates your care seamlessly.',
              },
              {
                title: 'No Confusion',
                description:
                  'Your care ambassador guides you through every step and answers all your questions.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  {benefit.description}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your first appointment and experience care that truly revolves around you.
            </p>
            <a
              href="/patient-portal"
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-2xl"
            >
              {t.common.bookNow}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

