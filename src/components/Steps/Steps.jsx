import React from 'react';
import stepImg1 from '../../assets/user.png'
import stepImg2 from '../../assets/package.png'
import stepImg3 from '../../assets/rocket.png'

const Steps = () => {
    return (
        <section className=" bg-[#F9FAFC] py-20 px-6">
            <div className='w-[80%] mx-auto'>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-slate-500">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="relative bg-white border border-slate-100 rounded-xl px-10 py-25 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 bg-linear-135 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            01
                        </div>
                        <div className="w-25 h-25 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src={stepImg1} className='w-15' alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Create Account</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="relative bg-white border border-slate-100 rounded-xl px-10 py-25 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 bg-linear-135 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            02
                        </div>
                        <div className="w-25 h-25 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src={stepImg2} className='w-15' alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Choose Products</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="relative bg-white border border-slate-100 rounded-xl px-10 py-25 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 bg-linear-135 from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            03
                        </div>
                        <div className="w-25 h-25 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <img src={stepImg3} className='w-15' alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Start Creating</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>

        </section>

    );
};

export default Steps;