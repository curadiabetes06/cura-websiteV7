import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#044D82',
        secondary: '#87CDFF',
        accent: '#FFDD87',
        orange: '#FF9B00',
      },
      fontFamily: {
        'voire': ['var(--font-voire)', 'serif'],
        'arabic': ['var(--font-arabic)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-turquoise': 'linear-gradient(135deg, #87CDFF 0%, #044D82 100%)',
        'gradient-soft': 'linear-gradient(135deg, #E8F8FF 0%, #FFF8E8 100%)',
        'gradient-hero': 'linear-gradient(135deg, #87CDFF 0%, #044D82 50%, #87CDFF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

