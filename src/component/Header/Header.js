import React from 'react';
import banner from './../../image/header.png'


const Header = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <img src={banner} alt="" />
        </div>
    );
};

export default Header;