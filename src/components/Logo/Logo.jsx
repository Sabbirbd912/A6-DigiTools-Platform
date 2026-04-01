import React from 'react';
import LogoImg from '../../assets/DigiTools.png'

const Logo = () => {
    return (
        <div>
            <img src={LogoImg} className='w-20 md:w-35' alt="" />
        </div>
    );
};

export default Logo;