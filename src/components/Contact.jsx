import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "eunhasuai@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-900">
            {/* Ambient light glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight font-outfit">
                        은하수 AI와 함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">혁신을 시작하세요</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Remote AI 도입, 맞춤형 인공지능 솔루션 개발, 기술 제휴 및 컨설팅 등 
                        궁금하신 점을 편하게 문의해 주시면 신속하게 답변드리겠습니다.
                    </p>
                </div>

                {/* Email Action Card */}
                <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-2xl text-center max-w-3xl mx-auto">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
                        <Mail className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">공식 대표 문의 이메일</h3>
                    <p className="text-sm text-slate-400 mb-8">
                        프로젝트 요구사항, 협업 제안, Remote AI 기술 지원을 보내주세요.
                    </p>

                    {/* Email copy & mailto box */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-8">
                        <div className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-base flex items-center justify-between shadow-inner">
                            <span className="font-semibold">{email}</span>
                            <button
                                onClick={handleCopyEmail}
                                className="ml-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                title="이메일 복사"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>

                        <a
                            href={`mailto:${email}?subject=[은하수 AI] 솔루션 도입 및 프로젝트 문의`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-900/30 transition-all hover:scale-105"
                        >
                            <Send className="w-4 h-4" />
                            메일 보내기
                        </a>
                    </div>

                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-emerald-400 font-medium mb-4"
                        >
                            ✔ 이메일 주소가 클립보드에 복사되었습니다.
                        </motion.div>
                    )}

                    {/* Quick Inquiry Types */}
                    <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-left">
                        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-xs">
                            <div className="font-semibold text-white mb-1">🤖 Remote AI 도입</div>
                            <div className="text-slate-400">사내 AI 에이전트 원격 제어 및 모바일 감독 인프라 구축</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-xs">
                            <div className="font-semibold text-white mb-1">⚙️ AI 자동화 개발</div>
                            <div className="text-slate-400">맞춤형 LLM 파인튜닝, RAG 및 워크플로우 지능화</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-xs">
                            <div className="font-semibold text-white mb-1">🤝 기술 제휴 & 협력</div>
                            <div className="text-slate-400">공동 연구, 솔루션 연동 및 비즈니스 파트너십</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
