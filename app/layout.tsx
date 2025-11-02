import type { Metadata } from "next";
import { Cairo } from 'next/font/google';
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Arabic font from Google Fonts
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cura Diabetes - Egypt's First Fully Integrated Diabetes Center",
  description: "Reimagining Diabetes Care in Egypt and Beyond. Comprehensive, personalized diabetes care with cutting-edge technology and compassionate guidance.",
  keywords: "diabetes care, diabetes center Egypt, integrated diabetes treatment, diabetes specialists, endocrinology",
  icons: {
    icon: '/logo icon.png',
    shortcut: '/logo icon.png',
    apple: '/logo icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cairo.variable} style={{ cursor: 'default' }}>
      <head>
        <link rel="stylesheet" href="/hide-cursor.css" />
        <link rel="icon" href="/logo icon.png" type="image/png" />
      </head>
      <body className="antialiased" suppressHydrationWarning style={{ cursor: 'default' }}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

