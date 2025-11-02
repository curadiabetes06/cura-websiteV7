'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

export default function TermsPage() {
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
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-primary dark:text-secondary mb-6 text-center">
              Terms of Use
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-12">
              Last updated: October 31, 2025
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl space-y-8">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    Agreement to Terms
                  </h2>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  By accessing and using Cura Diabetes services, you agree to be bound by
                  these Terms of Use and all applicable laws and regulations. If you do
                  not agree with any of these terms, you are prohibited from using or
                  accessing our services.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    Medical Services
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Our services are provided by licensed healthcare professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Treatment plans are personalized based on individual health needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Emergency medical situations require immediate professional care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Follow-up care and monitoring are essential for optimal outcomes
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary dark:text-secondary">
                    Patient Responsibilities
                  </h2>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Provide accurate and complete medical information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Follow prescribed treatment plans and medication schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Attend scheduled appointments or notify us of cancellations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Report any adverse reactions or complications immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Maintain confidentiality of your account credentials</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Payment & Billing
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Payment is due at the time of service unless prior arrangements have
                  been made. We accept various payment methods and work with major
                  insurance providers. Patients are responsible for understanding their
                  insurance coverage and any out-of-pocket costs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Appointment Cancellation
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We require at least 24 hours notice for appointment cancellations.
                  Late cancellations or no-shows may result in a fee. We understand
                  emergencies occur and will work with patients on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  All content on our website and app, including text, graphics, logos,
                  and software, is the property of Cura Diabetes and protected by
                  copyright laws. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  While we strive to provide the highest quality care, Cura Diabetes
                  shall not be liable for any indirect, incidental, or consequential
                  damages arising from the use of our services, except where prohibited
                  by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Changes to Terms
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will
                  be posted on this page with an updated revision date. Continued use of
                  our services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  For questions about these terms, please contact us at:
                  <br />
                  Email: legal@curadiabetes.com
                  <br />
                  Phone: +20 XXX XXX XXXX
                  <br />
                  Address: Cairo, Egypt
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

