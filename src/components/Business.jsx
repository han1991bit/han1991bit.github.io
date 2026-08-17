import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Bot, Smartphone, LineChart, ShieldCheck, Database, Layers, ArrowRight } from 'lucide-react';

const Business = () => {
    const services = [
        {
            icon: <Bot className="w-7 h-7 text-blue-400" />,
            title: "AI 에이전트 시스템 및 원격 제어",
            subtitle: "Agentic AI & Remote Orchestration",
            description: "Codex, Claude, Antigravity 등 자율형 로컬/클라우드 AI 에이전트를 원격으로 지휘하고 실시간 통제하는 오케스트레이션 인프라를 구축합니다."
        },
        {
            icon: <Cpu className="w-7 h-7 text-indigo-400" />,
            title: "엔터프라이즈 업무 자동화 파이프라인",
            subtitle: "Enterprise Workflow Automation",
            description: "사내 반복 업무, 대량 문서 처리, 복합 워크플로우를 지능형 AI 에이전트 파이프라인으로 무중단 자동화하여 운영 비용을 절감합니다."
        },
        {
            icon: <Brain className="w-7 h-7 text-purple-400" />,
            title: "맞춤형 LLM & 도메인 특화 AI 개발",
            subtitle: "Custom LLM & Domain Fine-Tuning",
            description: "기업 고유의 데이터와 노하우를 학습시킨 도메인 맞춤형 LLM, 고성능 RAG(검색 증강 생성) 시스템 및 특화 어시스턴트를 개발합니다."
        },
        {
            icon: <Database className="w-7 h-7 text-emerald-400" />,
            title: "데이터 지능화 & 고급 예측 분석",
            subtitle: "Data Intelligence & Analytics",
            description: "대규모 시계열, 정형/비정형 데이터 속에서 숨겨진 패턴과 인사이트를 도출하고 비즈니스 의사결정을 지원하는 예측 모델을 제공합니다."
        },
        {
            icon: <Layers className="w-7 h-7 text-sky-400" />,
            title: "멀티모달 & 시각 지능 솔루션",
            subtitle: "Multimodal & Vision Solutions",
            description: "문서 OCR, 도면 분석, 멀티모달 시각 지능 및 인터랙티브 인터페이스를 통해 복합 매체 데이터를 지능적으로 처리합니다."
        },
        {
            icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
            title: "AI 도입 전략 컨설팅 & 인프라 구축",
            subtitle: "AI Architecture & Security Consulting",
            description: "기업의 AI 도입 타당성 검토부터 온프레미스/하이브리드 클라우드 보안 아키텍처 설계, 규제 준수까지 A to Z 컨설팅을 제공합니다."
        }
    ];

    return (
        <section id="solutions" className="py-24 bg-slate-950 relative border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        Solutions & Services
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-outfit">
                        은하수 AI의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">종합 솔루션 영역</span>
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg">
                        연구 개발부터 실제 엔터프라이즈 운영까지, 기술 혁신을 비즈니스의 성공으로 이끄는 종합 AI 생태계를 제공합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="bg-slate-900/70 p-8 rounded-2xl border border-slate-800/90 hover:border-blue-500/50 transition-all glow-card group relative flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div className="text-xs text-blue-400 font-mono font-medium mb-1 tracking-wide">
                                    {service.subtitle}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                                <a href="#contact" className="inline-flex items-center gap-1.5 hover:underline">
                                    도입 및 제휴 문의
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Business;
