'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const quickLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/artificial-pancreas', label: t.nav.artificialPancreas },
    { href: '/community', label: t.nav.community },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 border-t-4 border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="relative w-40 h-12">
              <Image
                src={theme === 'dark' ? '/logo-white.png' : '/logo.png'}
                alt="Cura Diabetes"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t.about.mission.text1.substring(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-secondary mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-secondary mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+20 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@curadiabetes.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-secondary mb-4">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-primary hover:bg-secondary transition-colors flex-shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary hover:bg-secondary transition-colors flex-shrink-0"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary hover:bg-secondary transition-colors flex-shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {t.footer.termsOfUse}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

