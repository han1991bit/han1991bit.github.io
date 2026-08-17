import React from 'react';
import { EunhasuLogoSolid } from './Navbar';

const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 text-xs">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-2.5">
                    {/* 푸터 아이콘: 작은 크기에서 또렷한 솔리드 버전 적용 */}
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center p-1 shadow-sm">
                        <EunhasuLogoSolid className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-200 font-semibold font-outfit text-sm flex items-center gap-1">
                            은하수 <span className="text-blue-400">AI</span> (Eunhasu AI LC.)
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">Practical AI Solutions & Automation</span>
                    </div>
                </div>

                <div className="text-center sm:text-right text-slate-500">
                    <p>© {new Date().getFullYear()} Eunhasu AI LC. (유한회사 은하수인공지능). All rights reserved.</p>
                    <p className="mt-0.5">Contact: <a href="mailto:eunhasuai@gmail.com" className="text-blue-400 hover:underline">eunhasuai@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
