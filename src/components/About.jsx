import React from 'react';
import { motion } from 'framer-motion';

const About = ({ theme }) => {
  const values = [
    {
      title: "Clean Architecture",
      desc: "Structuring code as a system, not a mess. The guarantee of scalable and maintainable projects.",
    },
    {
      title: "Performance First",
      desc: "Achieving 100/100 Lighthouse scores using Vite, Next.js, and modern optimization techniques.",
    },
    {
      title: "Pixel Perfection",
      desc: "Ensuring high-fidelity Figma-to-code conversion with precise spacing and smooth animations.",
    }
  ];

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-32 overflow-hidden">

      {/* 1. SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
          About Me
        </h2>
      </motion.div>

      {/* 2.Main Content) */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
            Through modern front-end technologies, I create not just interfaces, but
            <span className="text-white font-medium"> digital experiences</span>.
            My core strength is solving complex problems with simple, beautiful, and efficient code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex relative justify-center items-center"
        >
          {/* background */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 bg-emerald-500/10 border border-emerald-500/20 rounded-full blur-[60px]"
          />

          {/* </> belgisi */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 border-2 border-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-emerald-500/5">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              {"</>"}
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* 3. 3 VALUE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`p-10 rounded-[2.5rem] ${theme.cardBg} border ${theme.border} ${theme.shadow} backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-500 group`}
          >
            <h3 className="text-white font-black text-xl mb-4 tracking-tight group-hover:text-emerald-500 transition-colors">
              {value.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;