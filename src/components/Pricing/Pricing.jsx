import React from 'react';

const Pricing = () => {
    return (
        <section className="w-[80%] mx-auto bg-white py-25 px-6 ">

            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-slate-500">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                <div className="h-120 bg-[#F9FAFC] border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                    <p className="text-slate-500 mb-6">Perfect for getting started</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-slate-900">$0</span>
                        <span className="text-slate-400 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-2 mb-10 text-sm grow">
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Access to 10 free tools
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Basic templates
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Community support
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> 1 project per month
                        </li>
                    </ul>
                    <button className="w-full bg-[#8b31ff] hover:bg-[#7a28e0] text-white font-bold py-4 rounded-full transition-all">
                        Get Started Free
                    </button>
                </div>

                <div className="relative h-120 bg-[#8b31ff] rounded-xl p-8 shadow-2xl shadow-purple-200 flex flex-col">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full border border-orange-200 shadow-sm">
                        Most Popular
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-purple-100 mb-6">Best for professionals</p>
                    <div className="flex items-baseline mb-8 text-white">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-purple-200 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-2 mb-10 text-white text-sm grow">
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Access to all premium tools
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Unlimited templates
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Priority support
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Unlimited projects
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Cloud sync
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3">✓</span> Advanced analytics
                        </li>
                    </ul>
                    <button className="w-full bg-white text-[#8b31ff] font-bold py-4 rounded-full hover:bg-purple-50 transition-all shadow-lg">
                        Start Pro Trial
                    </button>
                </div>

                <div className="h-120 bg-[#F9FAFC] border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                    <p className="text-slate-500 mb-6">For teams and businesses</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-slate-900">$99</span>
                        <span className="text-slate-400 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-2 mb-10 text-sm grow">
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Everything in Pro
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Team collaboration
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Custom integrations
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Dedicated support
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> SLA guarantee
                        </li>
                        <li className="flex items-center text-slate-600">
                            <span className="text-green-500 mr-3">✓</span> Custom branding
                        </li>
                    </ul>
                    <button className="w-full bg-[#8b31ff] hover:bg-[#7a28e0] text-white font-bold py-4 rounded-full transition-all">
                        Contact Sales
                    </button>
                </div>

            </div>
        </section>

    );
};

export default Pricing;