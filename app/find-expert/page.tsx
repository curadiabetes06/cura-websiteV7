'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Star, Calendar } from 'lucide-react';

export default function FindExpertPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = [
    'All',
    'Endocrinology',
    'Cardiology',
    'Nephrology',
    'Ophthalmology',
    'Podiatry',
    'Nutrition',
    'Psychology',
    'Pediatrics',
    'OB/GYN',
  ];

  const experts = [
    {
      name: 'Dr. Ahmed Mansour',
      specialty: 'Endocrinology',
      credentials: 'MD, FACE, CDE',
      experience: '20+ years',
      languages: ['English', 'Arabic'],
      rating: 4.9,
      reviews: 156,
      about:
        'Leading endocrinologist specializing in Type 1 diabetes and insulin pump therapy.',
      avatar: '👨‍⚕️',
    },
    {
      name: 'Dr. Layla El-Sayed',
      specialty: 'Endocrinology',
      credentials: 'MD, PhD',
      experience: '15+ years',
      languages: ['English', 'Arabic', 'French'],
      rating: 5.0,
      reviews: 203,
      about:
        'Expert in gestational diabetes and diabetes during pregnancy.',
      avatar: '👩‍⚕️',
    },
    {
      name: 'Dr. Mohamed Khalil',
      specialty: 'Cardiology',
      credentials: 'MD, FACC',
      experience: '18+ years',
      languages: ['English', 'Arabic'],
      rating: 4.8,
      reviews: 142,
      about:
        'Cardiovascular specialist focusing on diabetes-related heart disease prevention.',
      avatar: '👨‍⚕️',
    },
    {
      name: 'Dr. Fatma Hassan',
      specialty: 'Ophthalmology',
      credentials: 'MD, FACS',
      experience: '12+ years',
      languages: ['English', 'Arabic'],
      rating: 4.9,
      reviews: 98,
      about:
        'Retina specialist with expertise in diabetic retinopathy treatment.',
      avatar: '👩‍⚕️',
    },
    {
      name: 'Dr. Omar Nasser',
      specialty: 'Nephrology',
      credentials: 'MD, FASN',
      experience: '16+ years',
      languages: ['English', 'Arabic'],
      rating: 4.7,
      reviews: 87,
      about:
        'Kidney disease specialist focusing on diabetic nephropathy management.',
      avatar: '👨‍⚕️',
    },
    {
      name: 'Sarah Ibrahim',
      specialty: 'Nutrition',
      credentials: 'RD, CDE, MSc',
      experience: '10+ years',
      languages: ['English', 'Arabic'],
      rating: 5.0,
      reviews: 178,
      about:
        'Clinical nutritionist specializing in diabetes meal planning and carb counting.',
      avatar: '👩‍🍳',
    },
    {
      name: 'Dr. Heba Mostafa',
      specialty: 'Psychology',
      credentials: 'PhD, CBT',
      experience: '14+ years',
      languages: ['English', 'Arabic'],
      rating: 4.9,
      reviews: 121,
      about:
        'Clinical psychologist specializing in diabetes burnout and mental health.',
      avatar: '👩‍⚕️',
    },
    {
      name: 'Dr. Youssef Ali',
      specialty: 'Pediatrics',
      credentials: 'MD, FAAP',
      experience: '17+ years',
      languages: ['English', 'Arabic'],
      rating: 5.0,
      reviews: 215,
      about:
        'Pediatric endocrinologist specializing in childhood diabetes management.',
      avatar: '👨‍⚕️',
    },
  ];

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch =
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === 'All' || expert.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-soft">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-secondary mb-6">
              {t.findExpert.title}
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              World-class specialists dedicated to your diabetes care
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder={t.findExpert.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary shadow-lg text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex-shrink-0">
              {t.findExpert.filter}:
            </span>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedSpecialty === specialty
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-slate-600 dark:text-slate-400">
            Showing {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperts.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                    {expert.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary dark:text-secondary mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {expert.specialty}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      {expert.credentials}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {expert.rating}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    ({expert.reviews} reviews)
                  </span>
                </div>

                {/* Experience */}
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {expert.experience} experience
                  </span>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-white dark:bg-slate-600 rounded text-xs text-slate-600 dark:text-slate-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* About */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {expert.about}
                </p>

                {/* Book Button */}
                <button className="w-full py-3 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                  {t.findExpert.bookConsultation}
                </button>
              </motion.div>
            ))}
          </div>

          {filteredExperts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No experts found matching your search.
              </p>
            </div>
          )}
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
              Not Sure Which Expert You Need?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our care ambassadors can help you find the right specialist for your needs.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-2xl"
            >
              {t.common.contactUs}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

