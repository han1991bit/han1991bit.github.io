import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '홈', href: '#home' },
        { name: '회사 소개', href: '#about' },
        { name: 'Remote AI (제품)', href: '#remote-ai' },
        { name: '솔루션 & 서비스', href: '#solutions' },
        { name: '문의하기', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center space-x-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white font-outfit flex items-center gap-1.5">
                            은하수 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-extrabold">AI</span>
                        </span>
                        <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium -mt-1">
                            Eunhasu AI LC.
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all text-sm font-medium tracking-tight"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-3">
                    <a
                        href="mailto:eunhasuai@gmail.com"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-900/30 transition-all hover:scale-105"
                    >
                        <Send className="w-3.5 h-3.5" />
                        솔루션 도입 문의
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
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-slate-900 text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-2 border-t border-slate-800">
                                <a
                                    href="mailto:eunhasuai@gmail.com"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-900/30"
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
