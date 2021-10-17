import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import './MiddleBanner.css'
import MiddleContent from './MiddleContent';

const MiddleBannar = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        fetch(`https://secure-retreat-19674.herokuapp.com/culture`)
            .then(res => res.json())
            .then(data => setNewsList(data))
    }, [])


    return (
        <div className="middleBanner">
           <Slider></Slider>
           <h4>Satellite city to be built on the banks of Jamuna</h4>
           <h6>Reporter: Zahid Malik </h6>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, molestias cum. Exercitationem inventore possimus adipisci facilis dolor, iusto dolores consectetur adipisicing elit. Dolore officia ipsa fugiat animi.</p>
            <div className="middleCulture">
                <h4>Culture News</h4>
                <div className="row">
                {
                                newsList.map(politicsNews => <MiddleContent politicsNews={politicsNews} ></MiddleContent> )
                            }
                </div>
            </div>

        </div>
    );
};

export default MiddleBannar;