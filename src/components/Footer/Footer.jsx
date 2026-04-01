import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-6 font-sans">
            <div className="w-[80%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
                        <p className="text-gray-300 max-w-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-300 mb-8">
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition" >
                                <TbBrandInstagramFilled />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition" >
                                <FaFacebookSquare />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition" >
                                <BsTwitterX />
                            </a>
                        </div>
                    </div>

                </div>

                <div className=" border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 pt-3">
                    <p className="text-slate-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a href="#" className="hover:text-slate-400 transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-slate-400 transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-slate-400 transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;