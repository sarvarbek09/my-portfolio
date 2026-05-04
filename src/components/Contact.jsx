import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import { MdPhoneIphone } from 'react-icons/md';

const ContactSmall = ({ icon, label, nick, theme }) => (
  <div className={`h-full flex flex-col items-center justify-center p-10 rounded-[2.5rem] border ${theme.border} !bg-transparent backdrop-blur-md hover:border-white/40 transition-all group ${theme.shadow}`}>
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-white">
      {icon}
    </div>
    <div className="text-[10px] uppercase font-black tracking-[0.4em] opacity-30 mb-2">{label}</div>
    <div className="text-white text-xs font-bold tracking-tight text-center break-all">{nick}</div>
  </div>
);

const Contact = ({ theme }) => {
  return (
    <section id="contact" className="relative z-10 max-w-4xl mx-auto px-4 py-40 text-white">
      <h2 className="text-center text-white text-5xl font-black mb-20 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 m-auto justify-center">
        <a href="https://github.com/sarvarbek09" target="_blank" rel="noopener noreferrer">
          <ContactSmall icon={<FaGithub />} label="GitHub" nick="sarvarbek09" theme={theme} />
        </a>
        <a href="https://t.me/s_gulomvc" target="_blank" rel="noopener noreferrer">
          <ContactSmall icon={<FaTelegram />} label="Telegram" nick="@s_gulomvc" theme={theme} />
        </a>
        <ContactSmall icon={<FiMail />} label="Email" nick="sarvarbekxolmuhammedov28@gmail.com" theme={theme} />
        <a href="https://www.linkedin.com/in/sarvarbek-xolmuhammedov-173aaa337" target="_blank" rel="noopener noreferrer">
          <ContactSmall icon={<CiLinkedin />} label="LinkedIn" nick="sarvarbek09" theme={theme} />
        </a>
        <div className="sm:col-span-2 flex justify-center w-full">
          <div className="w-full sm:w-1/2">
            <ContactSmall icon={<MdPhoneIphone />} label="Phone" nick="+998 33 331 34 04" theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;