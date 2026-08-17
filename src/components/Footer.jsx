import React from 'react';
import { Sparkles, Mail, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-950 py-16 border-t border-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <span className="text-xl font-bold text-white font-outfit">
                                은하수 <span className="text-blue-400">AI</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            유한회사 은하수인공지능(Eunhasu AI LC.)은 원격 AI 에이전트 오케스트레이션과 지능형 엔터프라이즈 솔루션을 통해 미래를 개척하는 기술 기업입니다.
                        </p>
                        <div className="text-xs text-slate-500 space-y-1">
                            <div>법인명: 유한회사 은하수인공지능 (Eunhasu AI LC.)</div>
                            <div>대표 문의: <a href="mailto:eunhasuai@gmail.com" className="text-blue-400 hover:underline">eunhasuai@gmail.com</a></div>
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">주요 메뉴</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-white transition-colors">홈 (Home)</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">회사 소개 (About)</a></li>
                            <li><a href="#remote-ai" className="hover:text-white transition-colors">Remote AI (플래그십)</a></li>
                            <li><a href="#solutions" className="hover:text-white transition-colors">솔루션 & 서비스 (Solutions)</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">프로젝트 문의 (Contact)</a></li>
                        </ul>
                    </div>

                    {/* Solutions & Products */}
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">제품 및 릴리즈</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a 
                                    href="https://github.com/han1991bit/remote-codex" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                                >
                                    Remote AI · GitHub 저장소
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/han1991bit/remote-codex/releases" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                                >
                                    Android APK 다운로드 (v1.0.0)
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:eunhasuai@gmail.com" 
                                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    eunhasuai@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} Eunhasu AI LC. (유한회사 은하수인공지능). All rights reserved.</p>
                    <p>Powered by Eunhasu AI Orchestration & Modern Web Technology</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
