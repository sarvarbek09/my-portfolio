import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

import { FaReact, FaJs, FaVuejs, FaSass, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiReactquery, SiAntdesign, SiChakraui } from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 /> }, { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'SCSS', icon: <FaSass /> }, { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> }, { name: 'React.js', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> }, { name: 'React Query', icon: <SiReactquery /> },
  { name: 'Next.js', icon: <SiNextdotjs /> }, { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'TypeScript', icon: <SiTypescript /> }, { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Ant Design', icon: <SiAntdesign /> }, { name: 'Chakra UI', icon: <SiChakraui /> },
  { name: 'Git', icon: <FaGitAlt /> }, { name: 'GitHub', icon: <FaGithub /> }
];

function PortfolioFinal() {
  const [isNight, setIsNight] = useState(true);
  const [showNav, setShowNav] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const theme = isNight
    ? { bg: 'bg-[#030303]', border: 'border-white/10', shadow: 'shadow-[0_0_25px_rgba(255,255,255,0.08)]' }
    : { bg: 'bg-[#0a192f]', border: 'border-cyan-400/20', shadow: 'shadow-[0_0_25px_rgba(0,246,255,0.12)]' };

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-1000 font-mono overflow-x-hidden selection:bg-emerald-500/30`}>
      
      {/* 3D Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-[-50%] w-[200%] h-[100%]"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            transform: 'perspective(600px) rotateX(55deg)',
            transformOrigin: 'bottom'
          }}>
        </div>
      </div>

      <Navbar showNav={showNav} isNight={isNight} setIsNight={setIsNight} scrollTo={scrollTo} theme={theme} />
      
      <Hero setShowNav={setShowNav} />
      
      <About theme={theme} />
      
      <Skills skills={skillsData} theme={theme} />
      
      <Contact theme={theme} />

      <footer className="relative z-10 py-16 !bg-transparent text-white border-t-2 border-emerald-500/20 rounded-t-[50px] text-center">
        <div className="text-3xl font-black mb-4 italic uppercase tracking-tighter">Sarvarbek</div>
        <p className="text-[10px] tracking-[0.4em] opacity-20 uppercase font-bold italic">Engineered with Precision © 2026</p>
      </footer>
    </div>
  );
}
export default PortfolioFinal;