import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// [메인 아이콘: 은하수 AI 공식 아웃라인 로고 - Navbar 전용]
export const EunhasuLogoOutlined = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="eunhasuMainStreamOutlined" x1="0%" y1="70%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="eunhasuSubStreamOutlined" x1="0%" y1="55%" x2="100%" y2="35%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.14" />
            </linearGradient>
        </defs>

        {/* 1. Main 30-deg Horizontal Ribbon */}
        <path
            d="M 0 66 C 25 56, 42 66, 68 46 C 82 34, 92 26, 100 20 L 100 46 C 85 58, 65 72, 40 78 C 20 82, 10 80, 0 84 Z"
            fill="url(#eunhasuMainStreamOutlined)"
        />
        {/* 2. Overlapping Soft Layer */}
        <path
            d="M 0 52 C 25 44, 45 54, 72 36 C 86 26, 94 18, 100 12 L 100 24 C 85 36, 65 52, 38 64 C 18 70, 8 68, 0 70 Z"
            fill="url(#eunhasuSubStreamOutlined)"
        />

        {/* 1. Center Large Star (Outlined 5.2px) */}
        <path
            d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
            stroke="#ffffff"
            strokeWidth="5.2"
            strokeLinejoin="round"
        />

        {/* 2. Top-Left Star (Outlined 3.8px) */}
        <path
            d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
            stroke="#ffffff"
            strokeWidth="3.8"
            strokeLinejoin="round"
        />

        {/* 3. Bottom-Right Star (Outlined 3.8px) */}
        <path
            d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
            stroke="#ffffff"
            strokeWidth="3.8"
            strokeLinejoin="round"
        />

        {/* Satellite dots (x:11, y:62 / x:88, y:22 / x:36, y:74) */}
        <circle cx="11" cy="62" r="1.8" fill="#ffffff" opacity="0.85" />
        <circle cx="88" cy="22" r="1.8" fill="#ffffff" opacity="0.85" />
        <circle cx="36" cy="74" r="1.6" fill="#ffffff" opacity="0.75" />
    </svg>
);

// [서브 아이콘: 솔리드 순백색 채움 로고 - Footer 및 소형 전용]
export const EunhasuLogoSolid = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="eunhasuMainStreamSolid" x1="0%" y1="70%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="eunhasuSubStreamSolid" x1="0%" y1="55%" x2="100%" y2="35%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.16" />
            </linearGradient>
        </defs>

        <path
            d="M 0 66 C 25 56, 42 66, 68 46 C 82 34, 92 26, 100 20 L 100 46 C 85 58, 65 72, 40 78 C 20 82, 10 80, 0 84 Z"
            fill="url(#eunhasuMainStreamSolid)"
        />
        <path
            d="M 0 52 C 25 44, 45 54, 72 36 C 86 26, 94 18, 100 12 L 100 24 C 85 36, 65 52, 38 64 C 18 70, 8 68, 0 70 Z"
            fill="url(#eunhasuSubStreamSolid)"
        />

        {/* Center Large Star (Solid Pure White) */}
        <path
            d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
            fill="#ffffff"
        />

        {/* Top-Left Star (Solid Pure White) */}
        <path
            d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
            fill="#ffffff"
        />

        {/* Bottom-Right Star (Solid Pure White) */}
        <path
            d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
            fill="#ffffff"
        />

        {/* Satellite dots */}
        <circle cx="11" cy="62" r="2.0" fill="#ffffff" opacity="0.9" />
        <circle cx="88" cy="22" r="2.0" fill="#ffffff" opacity="0.9" />
        <circle cx="36" cy="74" r="1.8" fill="#ffffff" opacity="0.8" />
    </svg>
);

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
                
                {/* 메인 아이콘: 원래 확정된 아웃라인 로고 적용 */}
                <a href="#home" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1 group-hover:border-blue-400/60 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
                        <EunhasuLogoOutlined className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white font-outfit flex items-center gap-1.5">
                            은하수 <span className="text-blue-400">AI</span>
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
