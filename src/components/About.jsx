import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const features = [
        "최첨단 AI 알고리즘",
        "실시간 데이터 분석",
        "자동화된 트레이딩",
        "안정적인 플랫폼"
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        우리는 금융 데이터의<br />
                        <span className="text-blue-400">새로운 기준</span>을 만듭니다.
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        유한회사 은하수인공지능(Eunhasu AI LC.)은 방대한 금융 데이터 속에서
                        유의미한 패턴을 발견하고, 이를 통해 가장 효율적인 투자 전략을 제시합니다.
                        우리의 기술은 복잡한 시장을 단순하고 명확하게 만듭니다.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                <span className="text-slate-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
                        {/* Abstract visual representation */}
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-3/4 h-3/4 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-1/2 h-1/2 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-1/4 h-1/4 bg-blue-500/20 rounded-full blur-xl" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
