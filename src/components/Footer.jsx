import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white">Eunhasu AI LC.</h3>
                    <p className="text-slate-500 text-sm mt-1">유한회사 은하수인공지능</p>
                </div>

                <div className="text-slate-500 text-sm text-center md:text-right">
                    <p>© {new Date().getFullYear()} Eunhasu AI LC. All rights reserved.</p>
                    <p className="mt-1">Contact: contact@eunhasu.ai (Example)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
