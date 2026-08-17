import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 4 Ultra-Minimal Icon Variants (No text/letters, clean geometric line art)
export const EunhasuLogoIcon = ({ variant = 1, className = "w-5 h-5" }) => {
    if (variant === 2) {
        // Option 2: Minimal Orbit Ring & Core
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-30 12 12)" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.25" />
            </svg>
        );
    }
    if (variant === 3) {
        // Option 3: Triple Spiral Galaxy
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 4a8 8 0 0 1 8 8c0 2.5-1.5 4.8-3.8 5.8" />
                <path d="M4 12a8 8 0 0 1 8-8c2.5 0 4.8 1.5 5.8 3.8" />
                <path d="M12 20a8 8 0 0 1-8-8c0-2.5 1.5-4.8 3.8-5.8" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        );
    }
    if (variant === 4) {
        // Option 4: Dual Constellation Stars (Worker + Supervisor Pairing)
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3l1.2 3.8L23 8l-3.8 1.2L18 13l-1.2-3.8L13 8l3.8-1.2L18 3z" />
                <path d="M7 13l0.8 2.2L10 16l-2.2 0.8L7 19l-0.8-2.2L4 16l2.2-0.8L7 13z" />
                <line x1="14.5" y1="9.5" x2="8.5" y2="14.5" stroke="currentColor" strokeDasharray="2 2" />
            </svg>
        );
    }
    // Default Option 1: Clean 4-Point Sparkle Star + Satellite Dot
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            <circle cx="19" cy="19" r="1.5" fill="currentColor" />
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
        { id: 1, name: '1. 별빛 심볼 (Sparkle)' },
        { id: 2, name: '2. 궤도 링 (Orbit)' },
        { id: 3, name: '3. 은하 나선 (Spiral)' },
        { id: 4, name: '4. 별자리 (Constellation)' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with Option to Preview Variants */}
                <div className="flex items-center space-x-3">
                    <a href="#home" className="flex items-center space-x-2.5 group">
                        <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <EunhasuLogoIcon variant={logoVariant} className="w-5 h-5" />
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

                    {/* Simple Logo Switcher */}
                    <button
                        onClick={() => setShowLogoPicker(!showLogoPicker)}
                        className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-300 hover:border-slate-700 transition-colors"
                        title="아이콘 시안 4종 미리보기 변경"
                    >
                        <span>아이콘 #{logoVariant}</span>
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

            {/* Logo Picker Bar */}
            {showLogoPicker && (
                <div className="max-w-6xl mx-auto px-6 pt-2">
                    <div className="p-3 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl flex flex-wrap items-center gap-2 text-xs text-slate-300">
                        <span className="text-slate-400 font-semibold mr-1">아이콘 시안:</span>
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
