/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Remove i18n config as it's unsupported in App Router
  // Internationalization is handled via LanguageContext
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

