import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Download, Sparkles, Orbit, Layers, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Logo Icon Component supporting 4 clean variants
export const EunhasuLogoIcon = ({ variant = 1, className = "w-5 h-5" }) => {
    if (variant === 2) {
        // Variant 2: Orbit Network
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" stroke="currentColor" strokeDasharray="3 3" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" stroke="currentColor" />
                <circle cx="19" cy="8" r="1.5" fill="currentColor" />
            </svg>
        );
    }
    if (variant === 3) {
        // Variant 3: Galactic Stream E
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M19 6C15 5 8 5 6 9c-2 4 1 8 6 8 4 0 7-2 7-5M6 12h10" />
                <circle cx="19" cy="5" r="1.5" fill="currentColor" />
            </svg>
        );
    }
    if (variant === 4) {
        // Variant 4: Constellation
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="6" cy="6" r="2" fill="currentColor" />
                <circle cx="18" cy="7" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
                <line x1="6" y1="6" x2="18" y2="7" stroke="currentColor" />
                <line x1="18" y1="7" x2="12" y2="18" stroke="currentColor" />
                <line x1="12" y1="18" x2="6" y2="6" stroke="currentColor" strokeDasharray="2 2" />
            </svg>
        );
    }
    // Default Variant 1: Modern Galaxy Whirlpool Spiral
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 3a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8M12 21a9 9 0 0 1-9-9c0-3.5 2-6.5 5-8" />
            <path d="M12 7a5 5 0 0 1 5 5c0 2-1 3.8-3 4.5M12 17a5 5 0 0 1-5-5c0-2 1-3.8 3-4.5" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
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

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with Option to Preview Variants */}
                <div className="flex items-center space-x-3">
                    <a href="#home" className="flex items-center space-x-2.5 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            <EunhasuLogoIcon variant={logoVariant} className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-white font-outfit flex items-center gap-1">
                                은하수 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium -mt-1">
                                Eunhasu AI
                            </span>
                        </div>
                    </a>

                    {/* Quick Logo Style Switcher Button */}
                    <button
                        onClick={() => setShowLogoPicker(!showLogoPicker)}
                        className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-300 hover:border-slate-700 transition-colors"
                        title="로고 시안 4종 미리보기 변경"
                    >
                        <span>시안 #{logoVariant}</span>
                        <span className="text-[9px] text-blue-400">변경 ▾</span>
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

            {/* Logo Picker Popover */}
            {showLogoPicker && (
                <div className="max-w-6xl mx-auto px-6 pt-2">
                    <div className="p-3 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl flex flex-wrap items-center gap-3 text-xs text-slate-300">
                        <span className="text-slate-400 font-semibold">🎨 로고 시안 선택:</span>
                        {[
                            { id: 1, label: '시안 1: 은하 나선(Whirlpool)' },
                            { id: 2, label: '시안 2: 궤도 네트워크(Orbit)' },
                            { id: 3, label: '시안 3: 스트림 E(Stream E)' },
                            { id: 4, label: '시안 4: 별자리 네트워크(Constellation)' },
                        ].map((v) => (
                            <button
                                key={v.id}
                                onClick={() => {
                                    if (onSelectLogo) onSelectLogo(v.id);
                                    setShowLogoPicker(false);
                                }}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${logoVariant === v.id ? 'bg-blue-600/20 border-blue-500 text-blue-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                            >
                                <EunhasuLogoIcon variant={v.id} className="w-4 h-4" />
                                <span>{v.label}</span>
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
                                    Remote AI APK 다운로드 (v1.0.0)
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
