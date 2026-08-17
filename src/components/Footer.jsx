import React from 'react';
import { EunhasuLogoIcon } from './Navbar';

const Footer = ({ logoVariant = 1 }) => {
    return (
        <footer id="footer" className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 text-xs">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
                        <EunhasuLogoIcon variant={logoVariant} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-200 font-semibold font-outfit">은하수 AI (Eunhasu AI LC.)</span>
                </div>

                <div className="text-center sm:text-right text-slate-500">
                    <p>© {new Date().getFullYear()} Eunhasu AI LC. All rights reserved.</p>
                    <p className="mt-0.5">Contact: <a href="mailto:eunhasuai@gmail.com" className="text-blue-400 hover:underline">eunhasuai@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
