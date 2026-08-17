import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, ShieldCheck, Terminal, Download, ArrowUpRight, Zap, Check, QrCode, Cpu, Layers } from 'lucide-react';

const ProductRemoteAI = () => {
    const highlights = [
        {
            icon: <Smartphone className="w-6 h-6 text-blue-400" />,
            title: "모바일 원격 감독 (Mobile Supervisor)",
            desc: "스마트폰 카메라로 QR 코드를 스캔하여 즉시 연동. 이동 중에도 AI 에이전트의 작업 진행 상황, 터미널 로그, 변경 파일 내역을 실시간 감시합니다."
        },
        {
            icon: <Terminal className="w-6 h-6 text-indigo-400" />,
            title: "멀티 에이전트 릴레이 (Multi-Agent Relay)",
            desc: "PC 로컬에 설치된 Codex, Antigravity, Claude 등 복수의 AI 워커를 단일 허브에서 통합 지휘하며, 쿼타와 부하를 고려해 최적 분배합니다."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: "원터치 승인 & 보안 격리 (Secure Approval)",
            desc: "파일 수정, 터미널 명령어 실행 등 위험 작업 발생 시 모바일에서 원터치 승인/반려. 일회용 암호화 토큰으로 완벽한 통신 보안을 보장합니다."
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            title: "스마트 쿼타 & 백그라운드 관리",
            desc: "각 계정별 리셋 주기와 잔여 쿼타를 자동 추적하며, PC 유휴 상태에서도 안정적으로 롱러닝 작업을 자율 수행합니다."
        }
    ];

    return (
        <section id="remote-ai" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-900">
            {/* Background lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Tag */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        Featured Flagship Solution
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-outfit">
                        Remote AI · <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">로컬 AI 에이전트 원격 통제소</span>
                    </h2>
                    <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        PC에서 구동되는 로컬 AI 에이전트(Codex, Antigravity, Claude)를 모바일 및 웹 대시보드에서 
                        실시간으로 모니터링하고 중요한 결정을 원터치로 승인·제어하는 최첨단 원격 오케스트레이션 플랫폼입니다.
                    </p>
                </div>

                {/* Product Spotlight Showcase Box */}
                <div className="rounded-3xl bg-slate-950/80 border border-slate-800/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl mb-16 relative overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left: Interactive Preview Card */}
                        <div className="lg:col-span-6 space-y-4">
                            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-sm font-semibold text-white font-mono">Remote Hub · v1.0.0</span>
                                    </div>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/50">
                                        Active Relay
                                    </span>
                                </div>

                                {/* Mock Console Snippet */}
                                <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 space-y-2 border border-slate-800/80">
                                    <div className="text-blue-400">[Hub] Multi-Agent Workers Connected: 3 Active</div>
                                    <div className="text-emerald-400">✔ Worker #1 [Antigravity]: Code Synthesis in progress</div>
                                    <div className="text-purple-400">✔ Worker #2 [Codex]: Test Suite Execution OK</div>
                                    <div className="text-amber-400">⚡ Mobile Supervisor Alert: Pending Tool Approval [run_command]</div>
                                </div>

                                <div className="mt-4 pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                                    <span className="px-2 py-1 bg-slate-800/80 rounded">#QR-Pairing</span>
                                    <span className="px-2 py-1 bg-slate-800/80 rounded">#Approval-Gate</span>
                                    <span className="px-2 py-1 bg-slate-800/80 rounded">#Android-Supervisor</span>
                                    <span className="px-2 py-1 bg-slate-800/80 rounded">#Web-Dashboard</span>
                                </div>
                            </div>

                            {/* Download Action Strip */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a 
                                    href="https://github.com/han1991bit/remote-codex/releases" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/30"
                                >
                                    <Download className="w-4 h-4" />
                                    Android APK 다운로드 (v1.0.0)
                                </a>
                                <a 
                                    href="https://github.com/han1991bit/remote-codex" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium transition-all"
                                >
                                    GitHub 저장소
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Key Value Points */}
                        <div className="lg:col-span-6 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                언제 어디서나 안전한 로컬 AI 원격 감독
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                PC 앞을 지키지 않아도 스마트폰으로 AI의 작업 진행 상황을 모니터링하고, 중요한 결정을 즉시 지시할 수 있습니다. 
                                엔터프라이즈 개발팀과 개인 개발자의 생산성을 획기적으로 향상시킵니다.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span><strong>다중 프로젝트 Task 관리:</strong> 작업할 디렉토리를 즉시 등록 및 원격 전환</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span><strong>실시간 원격 승인 시스템:</strong> 위험 명령이나 파일 수정 발생 시 알림 수신 및 승인/거부</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span><strong>자동 백그라운드 워커 모드:</strong> 모바일 연결 없이도 PC 단독 자율 주행 가능</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4 Feature Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all glow-card group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductRemoteAI;
