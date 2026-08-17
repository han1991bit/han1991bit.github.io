import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bot, Cpu, ShieldCheck, Layers, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-20">
            {/* Background Ambient Glow & Cosmic Light */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[30%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-indigo-950/30 to-transparent blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-slate-950/40 to-transparent blur-2xl" />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-8 glow-pill backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                    <span>Next-Gen Comprehensive AI Solutions & Agent Systems</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-outfit"
                >
                    지능의 한계를 넘어,<br />
                    비즈니스를 혁신하는{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                        은하수 AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    유한회사 은하수인공지능(Eunhasu AI)은{' '}
                    <strong className="text-blue-300 font-semibold">원격 AI 에이전트 오케스트레이션(Remote AI)</strong>부터 
                    엔터프라이즈 업무 자동화, 도메인 특화 LLM 구축 및 지능형 데이터 분석까지 
                    현대 비즈니스를 위한 최첨단 올인원 AI 솔루션을 제공합니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
                >
                    <a 
                        href="#remote-ai" 
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2 group"
                    >
                        <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Remote AI 알아보기
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                        href="#solutions" 
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base transition-all border border-slate-700/80 backdrop-blur-md"
                    >
                        솔루션 & 서비스 둘러보기
                    </a>
                </motion.div>

                {/* Key Metrics / Highlights Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl"
                >
                    <div className="text-left p-3 border-r border-slate-800/60 last:border-0">
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                            <Terminal className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Orchestration</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">Multi-Agent Relay</div>
                        <div className="text-xs text-slate-400 mt-0.5">Codex · Antigravity · Claude</div>
                    </div>

                    <div className="text-left p-3 border-r border-slate-800/60 last:border-0">
                        <div className="flex items-center gap-2 text-purple-400 mb-1">
                            <Cpu className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Automation</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">24/7 Intelligent</div>
                        <div className="text-xs text-slate-400 mt-0.5">지능형 워크플로우 파이프라인</div>
                    </div>

                    <div className="text-left p-3 border-r border-slate-800/60 last:border-0">
                        <div className="flex items-center gap-2 text-emerald-400 mb-1">
                            <Layers className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Custom LLM</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">Domain-Specific</div>
                        <div className="text-xs text-slate-400 mt-0.5">비즈니스 맞춤형 파인튜닝 & RAG</div>
                    </div>

                    <div className="text-left p-3">
                        <div className="flex items-center gap-2 text-sky-400 mb-1">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Security</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">Secure Isolated</div>
                        <div className="text-xs text-slate-400 mt-0.5">기업 보안 & 엔드투엔드 암호화</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
