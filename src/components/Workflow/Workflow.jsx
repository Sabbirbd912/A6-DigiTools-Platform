import React from 'react';

const Workflow = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-24 px-6 text-center">
            <div className="w-[80%] mx-auto">
                <h2 className="text-2xl md:text-4xl tracking-wider font-bold text-white mb-6">
                    Ready To Transform Your Workflow?
                </h2>
                <p className="text-purple-100 text-sm md:text-sm mb-10 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work
                    smarter.
                    <br className="hidden md:block" />
                    Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="bg-white border-2 border-white/40 text-[#8b31ff] font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all shadow-lg w-full sm:w-auto">
                        Explore Products
                    </button>
                    <button className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all w-full sm:w-50">
                        View Pricing
                    </button>
                </div>
                <p className="text-purple-200 text-sm">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>

    );
};

export default Workflow;