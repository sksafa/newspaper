import React, { useState } from 'react';
import banner from './../../image/header.png';
import './Header.css';
import ScrollingText from '../ScrollingText/ScrollingText';

const Header = () => {




    const presentDate = new Date().toLocaleString();



    return (
        <div className="headerSection">
            <div className=" container-fluid d-flex justify-content-between px-5">
                <div className="imgSection">
                    <img src={banner} alt="" />
                </div>
                <div className="ScrollText">
                    <ScrollingText></ScrollingText>
                </div>
                <div className="dateSection">
                    <p>{presentDate} </p>
                </div>
            </div>
        </div>
    );
};

export default Header;