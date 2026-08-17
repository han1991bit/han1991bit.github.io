import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "eunhasuai@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 text-center">
            <div className="max-w-3xl mx-auto px-6">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider px-3 py-1 bg-blue-950/80 rounded-md border border-blue-900">
                    Contact
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-3 font-outfit">
                    프로젝트 및 기술 문의
                </h2>
                
                <p className="text-slate-400 text-sm mb-8">
                    Remote AI 사용 문의, 맞춤형 AI 자동화 도구 제작 의뢰 등 궁금하신 점은 아래 이메일로 편하게 보내주세요.
                </p>

                {/* Email Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <div className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-sm flex items-center justify-between">
                            <span className="font-semibold">{email}</span>
                            <button
                                onClick={handleCopyEmail}
                                className="ml-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                title="이메일 주소 복사"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>

                        <a
                            href={`mailto:${email}?subject=[은하수 AI] 문의사항`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md transition-all"
                        >
                            <Send className="w-4 h-4" />
                            메일 보내기
                        </a>
                    </div>

                    {copied && (
                        <div className="text-xs text-emerald-400 font-medium mt-3">
                            ✔ 이메일 주소가 클립보드에 복사되었습니다.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
