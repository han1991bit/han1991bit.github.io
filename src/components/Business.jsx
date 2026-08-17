import React from 'react';
import { Bot, Cpu, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const Business = () => {
    const services = [
        {
            icon: <Bot className="w-6 h-6 text-blue-400" />,
            title: "1. Remote AI & 에이전트 연동 도구",
            points: [
                "PC 로컬 AI CLI(Codex, Antigravity 등) 원격 제어 허브 제공",
                "모바일 실시간 승인 및 상태 알림 앱 커스터마이징",
                "사내 개발 환경에 맞춘 원격 작업 세션 연동"
            ]
        },
        {
            icon: <Cpu className="w-6 h-6 text-indigo-400" />,
            title: "2. 업무 자동화 & AI 파이프라인 개발",
            points: [
                "반복 수작업(문서 정리, 데이터 추출, 스크래핑) 자동화 스크립트",
                "API 연동 기반 지능형 데이터 처리 워크플로우 제작",
                "팀 맞춤형 사내 경량 자동화 툴 신속 개발"
            ]
        },
        {
            icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
            title: "3. 맞춤형 LLM 챗봇 & 프롬프트 툴링",
            points: [
                "사내 문서/데이터 기반 RAG(검색 증강 생성) 챗봇 프로토타이핑",
                "특정 도메인 업무 보조 AI 어시스턴트 설계",
                "AI 모델 도입 타당성 검토 및 소규모 개발 지원"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider px-3 py-1 bg-blue-950/80 rounded-md border border-blue-900">
                        Services
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-3 font-outfit">
                        은하수 AI가 제공하는 실질적인 개발 & 서비스
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                        현란한 마케팅 문구 대신, 실제로 돌아가고 문제를 해결하는 소프트웨어를 만듭니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{service.title}</h3>
                                <ul className="space-y-2.5 text-xs text-slate-300">
                                    {service.points.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-5 mt-5 border-t border-slate-800/80">
                                <a href="#contact" className="text-xs text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                                    개발 문의하기
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Business;
