
import React, { useEffect, useState } from 'react';
import RightSideContent from '../RightSideContent/RightSideContent';


const RightSide = () => {
    const [news, setLatestNews] = useState([])
    useEffect( () => {
        fetch(`http://localhost:5000/latestNews`)
        .then(res => res.json())
        .then(data => setLatestNews(data))

    }, [])
         console.log(news)
    return (
        <div>
            <h4>LATEST POSTS</h4>
             {
              news.map(newsInfo => <RightSideContent newsInfo={newsInfo} key={newsInfo._id} ></RightSideContent> )
             }
           
        </div>
    );
};

export default RightSide;