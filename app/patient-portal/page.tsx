'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Mail,
  User,
  Phone,
  Calendar,
  HeartPulse,
  Users,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function PatientPortalPage() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    relationship: 'patient', // 'patient' or 'family'
    diabetesType: '',
    dateOfDiagnosis: '',
    currentMedications: '',
    otherInfo: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send data to Make.com webhook
      const webhookUrl = 'https://hook.us2.make.com/nugvrsp62ah08vivz9xumuni4y3i85kb';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          age: formData.age,
          phone: formData.phone,
          relationship: formData.relationship === 'patient' 
            ? (locale === 'ar' ? 'المريض' : 'Patient') 
            : (locale === 'ar' ? 'أحد أفراد العائلة' : 'Family Member'),
          diabetesType: formData.diabetesType,
          dateOfDiagnosis: formData.dateOfDiagnosis,
          currentMedications: formData.currentMedications,
          otherInfo: formData.otherInfo,
        }),
      });

      // Also submit to Google Apps Script (if needed for backup)
      const form = e.target as HTMLFormElement;
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzkf3CwFJ_A4IZ3DxksKQjebRKbpcInxwdNkwSXAZG_sw3S-_McM8e3nOBmfSot0Mjb/exec';
      
      // Submit to Google Apps Script via hidden iframe
      const formDataToSubmit = new FormData(form);
      fetch(scriptUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors',
      }).catch(() => {
        // Ignore errors for Google Apps Script submission
      });
      
      // Show success message
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          fullName: '',
          age: '',
          email: '',
          phone: '',
          relationship: 'patient',
          diabetesType: '',
          dateOfDiagnosis: '',
          currentMedications: '',
          otherInfo: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Elegant Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/20 to-transparent dark:from-slate-900/40 dark:via-slate-950/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      </div>

      {/* Registration Form Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary animate-pulse" />
                <User className="w-4 h-4 text-primary dark:text-secondary" />
                <span className="text-sm tracking-wide font-medium text-primary/90 dark:text-secondary/90">
                  {t.patientPortal.badge}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-slate-900 dark:text-white"
                style={{ lineHeight: '1.1' }}
              >
                <span className="font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent dark:from-secondary dark:to-cyan-300">
                  {t.patientPortal.heading1}
                </span>
                <br />
                <span className="font-extralight">{t.patientPortal.heading2}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-light mb-12"
              >
                {t.patientPortal.subtitle}
              </motion.p>

              {/* Decorative Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/30 mb-16"
              />
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] border border-white/50 dark:border-slate-800/70 bg-white/80 dark:bg-slate-900/75 backdrop-blur-2xl p-8 md:p-12 shadow-[0_40px_100px_-40px_rgba(4,77,130,0.55)] dark:shadow-[0_40px_100px_-40px_rgba(15,23,42,0.8)]"
            >
              {/* Subtle Background Elements */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/20 rounded-[2.5rem]" />
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-12 top-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <form 
                method="POST" 
                action="https://script.google.com/macros/s/AKfycbzkf3CwFJ_A4IZ3DxksKQjebRKbpcInxwdNkwSXAZG_sw3S-_McM8e3nOBmfSot0Mjb/exec"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-12 relative z-10"
              >
                {/* Hidden iframe for form submission */}
                <iframe 
                  name="hidden_iframe" 
                  id="hidden_iframe" 
                  style={{ display: 'none' }}
                  title="Form submission target"
                />
                {/* Personal Information Section */}
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
                        {t.patientPortal.personalInfo.title}
                      </h2>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-r from-primary to-secondary opacity-50" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.personalInfo.fullName} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-secondary transition-colors" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all font-light"
                          placeholder={t.patientPortal.personalInfo.placeholders.fullName}
                        />
                      </div>
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.personalInfo.age} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-secondary transition-colors" />
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          min="1"
                          max="120"
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all font-light"
                          placeholder={t.patientPortal.personalInfo.placeholders.age}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.personalInfo.email} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-secondary transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all font-light"
                          placeholder={t.patientPortal.personalInfo.placeholders.email}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.personalInfo.phone} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-secondary transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all font-light"
                          placeholder={t.patientPortal.personalInfo.placeholders.phone}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-slate-700/60" />

                {/* Relationship Section */}
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-cyan-500 shadow-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
                        {t.patientPortal.relationship.title}
                      </h2>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-r from-secondary to-cyan-500 opacity-50" />
                  </div>
                  <input
                    type="hidden"
                    name="relationship"
                    value={formData.relationship === 'patient' ? (locale === 'ar' ? 'المريض' : 'Patient') : (locale === 'ar' ? 'أحد أفراد العائلة' : 'Family Member')}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.button
                      type="button"
                      onClick={() => setFormData({ ...formData, relationship: 'patient' })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left backdrop-blur-sm ${
                        formData.relationship === 'patient'
                          ? 'border-primary bg-primary/10 dark:bg-primary/15 shadow-lg shadow-primary/10'
                          : 'border-slate-200/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/60 hover:border-primary/40 dark:hover:border-secondary/40'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.relationship === 'patient'
                              ? 'border-primary bg-primary shadow-md'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {formData.relationship === 'patient' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.patientPortal.relationship.patient.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-light">{t.patientPortal.relationship.patient.subtitle}</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => setFormData({ ...formData, relationship: 'family' })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left backdrop-blur-sm ${
                        formData.relationship === 'family'
                          ? 'border-primary bg-primary/10 dark:bg-primary/15 shadow-lg shadow-primary/10'
                          : 'border-slate-200/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/60 hover:border-primary/40 dark:hover:border-secondary/40'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.relationship === 'family'
                              ? 'border-primary bg-primary shadow-md'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {formData.relationship === 'family' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.patientPortal.relationship.family.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-light">{t.patientPortal.relationship.family.subtitle}</p>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Section Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-slate-700/60" />

                {/* Medical Information Section */}
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg flex items-center justify-center">
                        <HeartPulse className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
                        {t.patientPortal.medicalInfo.title}
                      </h2>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50" />
                  </div>
                  <div className="space-y-6">
                    {/* Diabetes Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.medicalInfo.diabetesType}
                      </label>
                      <div className="relative group">
                        <select
                          name="diabetesType"
                          value={formData.diabetesType}
                          onChange={handleChange}
                          className="w-full pl-4 pr-10 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all appearance-none font-light"
                        >
                          <option value="">{t.patientPortal.medicalInfo.selectType}</option>
                          <option value="Type 1">{t.patientPortal.medicalInfo.type1}</option>
                          <option value="Type 2">{t.patientPortal.medicalInfo.type2}</option>
                          <option value="Gestational">{t.patientPortal.medicalInfo.gestational}</option>
                          <option value="Other">{t.patientPortal.medicalInfo.other}</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
                      </div>
                    </div>

                    {/* Diagnosis Date */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.medicalInfo.dateOfDiagnosis}
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-secondary transition-colors" />
                        <input
                          type="date"
                          name="dateOfDiagnosis"
                          value={formData.dateOfDiagnosis}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Current Medications */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.medicalInfo.currentMedications}
                      </label>
                      <textarea
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all resize-none font-light leading-relaxed"
                        placeholder={t.patientPortal.medicalInfo.medicationsPlaceholder}
                      />
                    </div>

                    {/* Other Medical Information */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2.5 tracking-wide">
                        {t.patientPortal.medicalInfo.otherInfo}
                      </label>
                      <textarea
                        name="otherInfo"
                        value={formData.otherInfo}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 focus:border-primary dark:focus:border-secondary transition-all resize-none font-light leading-relaxed"
                        placeholder={t.patientPortal.medicalInfo.otherInfoPlaceholder}
                      />
                    </div>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-green-50/80 dark:bg-green-900/20 border border-green-200/60 dark:border-green-800/60 rounded-2xl backdrop-blur-sm flex items-center gap-3 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      {t.patientPortal.submit.success}
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-red-50/80 dark:bg-red-900/20 border border-red-200/60 dark:border-red-800/60 rounded-2xl backdrop-blur-sm flex items-center gap-3 shadow-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      {t.patientPortal.submit.error}
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="relative z-10 mt-10">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:shadow-xl hover:shadow-primary/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.patientPortal.submit.submitting}
                      </>
                    ) : (
                      <>
                        {t.patientPortal.submit.button}
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

