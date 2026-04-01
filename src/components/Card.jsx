import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ tool, cart, setCart }) => {

    // console.log(cart)

    const addToCart = () => {

        const exists = cart.some(item => item.id === tool.id);
        // console.log(exists)

        if(exists) {
            toast("Already added!")
            return
        }

        const newCart = [...cart, tool];
        setCart( newCart);
        toast("Added to Cart!")
    }

    return (

        <div className="relative w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                    <img src={tool.icon} alt="" />
                </div>
                <span className={`${tool.tagType === 'popular' ? "bg-[#E1E7FF] text-purple-700" : tool.tagType === 'new' ? "bg-[#DBFCE7] text-green-700" : "bg-orange-100 text-orange-700"}  text-sm font-semibold px-4 py-1.5 rounded-full`}>
                    {tool.tag}
                </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6"> {tool.name} </h3>
            <p className="text-gray-500 mb-3 text-base/snug">
                {tool.description}
            </p>
            <div className="flex items-baseline mb-5">
                <span className="text-4xl font-bold text-gray-900">${tool.price}</span>
                <span className="text-gray-400 ml-1 text-lg">/{tool.period}</span>
            </div>

            <ul className="space-y-2 mb-5">

                {
                    tool.features.map((feature, i) => <li key={i} className="flex items-center text-gray-600 font-medium">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /> </svg>
                        {feature}
                    </li>)
                }

            </ul>

            <button onClick={addToCart} className="w-full bg-[#8b31ff] hover:bg-[#7a28e0] text-white font-bold py-4 rounded-full transition-colors duration-200 hover:cursor-pointer">
                Buy Now
            </button>
        </div>
    );
};

export default Card;