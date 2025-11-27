import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-pink-100 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & Mission */}
                    <div className="col-span-1">
                        <Link to="/" className="text-2xl font-extrabold text-brand-primary font-display tracking-tight flex items-center gap-2 mb-4">
                            <span className="text-3xl">🌸</span> HerHealth
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Empowering women through knowledge. A safe, judgment-free space to learn about your body, health, and well-being.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 font-display text-lg">Quick Links</h4>
                        <ul className="space-y-2 text-slate-500 text-sm">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li><Link to="/chapters" className="hover:text-brand-primary transition-colors">Chapters</Link></li>
                            <li><Link to="/videos" className="hover:text-brand-primary transition-colors">Videos</Link></li>
                            <li><Link to="/resources" className="hover:text-brand-primary transition-colors">Resources</Link></li>
                            <li><Link to="/find-doctors" className="hover:text-brand-primary transition-colors">Find Doctors</Link></li>
                            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Disclaimer */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 font-display text-lg">Disclaimer</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            The content on HerHealth is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} HerHealth Platform. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                        Made with <FaHeart className="text-pink-400" /> for women everywhere.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
