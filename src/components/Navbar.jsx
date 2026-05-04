import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillMoonStarsFill, BsSun, BsThreeDotsVertical } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const Navbar = ({ showNav, isNight, setIsNight, scrollTo, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'Contact me', id: 'contact' },
  ];

  const handleScroll = (id) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -120 }} animate={{ y: 0 }}
          className="fixed top-0 w-full z-[100] p-4"
        >
          <div className={`max-w-4xl mx-auto flex justify-between items-center !bg-transparent backdrop-blur-md border ${theme.border} rounded-2xl px-6 py-4 md:px-8 md:py-5 ${theme.shadow}`}>

            {/* 1. Logo */}
            <div onClick={() => handleScroll('home')} className="text-2xl font-black text-white italic cursor-pointer tracking-tighter">{"</>"}</div>

            {/* 2. Desktop Menu*/}
            <ul className="hidden md:flex gap-10 font-bold uppercase tracking-[0.2em] text-white/80 text-[13px]">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => handleScroll(link.id)} className="hover:text-emerald-500 cursor-pointer transition-colors">
                  {link.name}
                </li>
              ))}
            </ul>

            {/* 3.(Buttons & Mobile Toggle) */}
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={() => setIsNight(!isNight)} className="active:scale-90 transition-transform">
                {isNight ? <BsSun size={22} className="text-yellow-400" /> : <BsFillMoonStarsFill size={18} className="text-cyan-400" />}
              </button>
              <a href="https://t.me/s_gulomvc" target="_blank" rel="noopener noreferrer">
                <button className="hidden sm:block bg-emerald-500 text-black px-6 py-2 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-emerald-400 transition-all">
                  hire me
                </button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white text-2xl active:scale-90 transition-transform"
              >
                {isOpen ? <IoClose /> : <BsThreeDotsVertical />}
              </button>
            </div>
          </div>

          {/* 4. Mobile Dropdown Menu  */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className={`md:hidden absolute left-4 right-4 top-24 p-6 rounded-3xl border ${theme.border} ${theme.cardBg} backdrop-blur-2xl ${theme.shadow} z-[99]`}
              >
                <ul className="flex flex-col gap-6 items-center">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      onClick={() => handleScroll(link.id)}
                      className="text-white font-black uppercase tracking-[0.3em] text-sm hover:text-emerald-500 transition-colors"
                    >
                      {link.name}
                    </li>
                  ))}
                  <li className="w-full pt-4 border-t border-white/5">
                    <a href="https://t.me/s_gulomvc" target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-emerald-500 text-black py-4 rounded-2xl font-black uppercase tracking-widest text-[12px]">
                        Hire me
                      </button>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;