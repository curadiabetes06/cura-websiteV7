'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedThemeToggle from './AnimatedThemeToggle';

export default function Header() {
  const { locale, setLocale, t, direction } = useLanguage();
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if page has a dark hero (only home page)
  const hasDarkHero = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determine if we should show light header styling
  // Show light header if scrolled OR if on a page without dark hero (most pages have light backgrounds)
  const showLightHeader = isScrolled || !hasDarkHero;

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/why-cura', label: t.nav.whyCura },
    { href: '/artificial-pancreas', label: t.nav.artificialPancreas },
    { href: '/community', label: t.nav.community },
    { href: '/patient-portal', label: t.nav.joinUs },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showLightHeader
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-slate-700/50'
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
      }`}
      style={{
        backdropFilter: showLightHeader ? 'blur(20px) saturate(180%)' : 'blur(8px)',
        pointerEvents: 'auto',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ pointerEvents: 'auto' }}>
        <div className="flex items-center justify-between h-20" style={{ position: 'relative' }}>
          {/* Logo - Dynamic based on scroll and theme */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative h-10 w-32 md:h-12 md:w-36"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={
                  showLightHeader
                    ? theme === 'dark'
                      ? '/logo-white.png'
                      : '/logo.png'
                    : '/logo-white.png'
                }
                alt="Cura Diabetes"
                fill
                className={`object-contain transition-all duration-300 ${
                  !showLightHeader ? 'brightness-0 invert' : ''
                }`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Perfectly Equal Spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-4">
            <nav className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group whitespace-nowrap px-2 py-1 ${
                    showLightHeader 
                      ? 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ 
                    position: 'relative', 
                    zIndex: 10,
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                >
                  <span className="relative z-10 block">{link.label}</span>
                  {/* Animated Line - Only on hover */}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      showLightHeader ? 'bg-gradient-to-r from-primary via-secondary to-primary dark:from-secondary dark:via-cyan-300 dark:to-secondary' : 'bg-white'
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 flex-shrink-0" style={{ zIndex: 30, position: 'relative' }}>
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md ${
                showLightHeader
                  ? 'bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 dark:from-primary/20 dark:to-secondary/20'
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
              aria-label="Toggle Language"
              style={{ 
                zIndex: 30,
                position: 'relative',
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: locale === 'ar' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Globe className={`w-4 h-4 ${
                  showLightHeader ? 'text-primary dark:text-secondary' : 'text-white'
                }`} />
              </motion.div>
              <span className={`text-sm font-semibold ${
                showLightHeader ? 'text-primary dark:text-secondary' : 'text-white'
              }`}>
                {locale === 'en' ? 'AR' : 'EN'}
              </span>
            </motion.button>

            {/* Animated Theme Toggle */}
            <div 
              style={{ 
                zIndex: 30,
                position: 'relative',
                pointerEvents: 'auto'
              }}
            >
              <AnimatedThemeToggle isScrolled={showLightHeader} />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full shadow-lg transition-all ${
                showLightHeader
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
              }`}
              aria-label="Toggle Menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

