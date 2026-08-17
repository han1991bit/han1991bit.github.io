import React from 'react';
import { Smartphone, Download, ArrowUpRight, Check, QrCode, Terminal, Shield, Play } from 'lucide-react';

const ProductRemoteAI = () => {
    return (
        <section id="remote-ai" className="py-20 bg-slate-900/60 border-t border-slate-900 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider px-3 py-1 bg-blue-950/80 rounded-md border border-blue-900">
                        Main Product
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-3 font-outfit">
                        Remote AI · 로컬 AI 에이전트 원격 통제소
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
                        PC에서 실행되는 AI 에이전트를 모바일 앱으로 모니터링하고 원격 승인할 수 있는 실용적인 툴입니다.
                    </p>
                </div>

                {/* Real Problem & Solution Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-12 shadow-xl">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left: Real Flow */}
                        <div className="lg:col-span-7 space-y-5">
                            <h3 className="text-xl font-bold text-white">이런 분들을 위해 만들었습니다</h3>
                            <div className="space-y-3 text-sm text-slate-300">
                                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">1</div>
                                    <div>
                                        <strong className="text-white">PC에서 AI 작업 걸어두고 자리를 비울 때:</strong>
                                        <p className="text-slate-400 text-xs mt-0.5">긴 시간 소요되는 리팩토링이나 빌드/테스트 도중 AI가 승인을 기다리느라 멈춰 있는 상황을 방지합니다.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">2</div>
                                    <div>
                                        <strong className="text-white">스마트폰으로 실시간 로그 확인 및 승인:</strong>
                                        <p className="text-slate-400 text-xs mt-0.5">명령어 실행이나 위험 파일 수정 시 폰으로 알림이 오며, 원터치로 승인/거부할 수 있습니다.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">3</div>
                                    <div>
                                        <strong className="text-white">간편한 QR 코드 페어링 & 안전한 로컬 보관:</strong>
                                        <p className="text-slate-400 text-xs mt-0.5">스마트폰 카메라로 PC 화면의 QR을 스캔하면 끝. 내 PC 외부로 소스코드가 유출되지 않습니다.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Download Action Buttons */}
                            <div className="pt-2 flex flex-wrap gap-3">
                                <a 
                                    href="https://github.com/han1991bit/remote-codex/releases" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md"
                                >
                                    <Download className="w-4 h-4" />
                                    Android APK 다운로드 (v1.0.0)
                                </a>
                                <a 
                                    href="https://github.com/han1991bit/remote-codex" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-all"
                                >
                                    GitHub 저장소 보기
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Concrete Usage Step */}
                        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 text-xs font-mono space-y-3">
                            <div className="text-slate-400 font-sans font-semibold text-sm border-b border-slate-800 pb-2 flex items-center justify-between">
                                <span>🚀 시작하는 방법 (3분 소요)</span>
                                <span className="text-[10px] text-emerald-400">Ready</span>
                            </div>
                            
                            <div className="space-y-2 text-slate-300">
                                <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold">Step 1.</span>
                                    <span>PC에서 Remote Hub 실행 (<code>start-hub.cmd</code>)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold">Step 2.</span>
                                    <span>작업할 로컬 프로젝트 폴더 선택</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold">Step 3.</span>
                                    <span>스마트폰 앱으로 PC 화면의 QR 코드 스캔</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold">Step 4.</span>
                                    <span>AI 작업 로그 감시 및 원격 승인 시작!</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-sans">
                                💡 지원 에이전트: Google Antigravity, OpenAI Codex, Claude Code CLI 등 로컬 실행 환경 지원.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductRemoteAI;
