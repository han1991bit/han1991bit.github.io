import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 공통 defs (30도 가로 은하수 리본 그라데이션)
const RenderDefs = ({ id }) => (
    <defs>
        <linearGradient id={`streamGrad30_${id}`} x1="0%" y1="70%" x2="100%" y2="30%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`subStreamGrad30_${id}`} x1="0%" y1="55%" x2="100%" y2="35%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.14" />
        </linearGradient>
    </defs>
);

// 30도 완만한 가로 은하수 리본 공통 배경
const RibbonBackground = ({ id }) => (
    <>
        <RenderDefs id={id} />
        {/* 1. Main 30-deg Horizontal Ribbon */}
        <path
            d="M 0 66 C 25 56, 42 66, 68 46 C 82 34, 92 26, 100 20 L 100 46 C 85 58, 65 72, 40 78 C 20 82, 10 80, 0 84 Z"
            fill={`url(#streamGrad30_${id})`}
        />
        {/* 2. Overlapping Soft Layer */}
        <path
            d="M 0 52 C 25 44, 45 54, 72 36 C 86 26, 94 18, 100 12 L 100 24 C 85 36, 65 52, 38 64 C 18 70, 8 68, 0 70 Z"
            fill={`url(#subStreamGrad30_${id})`}
        />
    </>
);

// [9시 방향 별 위치를 아래로 내려 메인별과 겹치지 않게 조정한 점(Dots) 컴포넌트]
const AdjustedSatelliteDots = ({ dotY = 58, dotX = 13 }) => (
    <>
        {/* 9시 방향 별을 메인별 좌측 날개(y: 47) 아래(y: dotY)로 내려 명확히 구분 */}
        <circle cx={dotX} cy={dotY} r="1.8" fill="#ffffff" opacity="0.85" />
        <circle cx="88" cy="22" r="1.8" fill="#ffffff" opacity="0.85" />
        <circle cx="36" cy="74" r="1.6" fill="#ffffff" opacity="0.75" />
    </>
);

// [9시 별 위치 하향 조정 & 아웃라인 두께별 4종]
export const EunhasuLogoIcon = ({ variant = 1, className = "w-7 h-7" }) => {
    if (variant === 2) {
        // 시안 2: [시안 3 기반 - 5.2px 아웃라인 + 9시 별 더 아래/외곽 (x:11, y:62)]
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <RibbonBackground id="v2" />
                {/* 1. Center Large Star (Heavy 5.2px) */}
                <path
                    d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
                    stroke="#ffffff"
                    strokeWidth="5.2"
                    strokeLinejoin="round"
                />
                {/* 2. Top-Left Star */}
                <path
                    d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
                    stroke="#ffffff"
                    strokeWidth="3.8"
                    strokeLinejoin="round"
                />
                {/* 3. Bottom-Right Star */}
                <path
                    d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
                    stroke="#ffffff"
                    strokeWidth="3.8"
                    strokeLinejoin="round"
                />
                {/* 9시 별: x:11, y:62로 넉넉하게 이격 */}
                <AdjustedSatelliteDots dotX={11} dotY={62} />
            </svg>
        );
    }

    if (variant === 3) {
        // 시안 3: [4.5px 볼드 아웃라인 + 9시 별 y:58 하향]
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <RibbonBackground id="v3" />
                {/* 1. Center Large Star (Bold 4.5px) */}
                <path
                    d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                />
                {/* 2. Top-Left Star */}
                <path
                    d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
                    stroke="#ffffff"
                    strokeWidth="3.4"
                    strokeLinejoin="round"
                />
                {/* 3. Bottom-Right Star */}
                <path
                    d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
                    stroke="#ffffff"
                    strokeWidth="3.4"
                    strokeLinejoin="round"
                />
                <AdjustedSatelliteDots dotX={13} dotY={58} />
            </svg>
        );
    }

    if (variant === 4) {
        // 시안 4: [솔리드 순백색 별 + 9시 별 y:58 하향]
        return (
            <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <RibbonBackground id="v4" />
                {/* 1. Center Large Star (Solid Pure White) */}
                <path
                    d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
                    fill="#ffffff"
                />
                {/* 2. Top-Left Star */}
                <path
                    d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
                    fill="#ffffff"
                />
                {/* 3. Bottom-Right Star */}
                <path
                    d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
                    fill="#ffffff"
                />
                <AdjustedSatelliteDots dotX={13} dotY={58} />
            </svg>
        );
    }

    // Default 시안 1: [시안 3 원본 두께 5.2px + 9시 별 y:58 하향 조정 - 메인별 겹침 완전 해소]
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <RibbonBackground id="v1" />
            {/* 1. Center Large Star (Heavy Outlined 5.2px) */}
            <path
                d="M 50 16 C 50 38, 59 47, 81 47 C 59 47, 50 56, 50 78 C 50 56, 41 47, 19 47 C 41 47, 50 38, 50 16 Z"
                stroke="#ffffff"
                strokeWidth="5.2"
                strokeLinejoin="round"
            />
            {/* 2. Top-Left Star (3.8px) */}
            <path
                d="M 20 6 C 20 17, 24 21, 35 21 C 24 21, 20 25, 20 36 C 20 25, 16 21, 5 21 C 16 21, 20 17, 20 6 Z"
                stroke="#ffffff"
                strokeWidth="3.8"
                strokeLinejoin="round"
            />
            {/* 3. Bottom-Right Star (3.8px) */}
            <path
                d="M 80 58 C 80 68, 84 72, 94 72 C 84 72, 80 76, 80 86 C 80 76, 76 72, 66 72 C 76 72, 80 68, 80 58 Z"
                stroke="#ffffff"
                strokeWidth="3.8"
                strokeLinejoin="round"
            />
            {/* 9시 별을 y:46에서 y:58로 내려 메인별 좌측 끝(y:47)과의 겹침 완벽 해결 */}
            <AdjustedSatelliteDots dotX={13} dotY={58} />
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
        { id: 1, name: '시안 1: 5.2px 헤비 아웃라인 (9시 별 하향 y:58 - 기본)' },
        { id: 2, name: '시안 2: 5.2px 헤비 아웃라인 (9시 별 더 아래 x:11, y:62)' },
        { id: 3, name: '시안 3: 4.5px 볼드 아웃라인 (9시 별 하향 y:58)' },
        { id: 4, name: '시안 4: 솔리드 순백색 별 (9시 별 하향 y:58)' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* Brand Logo with Adjusted 9 o'clock star */}
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
                        title="9시 별 위치 조정 시안 4종 미리보기 변경"
                    >
                        <span>9시 별 조정 #{logoVariant}</span>
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
                        <span className="text-slate-400 font-semibold mr-1">🔍 9시 별 조정 시안:</span>
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
