import React from 'react';

const StatsBanner = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-6">
            <div className="w-[95%] md:w-[70%] mx-auto flex flex-col md:flex-row gap-5 items-center justify-around text-white text-center">
                <div className="flex-1 py-6 md:py-0">
                    <h2 className="text-6xl tracking-widest font-extrabold mb-5">50K+</h2>
                    <p className="text-purple-100 text-2xl tracking-wide font-medium">Active Users</p>
                </div>
                <div className="block h-px md:h-16 w-30 md:w-px bg-white/30" />
                <div className="flex-1 py-6 md:py-0">
                    <h2 className="text-6xl tracking-widest font-extrabold mb-5">200+</h2>
                    <p className="text-purple-100 text-2xl tracking-wide font-medium">Premium Tools</p>
                </div>
                <div className="block h-px md:h-16 w-30 md:w-px bg-white/30" />
                <div className="flex-1 py-6 md:py-0">
                    <h2 className="text-6xl tracking-widest font-extrabold mb-5">4.9</h2>
                    <p className="text-purple-100 text-2xl tracking-wide font-medium">Rating</p>
                </div>
            </div>
        </section>

    );
};

export default StatsBanner;