import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap, Sparkles, Orbit, Network, Activity } from 'lucide-react';

const About = () => {
    const pillars = [
        {
            title: "자율 에이전트 오케스트레이션",
            desc: "단일 명령으로 다중 AI 에이전트가 협업하고 완료까지 자율 수행하는 차세대 제어 아키텍처를 설계합니다."
        },
        {
            title: "엔터프라이즈 워크플로우 지능화",
            desc: "기업 내 복잡한 수작업과 데이터 처리 과정을 고신뢰성 인공지능 파이프라인으로 완전 자동화합니다."
        },
        {
            title: "도메인 맞춤형 LLM & RAG",
            desc: "보안이 확보된 사내 지식 기반 RAG 및 도메인 특화 모델 최적화로 환각을 줄이고 정밀성을 극대화합니다."
        },
        {
            title: "엔드투엔드 보안 & 안정성",
            desc: "토큰 기반 인증, 온프레미스/하이브리드 격리망 지원으로 최고 수준의 기업 정보 자산을 보호합니다."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        About Eunhasu AI
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-outfit">
                        인공지능 기술의 새로운 가능성을<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            실질적인 비즈니스 가치로
                        </span> 만듭니다.
                    </h2>
                    
                    <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                        유한회사 은하수인공지능(Eunhasu AI LC.)은 빠르게 진화하는 AI 모델과 에이전트 생태계를
                        기업과 개발자가 가장 직관적이고 강력하게 활용할 수 있도록 지원하는 <strong>종합 AI 기술 기업</strong>입니다.
                        원격 제어 시스템, 지능형 업무 자동화, 데이터 분석 솔루션을 통해 고객의 경쟁력을 비약적으로 끌어올립니다.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center space-x-2.5 mb-2">
                                    <CheckCircle2 className="text-blue-400 w-5 h-5 flex-shrink-0" />
                                    <h3 className="text-white font-semibold text-sm">{pillar.title}</h3>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed pl-7">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Abstract Interactive Galactic Orbit Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/90 to-purple-950/30 border border-slate-800 p-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl" />
                        
                        {/* Orbit Circles */}
                        <div className="w-full h-full flex items-center justify-center relative">
                            {/* Outer orbital ring */}
                            <div className="w-[88%] h-[88%] border border-blue-500/20 rounded-full animate-spin-slow flex items-center justify-between p-2">
                                <div className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_#38bdf8]" />
                                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
                            </div>

                            {/* Middle orbital ring */}
                            <div className="absolute w-[64%] h-[64%] border border-purple-500/30 rounded-full animate-reverse-spin flex items-center justify-around">
                                <div className="w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
                            </div>

                            {/* Inner orbital ring */}
                            <div className="absolute w-[40%] h-[40%] border border-emerald-500/30 rounded-full animate-spin-slow" />

                            {/* Center Core Badge */}
                            <div className="absolute w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-500/40 border border-white/20 p-2 text-center">
                                <Orbit className="w-7 h-7 mb-1 animate-pulse" />
                                <span className="text-[11px] font-bold tracking-wider font-outfit uppercase">Eunhasu AI</span>
                                <span className="text-[9px] text-blue-200">Core Engine</span>
                            </div>
                        </div>

                        {/* Status Float Badges */}
                        <div className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1.5 backdrop-blur-md">
                            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                            <span>System Status: 99.99% Operational</span>
                        </div>

                        <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1.5 backdrop-blur-md">
                            <Network className="w-3.5 h-3.5 text-blue-400" />
                            <span>Multi-Agent Mesh Active</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
