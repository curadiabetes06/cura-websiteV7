'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import ServiceIcon from '@/components/ServiceIcon';
import {
  Stethoscope,
  Users,
  FlaskConical,
  Salad,
  UserCheck,
  Baby,
  Syringe,
  Smartphone,
  Activity,
  HeartPulse,
  Shield,
  Heart,
  Eye,
  Footprints,
} from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();

  // Icon arrays mapped by index order
  const unitsAndClinicsIcons = [Baby, Eye, Footprints, FlaskConical, Activity, Syringe, Smartphone, Activity];
  const additionalUnitsIcons = [Salad, Stethoscope, Heart, Activity, HeartPulse, Baby, Users];
  const wayfindingIcons = [UserCheck, Shield, Users, Stethoscope, UserCheck, Users, FlaskConical];

  const unitsAndClinics = t.services.unitsAndClinics.items.map((item, index) => ({
    ...item,
    icon: unitsAndClinicsIcons[index] || Activity,
  }));

  const additionalUnits = t.services.additionalUnits.items.map((item, index) => ({
    ...item,
    icon: additionalUnitsIcons[index] || Activity,
  }));

  const wayfinding = t.services.wayfinding.items.map((item, index) => ({
    ...item,
    icon: wayfindingIcons[index] || UserCheck,
  }));

  return (
    <div className="pt-20 bg-[#E8F8F5]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#87CDFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              {t.services.title}
            </h1>
            <p className="text-xl font-light opacity-90 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Units & Clinics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
              {t.services.unitsAndClinics.title}
            </h2>
            <div className="w-20 h-1 bg-[#FF9B00]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitsAndClinics.map((service, index) => (
              <ServiceIcon
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                delay={index * 0.03}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-[#F8FCFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalUnits.map((service, index) => (
              <ServiceIcon
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                delay={index * 0.03}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wayfinding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
              {t.services.wayfinding.title}
            </h2>
            <div className="w-20 h-1 bg-[#FF9B00]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {wayfinding.map((location, index) => (
              <ServiceIcon
                key={index}
                icon={location.icon}
                title={location.title}
                subtitle={location.subtitle}
                delay={index * 0.03}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-br from-primary to-[#87CDFF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-light mb-6">
                {t.services.different.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.services.different.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FF9B00] rounded-full flex items-center justify-center font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/90 font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              {t.services.cta.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-light">
              {t.services.cta.subtitle}
            </p>
            <a
              href="/patient-portal"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-[#0561A3] transition-colors shadow-lg"
            >
              {t.common.bookNow}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

