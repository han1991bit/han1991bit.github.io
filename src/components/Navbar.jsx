import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// [은하수 AI 공식 로고] 밤하늘 은하수 흐름과 중앙 주성 & 별빛 클러스터 (사용자 스케치 기반)
export const EunhasuLogoIcon = ({ className = "w-7 h-7" }) => {
    return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Milky Way Ribbon Gradient */}
                <linearGradient id="eunhasuStreamGrad" x1="0%" y1="30%" x2="100%" y2="70%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#818cf8" stopOpacity="0.95" />
                    <stop offset="80%" stopColor="#a855f7" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
                </linearGradient>

                {/* Soft Star Glow Filter */}
                <filter id="starGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="0.8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* 1. Flowing Milky Way Stream (은하수 구름 흐름) */}
            <path
                d="M 2 24 C 10 18, 16 32, 26 27 C 34 23, 40 17, 46 20 C 47 25, 41 33, 33 33 C 23 34, 16 27, 8 29 C 4 30, 2 27, 2 24 Z"
                fill="url(#eunhasuStreamGrad)"
            />

            {/* 2. Micro Stardust Glitter & Stream Lines */}
            <path
                d="M 5 23.5 C 12 20.5, 18 29.5, 27 26.5 C 34 23.5, 41 19, 44 21"
                stroke="#ffffff"
                strokeWidth="0.75"
                strokeDasharray="1.5 2.5"
                opacity="0.65"
            />
            <circle cx="10" cy="26.5" r="0.75" fill="#ffffff" opacity="0.85" />
            <circle cx="21" cy="28.5" r="0.65" fill="#ffffff" opacity="0.8" />
            <circle cx="36" cy="26" r="0.75" fill="#ffffff" opacity="0.85" />
            <circle cx="29" cy="23" r="0.5" fill="#ffffff" opacity="0.7" />

            {/* 3. Main Central Star (중앙 대형 주성) */}
            <path
                d="M 24 9 C 24 18, 27.5 21.5, 36.5 21.5 C 27.5 21.5, 24 25, 24 34 C 24 25, 20.5 21.5, 11.5 21.5 C 20.5 21.5, 24 18, 24 9 Z"
                fill="#ffffff"
                filter="url(#starGlowFilter)"
            />

            {/* 4. Upper-Left Star (좌측 상단 별) */}
            <path
                d="M 12 7 C 12 11.5, 13.5 13, 18 13 C 13.5 13, 12 14.5, 12 19 C 12 14.5, 10.5 13, 6 13 C 10.5 13, 12 11.5, 12 7 Z"
                fill="#ffffff"
                opacity="0.95"
            />

            {/* 5. Lower-Right Slender Star (우측 하단 별) */}
            <path
                d="M 36 24 C 36 29, 37.2 30.5, 41.5 30.5 C 37.2 30.5, 36 32, 36 37 C 36 32, 34.8 30.5, 30.5 30.5 C 34.8 30.5, 36 29, 36 24 Z"
                fill="#e0f2fe"
                opacity="0.95"
            />

            {/* 6. Satellite Star Dots (주변 보조 별빛 점) */}
            <circle cx="8.5" cy="18" r="1.1" fill="#bae6fd" />
            <circle cx="10.5" cy="20.5" r="0.7" fill="#e0f2fe" opacity="0.8" />
            <circle cx="39.5" cy="28" r="0.9" fill="#bae6fd" />
            <circle cx="33.5" cy="35" r="0.9" fill="#bae6fd" />
        </svg>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Remote AI (제품)', href: '#remote-ai' },
        { name: '개발 및 서비스', href: '#services' },
        { name: '팀 소개', href: '#about' },
        { name: '문의하기', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with User-Sketch Design */}
                <a href="#home" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-blue-500/30 flex items-center justify-center p-1 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                        <EunhasuLogoIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white font-outfit flex items-center gap-1.5">
                            은하수 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
                            Eunhasu AI LC.
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 text-sm font-medium transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-3">
                    <a
                        href="https://github.com/han1991bit/remote-codex/releases"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-900/20 transition-all hover:scale-105"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Remote AI APK 다운로드
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="메뉴 열기"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-900 text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                                <a
                                    href="https://github.com/han1991bit/remote-codex/releases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Download className="w-4 h-4" />
                                    Remote AI APK 받기 (v1.0.0)
                                </a>
                                <a
                                    href="mailto:eunhasuai@gmail.com"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Send className="w-4 h-4" />
                                    eunhasuai@gmail.com 문의
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
