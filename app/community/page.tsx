'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Heart, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CommunityPage() {
  const { t, direction, locale } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      age: 34,
      type: 'Type 1 Diabetes',
      quote:
        "Cura changed my life. After 10 years of struggling with diabetes, I finally have the support and technology I need. The artificial pancreas program gave me my freedom back.",
      image: '👩‍⚕️',
    },
    {
      name: 'Mohamed Hassan',
      age: 52,
      type: 'Type 2 Diabetes',
      quote:
        "I wish I found Cura years ago. The team doesn't just treat my diabetes—they treat me as a person. The nutrition program helped me lose 15kg and reduce my medications.",
      image: '👨‍💼',
    },
    {
      name: 'Layla Ibrahim',
      age: 28,
      type: 'Gestational Diabetes',
      quote:
        "Being pregnant with diabetes was scary, but Cura's pregnancy program made me feel safe and supported. My baby and I are both healthy thanks to their care.",
      image: '👩',
    },
    {
      name: 'Omar Khaled',
      age: 16,
      type: 'Type 1 Diabetes',
      quote:
        "The pediatric team at Cura understands what it's like to be a teenager with diabetes. They helped me manage school, sports, and my health without feeling different.",
      image: '👦',
    },
  ];

  const blogPosts = t.community.blog.posts;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
              {t.community.title}
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.community.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patient Testimonials Slider */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
              {t.community.testimonials}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-5xl">
                  {testimonials[currentTestimonial].image}
                </div>
              </div>

              <Quote className="w-12 h-12 text-primary dark:text-secondary mx-auto mb-6 opacity-50" />

              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-2">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {locale === 'ar' ? 'العمر' : 'Age'} {testimonials[currentTestimonial].age} •{' '}
                  {testimonials[currentTestimonial].type}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-primary hover:bg-secondary text-white rounded-full transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-primary w-8'
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-primary hover:bg-secondary text-white rounded-full transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
              {t.community.videoStories.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t.community.videoStories.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.community.videoStories.stories.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{video.patient}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-4">
              {t.community.blog.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t.community.blog.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-primary dark:text-secondary font-semibold group-hover:underline">
                      {t.common.readMore} →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-secondary transition-all hover:scale-105 shadow-lg"
            >
              {t.community.blog.viewAll}
            </a>
          </motion.div>
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
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.community.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.community.cta.subtitle}
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

