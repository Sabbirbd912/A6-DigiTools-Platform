import React, { Suspense, useState } from 'react';
import CardSection from '../CardSection/CardSection';
import Cart from '../Cart/Cart';

const ToolsSection = ({cart, setCart}) => {

    const toolsPromise = fetch('/data.json').then(res => res.json());



    return (
        <section className='w-[80%] mx-auto my-30'>
            <div className='flex flex-col justify-center items-center mt-10 mb-5'>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl manrope text-center font-extrabold text-gray-800 tracking-wider leading-tight mb-6">
                    Premium Digital Tools
                </h2>
                <p className="text-gray-500 text-lg text-center mb-6 w-full md:w-160 tracking-wide mx-auto lg:mx-0">
                    Choose from our curated collection of premium digital products designedto boost your productivity and creativity.
                </p>
            </div>

            <div>

                {/* name of each tab group should be unique */}
                <div className="flex flex-col items-center justify-center">
                    <div className="border border-gray-200 p-1 flex gap-1 rounded-4xl">
                        <button onClick={() => setToggle(false)} className={`btn btn-ghost rounded-4xl h-13 p-6 border-none join-item ${toggle === false ? "button-active" : ""} `}> Products </button>
                        <button onClick={() => setToggle(true)} className={`btn btn-ghost rounded-4xl h-13 p-6 border-none join-item ${toggle === true ? "button-active" : ""} `}> Cart <span className={`${cart.length === 0 ? "hidden" : "block"}`}>({cart.length})</span> </button>
                    </div>

                    <div className={`my-10 ${toggle === false ? "block" : "hidden"} `}>
                        <Suspense fallback={<div className='py-40 mx-auto flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
                            <CardSection toolsPromise={toolsPromise} cart={cart} setCart={setCart} ></CardSection>
                        </Suspense>
                    </div>

                    <div className={`my-10 w-full ${toggle === true ? "block" : "hidden"} `}>
                        <Cart cart={cart} setCart={setCart} ></Cart>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ToolsSection;