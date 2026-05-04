import React, { useState } from 'react';
import { skillsData } from './data/skillsData';
import { Analytics } from "@vercel/analytics/react"

import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isNight, setIsNight] = useState(true);
  const [showNav, setShowNav] = useState(false);

  // ---  SCROLL FUNKSIYASI ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const theme = isNight
    ? {
      bg: 'bg-transparent',
      cardBg: 'bg-white/5',
      border: 'border-white/10',
      shadow: 'shadow-[0_0_30px_rgba(255,255,255,0.05)]'
    }
    : {
      bg: 'bg-[#030712]',
      cardBg: 'bg-black/60',
      border: 'border-emerald-500/20',
      shadow: 'shadow-[0_0_30px_rgba(0,0,0,0.5)]'
    };

  return (
    <div className="relative min-h-screen font-mono text-white selection:bg-emerald-500/30">
      <SpaceBackground />

      <div className="relative z-10">
        <Navbar
          showNav={showNav}
          isNight={isNight}
          setIsNight={setIsNight}
          scrollTo={scrollTo}
          theme={theme}
        />

        <main>
          <Hero setShowNav={setShowNav} />
          <About theme={theme} />
          <Skills skills={skillsData} theme={theme} />
          <Contact theme={theme} />
        </main>

        <Footer />
      </div>
    </div>
  );
}