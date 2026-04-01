import React from 'react';

const CartItem = ({item, deleteItem}) => {
    return (
        <div className="flex items-center justify-between bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    <img src={item.icon} alt="" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900"> {item.name} </h4>
                    <p className="text-slate-500 text-sm">${item.price}</p>
                </div>
            </div>
            <button onClick={()=>deleteItem(item)} className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition cursor-pointer">
                Remove
            </button>
        </div>
    );
};

export default CartItem;