import React from 'react';
import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <FaGithub />, link: "https://github.com/sarvarbek09", color: "hover:text-white" },
        { id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sarvarbek-xolmuhammedov-173aaa337", color: "hover:text-blue-500" },
        { id: 3, icon: <FaTelegram />, link: "https://t.me/s_gulomvc", color: "hover:text-sky-400" },
        { id: 4, icon: <FaEnvelope />, link: "mailto:sarvarbekxolmuhammedov28@gmail.com", color: "hover:text-red-400" },
        { id: 5, icon: <FaPhoneAlt />, link: "tel:+998333313404", color: "hover:text-emerald-400" },
    ];

    return (
        <footer className="relative z-10 py-16 !bg-transparent text-white border-t-2 border-emerald-500/20 rounded-t-[50px] text-center">
            <div className="text-3xl font-black mb-6 italic uppercase tracking-tighter">
                Sarvarbek
            </div>

            {/* icons */}
            <div className="flex justify-center gap-8 mb-8">
                {socialLinks.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl text-white/40 transition-all duration-300 transform hover:-translate-y-2 ${social.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

        </footer>
    );
};

export default Footer;