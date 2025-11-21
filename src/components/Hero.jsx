import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/50 to-slate-950 animate-pulse-slow" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        Future of Financial Intelligence
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
                >
                    데이터의 흐름을 읽는<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        인공지능, 은하수
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
                >
                    Eunhasu AI는 AI 및 알고리즘 기반의 데이터 분석 시스템과<br className="hidden md:block" />
                    금융 정보 서비스를 제공하여 투자의 새로운 지평을 엽니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a href="#business" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-900/20">
                        사업 영역 보기
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700">
                        문의하기
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
