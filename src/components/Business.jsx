import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Bot, Smartphone } from 'lucide-react';

const Business = () => {
    const services = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI & Data Analysis",
            description: "인공지능 및 알고리즘 기반의 고도화된 데이터 분석 시스템을 개발하고 운영합니다."
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "Financial Intelligence",
            description: "금융정보 및 투자 관련 데이터 서비스를 기획하고 제공하여 통찰력을 전달합니다."
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: "Auto Trading Solutions",
            description: "자동화된 전략 실행 도구 및 분석 소프트웨어를 개발하여 효율성을 극대화합니다."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Platform Service",
            description: "사용자 친화적인 온라인 플랫폼 및 모바일 애플리케이션을 운영합니다."
        }
    ];

    return (
        <section id="business" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Business Areas</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        은하수인공지능은 기술과 금융의 융합을 통해 새로운 가치를 창출합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Business;
