
import { Link } from 'react-router-dom';
import './LeftSide.css';
import ad from './../../../image/ad.jpg';
import React, { useEffect, useState } from 'react';
import LeftSideContent from './LeftSideContent';

const LeftSide = () => {
    const [news, setLatestNews] = useState([])
    useEffect(() => {
        fetch(`https://secure-retreat-19674.herokuapp.com/latestNewsAll`)
            .then(res => res.json())
            .then(data => setLatestNews(data))

    }, [])

    console.log('this is laste news log', news);


    return (
        <div className="leftSide" >
            {/* <h4>News Category</h4>
            <div className="CategoryList">
                    <li><Link to="/politics">Politics </Link></li>
                    <li>  <Link to="/culture">Culture </Link></li>
                    <li> <Link to="/sports">Sports</Link></li>
                    <li><Link to="/fashion"> Fashion </Link></li>
            </div>
            <div className="AddImageSection">
                <img src={ad} alt="" height="379px" width="257px" />
            </div> */}
            {
                news.length === 0 && <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }

            {
                news.map(news => <LeftSideContent news={news} key={news._id} ></LeftSideContent>)
            }

        </div>
    );
};

export default LeftSide;