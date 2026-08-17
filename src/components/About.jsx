import React from 'react';
import { Sparkles, Terminal, Code, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/40 border-t border-slate-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider px-3 py-1 bg-blue-950/80 rounded-md border border-blue-900">
                    About Us
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-6 font-outfit">
                    유한회사 은하수인공지능 (Eunhasu AI LC.)
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    은하수 AI는 복잡한 인공지능 기술을 실제 작업 현장과 일상에서 유용하게 쓸 수 있는 도구로 구현하는 실용주의 소프트웨어 개발 법인입니다.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-8">
                    원격 로컬 AI 에이전트 제어 도구인 Remote AI의 지속적인 업데이트와 함께, 개발자와 업무 담당자의 시간을 아껴주는 맞춤형 자동화 솔루션을 만듭니다.
                </p>

                <div className="inline-flex flex-wrap justify-center gap-4 text-xs text-slate-400">
                    <div className="px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-blue-400" />
                        <span>AI 에이전트 오케스트레이션</span>
                    </div>
                    <div className="px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-purple-400" />
                        <span>맞춤형 자동화 도구 개발</span>
                    </div>
                    <div className="px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span>실용적 AI 솔루션 제작</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
