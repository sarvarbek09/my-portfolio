import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setShowNav }) => {
  return (
    <section
      id="home"
      className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">

        <div className="overflow-hidden py-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setShowNav(true)}
            className="text-3xl md:text-6xl lg:text-7xl font-black tracking-[0.1em] md:tracking-[0.15em] uppercase text-white italic leading-tight"
            style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
          >
            Hello, I’m{" "}
            <span
              className="text-emerald-500 not-italic"
              style={{ textShadow: '0 0 30px rgba(16,185,129,0.6)' }}
            >
              Sarvarbek
            </span>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white text-lg md:text-2xl font-semibold mt-2"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="text-slate-400 mt-4 text-xs md:text-sm tracking-[0.3em] uppercase"
        >
          React • Next.js • Clean UI • High Performance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;