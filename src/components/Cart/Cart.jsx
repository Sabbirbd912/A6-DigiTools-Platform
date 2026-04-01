import React from 'react';
import CartItem from '../CartItem/CartItem';
import { toast } from 'react-toastify';



    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    const checkout = () => {
        setCart([]);
        toast("checked out");
    }

    const deleteItem = (item) => {
        const newCart = cart.filter(singleItem => singleItem !== item);
        setCart(newCart);
        toast("Item Deleted!")
    }

    return (
        <div className="w-full mx-auto bg-white rounded-xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div>
                <h3 className={`text-xl font-bold text-center ${cart.length === 0 ? "block" : "hidden"}`}>Your Cart is Empty!</h3>
            </div>
            <div className={`${cart.length === 0 ? "hidden" : "block"}`}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Cart</h2>
                <div className="space-y-4 mb-10">

                    {
                        cart.map((item, i) => <CartItem key={i} item={item} deleteItem={deleteItem}></CartItem>)
                    }

                </div>
                <div className="flex justify-between items-center mb-5 pt-3">
                    <span className="text-slate-400 font-medium">Total:</span>
                    <span className="text-xl font-bold text-slate-900">${totalPrice}</span>
                </div>
                <button onClick={checkout} className="w-full bg-[#8b31ff] hover:bg-[#7a28e0] text-white font-bold py-4 rounded-4xl transition-all shadow-lg shadow-purple-200 hover:cursor-pointer">
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;