
import React, { useEffect, useState } from 'react';
import RightSideContent from '../RightSideContent/RightSideContent';
import './RightSide.css'


const RightSide = () => {
    const [news, setLatestNews] = useState([])
    useEffect( () => {
        fetch(`https://secure-retreat-19674.herokuapp.com/latestNews`)
        .then(res => res.json())
        .then(data => setLatestNews(data))

    }, [])
         console.log(news)
    return (
        <div className="rightBody"> 
            <h4>LATEST POSTS</h4>
            {
                            news.length === 0 && <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
             {
              news.map(newsInfo => <RightSideContent newsInfo={newsInfo} key={newsInfo._id} ></RightSideContent> )
             }
           
        </div>
    );
};

export default RightSide;