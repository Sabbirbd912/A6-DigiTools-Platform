import React from 'react';
import Logo from '../Logo/Logo';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({cart}) => {

    const items = <>
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </>

    return (
        <div className="navbar inter bg-base-100 shadow-sm py-4">
            <div className='w-full md:w-[80%] mx-auto flex flex-row justify-between'>
                <div className="navbar-start w-50">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <a className="text-xl font-bold hover:cursor-pointer">
                        <Logo></Logo>
                    </a>
                </div>

                {/* <div className='navbar-end flex'> */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {items}
                        </ul>
                    </div>
                    <div className="navbar-end w-fit">
                        <ul className="menu menu-horizontal px-1 flex items-center font-semibold">
                            <li><a className='relative'>
                                <FiShoppingCart size={20}/> 
                                <div className={`badge badge-soft badge-primary absolute -top-1 -right-1 h-4 w-3 text-xs ${cart.length === 0 ? "hidden" : "block"}`}>{cart.length}</div>
                            </a></li>
                            <li><a>Login</a></li>
                        </ul>
                        <a className="w-30 bg-linear-135 from-[#4F39F6] to-[#9514FA] rounded-4xl px-4 py-3 text-white text-center text-sm font-medium flex gap-1 justify-center items-center ml-2 hover:cursor-pointer">Get Started</a>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Navbar;