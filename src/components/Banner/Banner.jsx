import React from 'react';
import BanImg from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <section className="w-full md:w-[80%] mx-auto my-15 px-5 md:px-1 py-12">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* TEXT CONTENT */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    {/* Badge */}
                    <span className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
                        ● New: AI-Powered Tools Available
                    </span>
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl manrope-bold font-extrabold text-gray-800 tracking-wider leading-tight mb-6">
                        Supercharge Your <br />
                        Digital Workflow
                    </h1>
                    {/* Description */}
                    <p className="text-gray-500 text-justify mb-6 max-w-md mx-auto lg:mx-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="w-40 h-12 bg-linear-135 from-[#4F39F6] to-[#9514FA] rounded-4xl px-4 py-3 text-white text-sm font-medium flex gap-1 justify-center items-center hover:cursor-pointer">
                            Explore Products
                        </button>
                        <button className="h-12 flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
                            <CiPlay1 /> Watch Demo
                        </button>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={BanImg}
                        alt="Digital Workflow"
                        className="w-[80%] h-auto rounded-xl shadow-md object-cover"
                    />
                </div>
            </div>
        </section>

    );
};

export default Banner;