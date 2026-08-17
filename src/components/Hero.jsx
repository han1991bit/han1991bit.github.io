import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, ArrowRight, Terminal, ShieldCheck, Mail, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-16">
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>은하수 AI · 실용적인 AI 도구 & 자율 에이전트 시스템</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 font-outfit">
                    PC 앞을 지키지 않아도,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                        로컬 AI는 모바일로 계속 일합니다.
                    </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    은하수 AI(Eunhasu AI)는 PC에서 구동 중인 로컬 AI 에이전트를 스마트폰에서 실시간 모니터링하고 원격 승인하는 <strong>Remote AI</strong>와 실무에 바로 쓰는 맞춤형 AI 자동화 도구를 만듭니다.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 mb-14">
                    <a 
                        href="#remote-ai" 
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        Remote AI 사용법 & APK 받기
                    </a>
                    <a 
                        href="#contact" 
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all border border-slate-800 flex items-center justify-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        개발 의뢰 및 문의 (eunhasuai@gmail.com)
                    </a>
                </div>

                {/* 3 Clear Grounded Facts */}
                <div className="grid sm:grid-cols-3 gap-4 text-left p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                    <div className="p-2">
                        <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                            <Terminal className="w-4 h-4 text-blue-400" />
                            로컬 에이전트 연동
                        </div>
                        <p className="text-xs text-slate-400">Codex, Antigravity, Claude 등 PC CLI 실시간 제어</p>
                    </div>

                    <div className="p-2">
                        <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                            <Smartphone className="w-4 h-4 text-emerald-400" />
                            모바일 원터치 승인
                        </div>
                        <p className="text-xs text-slate-400">외출 중에도 스마트폰으로 파일 수정 및 터미널 실행 승인</p>
                    </div>

                    <div className="p-2">
                        <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                            <ShieldCheck className="w-4 h-4 text-purple-400" />
                            안전한 로컬 격리
                        </div>
                        <p className="text-xs text-slate-400">일회용 QR 페어링과 암호화 토큰으로 로컬 PC 보안 보호</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
