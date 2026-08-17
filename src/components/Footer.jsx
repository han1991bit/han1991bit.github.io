import React from 'react';
import { EunhasuLogoIcon } from './Navbar';

const Footer = ({ logoVariant = 1 }) => {
    return (
        <footer id="footer" className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 text-xs">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center p-0.5">
                        <EunhasuLogoIcon variant={logoVariant} className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200 font-semibold font-outfit text-sm">은하수 AI (Eunhasu AI LC.)</span>
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
