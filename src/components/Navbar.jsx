import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// [스케치 기반 전폭 와이드 & 연한 미니멀 컬러 은하수 로고 4종]
export const EunhasuLogoIcon = ({ variant = 1, className = "w-7 h-7" }) => {
    // 공통 defs (단색/아이스블루 미니멀 투명 그라데이션)
    const renderDefs = (id) => (
        <defs>
            <linearGradient id={`streamGrad_${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="40%" stopColor="#e0f2fe" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id={`subStreamGrad_${id}`} x1="0%" y1="80%" x2="100%" y2="20%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.15" />
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.12" />
            </linearGradient>
        </defs>
    );

    if (variant === 2) {
        // 시안 2: 다층 투명 리본 밴드 (전폭 엣지투엣지)
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderDefs('v2')}
                {/* 1. Main Wide Flow Ribbon */}
                <path
                    d="M 0 85 C 20 75, 40 60, 65 35 C 80 20, 90 10, 100 0 L 100 25 C 85 45, 60 70, 35 85 C 20 95, 10 98, 0 100 Z"
                    fill="url(#streamGrad_v2)"
                />
                {/* 2. Secondary Overlapping Soft Ribbon */}
                <path
                    d="M 0 65 C 25 55, 45 45, 70 25 C 85 12, 92 5, 100 0 L 100 12 C 85 30, 60 55, 30 75 C 15 85, 5 90, 0 92 Z"
                    fill="url(#subStreamGrad_v2)"
                />
                {/* Center Main Star */}
                <path
                    d="M 52 24 C 52 42, 58 48, 76 48 C 58 48, 52 54, 52 72 C 52 54, 46 48, 28 48 C 46 48, 52 42, 52 24 Z"
                    fill="#ffffff"
                />
                {/* Top-Left Star */}
                <path
                    d="M 22 10 C 22 18, 25 21, 33 21 C 25 21, 22 24, 22 32 C 22 24, 19 21, 11 21 C 19 21, 22 18, 22 10 Z"
                    fill="#ffffff"
                />
                {/* Bottom-Right Star */}
                <path
                    d="M 80 62 C 80 70, 83 73, 91 73 C 83 73, 80 76, 80 84 C 80 76, 77 73, 69 73 C 77 73, 80 70, 80 62 Z"
                    fill="#ffffff"
                />
                {/* Scattered Satellite Dots */}
                <circle cx="15" cy="45" r="1.5" fill="#ffffff" opacity="0.8" />
                <circle cx="38" cy="72" r="1.8" fill="#ffffff" opacity="0.7" />
                <circle cx="88" cy="28" r="1.5" fill="#ffffff" opacity="0.8" />
                <circle cx="68" cy="15" r="1.2" fill="#ffffff" opacity="0.6" />
            </svg>
        );
    }

    if (variant === 3) {
        // 시안 3: 은하 성운 점묘와 와이드 별빛 (Stardust Dust Cloud)
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderDefs('v3')}
                {/* Translucent Soft Stream */}
                <path
                    d="M 0 90 C 25 80, 45 60, 68 35 C 82 18, 92 8, 100 0 L 100 30 C 85 50, 60 75, 32 90 C 18 97, 8 100, 0 100 Z"
                    fill="url(#streamGrad_v3)"
                />
                {/* Stardust Dot Field across the band */}
                <g fill="#ffffff" opacity="0.75">
                    <circle cx="12" cy="82" r="1" /><circle cx="18" cy="76" r="1.2" /><circle cx="25" cy="72" r="0.8" />
                    <circle cx="32" cy="65" r="1.2" /><circle cx="40" cy="58" r="1" /><circle cx="48" cy="52" r="1.4" />
                    <circle cx="58" cy="42" r="1.1" /><circle cx="66" cy="34" r="1.3" /><circle cx="75" cy="26" r="1" />
                    <circle cx="84" cy="18" r="1.2" /><circle cx="92" cy="10" r="0.9" />
                    <circle cx="28" cy="85" r="0.8" /><circle cx="52" cy="66" r="1" /><circle cx="74" cy="45" r="0.9" />
                    <circle cx="60" cy="22" r="0.8" /><circle cx="82" cy="38" r="1" />
                </g>
                {/* Center Star */}
                <path
                    d="M 50 25 C 50 42, 56 48, 73 48 C 56 48, 50 54, 50 71 C 50 54, 44 48, 27 48 C 44 48, 50 42, 50 25 Z"
                    fill="#ffffff"
                />
                {/* Upper Left Star */}
                <path
                    d="M 22 10 C 22 18, 25 21, 33 21 C 25 21, 22 24, 22 32 C 22 24, 19 21, 11 21 C 19 21, 22 18, 22 10 Z"
                    fill="#ffffff"
                />
                {/* Lower Right Star */}
                <path
                    d="M 80 62 C 80 70, 83 73, 91 73 C 83 73, 80 76, 80 84 C 80 76, 77 73, 69 73 C 77 73, 80 70, 80 62 Z"
                    fill="#ffffff"
                />
            </svg>
        );
    }

    if (variant === 4) {
        // 시안 4: 완만한 와이드 수평-대각선 흐름 (Wide Sweeping Stream)
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderDefs('v4')}
                <path
                    d="M 0 75 C 25 65, 45 75, 70 50 C 85 35, 92 18, 100 0 L 100 28 C 88 50, 68 75, 45 88 C 25 98, 10 95, 0 90 Z"
                    fill="url(#streamGrad_v4)"
                />
                {/* Center Star */}
                <path
                    d="M 52 26 C 52 42, 58 48, 74 48 C 58 48, 52 54, 52 70 C 52 54, 46 48, 30 48 C 46 48, 52 42, 52 26 Z"
                    fill="#ffffff"
                />
                {/* Top Left Star */}
                <path
                    d="M 20 12 C 20 20, 23 23, 31 23 C 23 23, 20 26, 20 34 C 20 26, 17 23, 9 23 C 17 23, 20 20, 20 12 Z"
                    fill="#ffffff"
                />
                {/* Bottom Right Star */}
                <path
                    d="M 82 64 C 82 72, 85 75, 93 75 C 85 75, 82 78, 82 86 C 82 78, 79 75, 71 75 C 79 75, 82 72, 82 64 Z"
                    fill="#ffffff"
                />
                <circle cx="16" cy="50" r="1.5" fill="#ffffff" opacity="0.75" />
                <circle cx="42" cy="78" r="1.6" fill="#ffffff" opacity="0.8" />
                <circle cx="86" cy="24" r="1.5" fill="#ffffff" opacity="0.75" />
            </svg>
        );
    }

    // Default 시안 1: 전폭 소프트 웨이브 & 맑은 화이트 주성 (Full-Bleed Soft Wave)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {renderDefs('v1')}
            {/* 1. Full-Bleed Translucent Milky Way Stream */}
            <path
                d="M 0 78 C 18 68, 38 68, 62 42 C 78 24, 88 12, 100 0 L 100 24 C 86 44, 65 68, 42 84 C 24 96, 10 96, 0 94 Z"
                fill="url(#streamGrad_v1)"
            />
            {/* Fine Dotted Dust Trail */}
            <path
                d="M 0 86 C 22 76, 42 74, 66 48 C 82 30, 92 16, 100 6"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeDasharray="2 4"
                opacity="0.45"
            />
            {/* 2. Center Prominent Star (중앙 대형 주성) */}
            <path
                d="M 50 22 C 50 41, 57 48, 76 48 C 57 48, 50 55, 50 74 C 50 55, 43 48, 24 48 C 43 48, 50 41, 50 22 Z"
                fill="#ffffff"
            />
            {/* 3. Upper-Left Star (좌측 상단 별) */}
            <path
                d="M 20 8 C 20 17, 23 20, 32 20 C 23 20, 20 23, 20 32 C 20 23, 17 20, 8 20 C 17 20, 20 17, 20 8 Z"
                fill="#ffffff"
            />
            {/* 4. Lower-Right Star (우측 하단 별) */}
            <path
                d="M 80 62 C 80 71, 83 74, 92 74 C 83 74, 80 77, 80 86 C 80 77, 77 74, 68 74 C 77 74, 80 71, 80 62 Z"
                fill="#ffffff"
            />
            {/* 5. Satellite Dots (원형 보조 별빛) */}
            <circle cx="12" cy="46" r="1.8" fill="#ffffff" opacity="0.8" />
            <circle cx="36" cy="74" r="1.8" fill="#ffffff" opacity="0.75" />
            <circle cx="86" cy="22" r="1.8" fill="#ffffff" opacity="0.8" />
            <circle cx="68" cy="14" r="1.4" fill="#ffffff" opacity="0.6" />
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
        { id: 1, name: '시안 1: 전폭 소프트 웨이브 (Soft Wave)' },
        { id: 2, name: '시안 2: 다층 투명 리본 (Layered Ribbon)' },
        { id: 3, name: '시안 3: 성운 점묘 & 별빛 (Stardust Dust)' },
        { id: 4, name: '시안 4: 와이드 은하수 흐름 (Wide Stream)' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with Spacious Full-Box Design */}
                <div className="flex items-center space-x-3">
                    <a href="#home" className="flex items-center space-x-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1 group-hover:border-blue-400/60 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
                            <EunhasuLogoIcon variant={logoVariant} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-white font-outfit flex items-center gap-1">
                                은하수 <span className="text-blue-400">AI</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
                                Eunhasu AI
                            </span>
                        </div>
                    </a>

                    {/* Logo Switcher */}
                    <button
                        onClick={() => setShowLogoPicker(!showLogoPicker)}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-300 hover:border-blue-500/40 transition-colors"
                        title="와이드 은하수 시안 4종 미리보기 변경"
                    >
                        <span>와이드 시안 #{logoVariant}</span>
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
                        <span className="text-slate-400 font-semibold mr-1">🌌 와이드 은하수 시안:</span>
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
