import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  // 1. Ekran o'lchamiga qarab yulduzlar sonini aniqlash (render paytida bir marta hisoblanadi)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const starCount = isMobile ? 40 : 120; // Mobil uchun 40 ta yetarli

  const stars = useMemo(() =>
    Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    })), [starCount]
  );

  return (
    <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
      {/* 2. Glow effektlari (Telefonda blur darajasini va animatsiyani soddalashtirdim) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/30 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/30 blur-[80px] md:blur-[120px]" />
      </div>

      {/* 3. Yulduzlar konteyneri - transform: translateZ(0) videokartani ishga tushiradi */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse-slow"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: 0.4,
              boxShadow: star.size > 1.5 ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
              animation: `pulse-custom ${star.duration}s infinite ${star.delay}s ease-in-out`,
              willChange: 'opacity', // Brauzerga faqat opacity o'zgarishini bildiramiz
            }}
          />
        ))}
      </div>

      {/* 4. Pastki gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Inline CSS - pulse animatsiyasi uchun (Framer Motiondan ko'ra tezroq ishlaydi) */}
      <style>{`
  @keyframes pulse-custom {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
`}</style>
    </div>
  );
};

export default SpaceBackground;