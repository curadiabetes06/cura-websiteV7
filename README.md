# Cura Diabetes Website

**Egypt's First Fully Integrated Diabetes Center**

A premium bilingual (English + Arabic) medical website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🌟 Features

- **Bilingual Support**: Full English and Arabic translations with RTL layout support
- **Modern Design**: Premium, elegant UI with smooth animations and transitions
- **Dark Mode**: Built-in light/dark theme toggle
- **Responsive**: Fully responsive design for all devices
- **Interactive**: Engaging animations using Framer Motion
- **Comprehensive Pages**:
  - Home (Hero, Services Preview, Why Cura)
  - About Us (Mission, Values, Whole-Body Care)
  - Why Cura (Three Pillars, Benefits)
  - Our Services (12+ Services with Icons)
  - Patient Process (8-Step Timeline)
  - Artificial Pancreas Program (VIP, DO IT, AID Programs)
  - Community (Testimonials, Stories, Blog)
  - Find an Expert (Searchable Specialist Directory)
  - Patient Portal (Login/Register, Dashboard)

## 🎨 Design System

### Colors
- **Primary**: `#044D82` (Deep Blue)
- **Secondary**: `#87CDFF` (Light Turquoise)
- **Accent**: `#FFDD87` (Soft Yellow)
- **Orange**: `#FF9B00` (Highlight)

### Typography
- **English**: Voire Display Regular (elegant serif)
- **Arabic**: H ALHFHAF (with all weights)

### Visual Style
- Soft gradients from light turquoise to pastel yellow
- Generous white space
- Subtle shadows and hover effects
- Calm, high-end, medically sophisticated tone

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
website Trial 3/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   ├── artificial-pancreas/      # Artificial Pancreas Program page
│   ├── community/                # Community page
│   ├── find-expert/              # Find an Expert page
│   ├── patient-portal/           # Patient Portal page
│   ├── patient-process/          # Patient Process page
│   ├── services/                 # Services page
│   ├── why-cura/                 # Why Cura page
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   └── Providers.tsx             # Context providers
├── contexts/                     # React contexts
│   ├── LanguageContext.tsx       # i18n management
│   └── ThemeContext.tsx          # Dark/light mode
├── lib/                          # Utilities
│   ├── i18n.ts                   # Internationalization helpers
│   └── translations.ts           # All translations (EN/AR)
├── public/                       # Static assets
│   ├── logo.png                  # Full logo with text
│   ├── logo icon.png             # Logo icon only
│   └── logo animation.mov        # Logo animation video
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind CSS config
└── next.config.js                # Next.js config
```

## 🌐 Pages Overview

### Home Page
- Hero section with animated gradient background
- Why Cura (3 pillars)
- Services preview grid
- Community CTA

### About Us
- Mission statements
- Whole-body care areas
- Core values
- Partner for life message

### Why Cura
- Three pillars with interactive modals
- Comprehensive care, Concierge experience, Technology
- Benefits breakdown

### Our Services
- 12 service cards with hover effects
- In-house specialties grid
- Feature highlights

### Patient Process
- 8-step interactive timeline
- Expandable step details
- Desktop and mobile layouts

### Artificial Pancreas Program
- Hero with program overview
- VIP arrival services
- Week 1: DO IT Program
- Week 2: AID Program
- Program inclusions

### Community
- Patient testimonial slider
- Video story cards
- Blog posts grid

### Find an Expert
- Search and filter functionality
- Expert profile cards with ratings
- Specialty filtering

### Patient Portal
- Login/Register forms
- Dashboard with health stats
- Quick access to portal features

## 🔧 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

## 🎯 Key Features

### Bilingual Support
- Real-time language switching (EN ↔ AR)
- RTL layout support for Arabic
- Comprehensive translations for all content
- Language preference saved to localStorage

### Dark Mode
- System preference detection
- Manual toggle
- Persistent preference
- Smooth transitions

### Animations
- Scroll-triggered animations
- Hover effects
- Smooth page transitions
- Interactive elements
- Gradient animations

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

## 📝 Customization

### Adding Custom Fonts

To add the Voire and H ALHFHAF fonts, place the font files in `public/fonts/` and update the font configuration in `app/layout.tsx` and `tailwind.config.ts`.

### Updating Translations

Edit `lib/translations.ts` to modify or add new translations. The structure supports nested objects for organized content management.

### Modifying Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#044D82',
  secondary: '#87CDFF',
  accent: '#FFDD87',
  orange: '#FF9B00',
}
```

## 🤝 Contributing

This is a proprietary project for Cura Diabetes. For questions or support, please contact the development team.

## 📄 License

© 2025 Cura Diabetes. All rights reserved.

---

**Built with ❤️ for better diabetes care**

