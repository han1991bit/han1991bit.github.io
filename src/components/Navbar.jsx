import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// [지구에서 바라본 밤하늘 은하수와 강조된 별빛] 4종 SVG 벡터 심볼
export const EunhasuLogoIcon = ({ variant = 1, className = "w-6 h-6" }) => {
    if (variant === 2) {
        // Option 2: 점묘 은하수 흐름 & 3대 주성 (Stardust Stream)
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 19c6-2 9-9 18-13" strokeDasharray="1 2.5" strokeWidth="1.5" strokeOpacity="0.9" />
                <path d="M4 22c6-2 9-9 18-13" strokeDasharray="1.5 3" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M2 16c6-2 8-8 16-12" strokeDasharray="1 3" strokeWidth="1.2" strokeOpacity="0.4" />
                {/* 3 Prominent Accent Stars */}
                <path d="M17 5l0.7 1.6 1.6 0.7-1.6 0.7-0.7 1.6-0.7-1.6-1.6-0.7 1.6-0.7 0.7-1.6z" fill="currentColor" stroke="none" />
                <path d="M11 11l0.6 1.3 1.3 0.6-1.3 0.6-0.6 1.3-0.6-1.3-1.3-0.6 1.3-0.6 0.6-1.3z" fill="currentColor" stroke="none" />
                <path d="M6 16l0.5 1.1 1.1 0.5-1.1 0.5-0.5 1.1-0.5-1.1-1.1-0.5 1.1-0.5 0.5-1.1z" fill="currentColor" stroke="none" />
            </svg>
        );
    }
    if (variant === 3) {
        // Option 3: 밤하늘 유려한 은하수 곡선 & 견우직녀 별 (Night Sky Flow)
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M2 17C7 15 9 8 16 5c3-1.2 5-0.5 6 1" strokeOpacity="0.9" />
                <path d="M4 21C9 19 11 12 18 9c3-1.2 4.5-0.5 5 0.5" strokeOpacity="0.5" />
                {/* Accent Stars */}
                <path d="M15 3.5l0.8 1.8 1.8 0.8-1.8 0.8-0.8 1.8-0.8-1.8-1.8-0.8 1.8-0.8 0.8-1.8z" fill="currentColor" stroke="none" />
                <path d="M6 13.5l0.7 1.5 1.5 0.7-1.5 0.7-0.7 1.5-0.7-1.5-1.5-0.7 1.5-0.7 0.7-1.5z" fill="currentColor" stroke="none" />
                <circle cx="12" cy="11" r="1.1" fill="currentColor" />
                <circle cx="9" cy="16" r="0.7" fill="currentColor" opacity="0.6" />
                <circle cx="18" cy="7" r="0.7" fill="currentColor" opacity="0.6" />
            </svg>
        );
    }
    if (variant === 4) {
        // Option 4: 솟아오르는 은하수 아치 & 성단 (Milky Way Arch)
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M2 20C4 10 12 4 22 4" strokeOpacity="0.85" />
                <path d="M4 22C6 13 14 7 22 7" strokeDasharray="2 3" strokeOpacity="0.5" />
                {/* 3 Bright Accent Stars along the arch */}
                <path d="M19 3l0.7 1.6 1.6 0.7-1.6 0.7-0.7 1.6-0.7-1.6-1.6-0.7 1.6-0.7 0.7-1.6z" fill="currentColor" stroke="none" />
                <path d="M12 7.5l0.6 1.4 1.4 0.6-1.4 0.6-0.6 1.4-0.6-1.4-1.4-0.6 1.4-0.6 0.6-1.4z" fill="currentColor" stroke="none" />
                <path d="M6 14.5l0.5 1.2 1.2 0.5-1.2 0.5-0.5 1.2-0.5-1.2-1.2-0.5 1.2-0.5 0.5-1.2z" fill="currentColor" stroke="none" />
                <circle cx="16" cy="6" r="0.8" fill="currentColor" opacity="0.7" />
                <circle cx="9" cy="11" r="0.7" fill="currentColor" opacity="0.7" />
            </svg>
        );
    }
    // Default Option 1: 은하수 물결 띠 & 2개의 또렷한 별빛 (Celestial River)
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 18C8 16 10 9 17 6c2-0.8 3.5-0.5 4 0" strokeOpacity="0.5" />
            <path d="M5 21C10 18 12 11 19 8c1.5-0.6 3-0.3 3.5 0.2" strokeOpacity="0.85" />
            <path d="M2 15C6 14 8 7 15 4" strokeDasharray="1.5 2.5" strokeOpacity="0.4" />
            {/* Accent Stars */}
            <path d="M17 4.5l0.8 1.8 1.8 0.8-1.8 0.8-0.8 1.8-0.8-1.8-1.8-0.8 1.8-0.8 0.8-1.8z" fill="currentColor" stroke="none" />
            <path d="M7 13.5l0.7 1.5 1.5 0.7-1.5 0.7-0.7 1.5-0.7-1.5-1.5-0.7 1.5-0.7 0.7-1.5z" fill="currentColor" stroke="none" />
            {/* Micro stardust dots */}
            <circle cx="12" cy="11" r="0.9" fill="currentColor" opacity="0.7" />
            <circle cx="10" cy="15" r="0.7" fill="currentColor" opacity="0.5" />
            <circle cx="14" cy="7" r="0.8" fill="currentColor" opacity="0.7" />
        </svg>
    );
};

const Navbar = ({ logoVariant = 1, onSelectLogo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLogoPicker, setShowLogoPicker] = useState(false);

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

    const logoOptions = [
        { id: 1, name: '시안 1: 은하수 물결 & 별빛 (Celestial River)' },
        { id: 2, name: '시안 2: 점묘 은하수 & 3대 주성 (Stardust Stream)' },
        { id: 3, name: '시안 3: 밤하늘 곡선 & 견우직녀 (Night Sky Flow)' },
        { id: 4, name: '시안 4: 솟아오르는 은하수 아치 (Milky Way Arch)' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with Option to Preview Variants */}
                <div className="flex items-center space-x-3">
                    <a href="#home" className="flex items-center space-x-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-all shadow-md shadow-blue-500/10">
                            <EunhasuLogoIcon variant={logoVariant} className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-white font-outfit flex items-center gap-1">
                                은하수 <span className="text-blue-400">AI</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium -mt-1">
                                Eunhasu AI
                            </span>
                        </div>
                    </a>

                    {/* Logo Switcher for Earth-view Milky Way */}
                    <button
                        onClick={() => setShowLogoPicker(!showLogoPicker)}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-300 hover:border-blue-500/40 transition-colors"
                        title="은하수 흐름 로고 시안 4종 미리보기 변경"
                    >
                        <span>은하수 시안 #{logoVariant}</span>
                        <span className="text-[9px] text-blue-400">선택 ▾</span>
                    </button>
                </div>

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
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Remote AI APK 받기
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

            {/* Logo Picker Popover */}
            {showLogoPicker && (
                <div className="max-w-6xl mx-auto px-6 pt-2">
                    <div className="p-3 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl flex flex-wrap items-center gap-2 text-xs text-slate-300">
                        <span className="text-slate-400 font-semibold mr-1">🌌 은하수 시안:</span>
                        {logoOptions.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => {
                                    if (onSelectLogo) onSelectLogo(opt.id);
                                    setShowLogoPicker(false);
                                }}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${logoVariant === opt.id ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                            >
                                <EunhasuLogoIcon variant={opt.id} className="w-4 h-4" />
                                <span>{opt.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

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
