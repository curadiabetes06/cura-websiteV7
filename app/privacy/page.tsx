'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-primary dark:text-secondary mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12">
              Last updated: October 31, 2025
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl space-y-8">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    Your Privacy Matters
                  </h2>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At Cura Diabetes, we are committed to protecting your privacy and
                  ensuring the security of your personal and medical information. This
                  privacy policy explains how we collect, use, and safeguard your data.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    Information We Collect
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Personal Information:</strong> Name, date of birth,
                      contact details, identification documents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Medical Information:</strong> Health records, test
                      results, medications, treatment plans
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Device Data:</strong> Glucose monitor readings, insulin
                      pump data, app usage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Communication:</strong> Messages with care team,
                      appointment requests
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    How We Use Your Information
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provide medical care and treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Coordinate with specialists and healthcare providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Monitor and improve your health outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Communicate important health information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Process billing and insurance claims</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Data Security
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We employ industry-standard security measures including encryption,
                  secure servers, access controls, and regular security audits to
                  protect your information. All staff members are trained in data
                  privacy and confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Your Rights
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Access your medical records</li>
                  <li>• Request corrections to your information</li>
                  <li>• Withdraw consent for certain uses</li>
                  <li>• Request deletion of personal data (with legal limitations)</li>
                  <li>• File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  If you have questions about this privacy policy or your data, please
                  contact our Privacy Officer at privacy@curadiabetes.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

