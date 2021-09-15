import React from 'react';
import banner from './../../image/header.png'


const Header = () => {
    return (
        <div className="text-center mt-3 mb-3">
            <img src={banner} alt="" />
        </div>
    );
};

export default Header;