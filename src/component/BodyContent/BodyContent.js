import React, { useEffect, useState } from 'react';
import HomeSport from '../HomeSport/HomeSport';
import LeftSide from './LeftSide/LeftSide';
import MiddleBannar from './MiddleBannar/MiddleBannar';
import RightSide from './RightSide/RightSide';
import './Body.css'

const BodyContent = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        fetch(`https://secure-retreat-19674.herokuapp.com/sports`)
            .then(res => res.json())
            .then(data => setNewsList(data))
    }, []);


    const [faList, setFaList] = useState([]);
    useEffect(() => {
        fetch(`https://secure-retreat-19674.herokuapp.com/fashion`)
            .then(res => res.json())
            .then(data => setFaList(data))
    }, []);

    return (
        <div className="">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <LeftSide></LeftSide>
                    </div>
                    <div className="col-md-6">
                        <MiddleBannar></MiddleBannar>
                    </div>
                    <div className="col-md-3">
                        <RightSide></RightSide>
                    </div>
                </div>

                <div className="row ">
                    <h3 categoryText className=" mt-3 mb-4">Sport News -------</h3>
                    <div className="row d-flex detailsPolitics">
                        {
                            newsList.length === 0 && <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            newsList.map(politicsNews => <HomeSport politicsNews={politicsNews} ></HomeSport>)
                        }
                    </div>
                </div>

                <div className="row ">
                    <h3 categoryText className="mt-4 mb-4">Fashion News -------</h3>
                    <div className="row d-flex detailsPolitics">
                    {
                            faList.length === 0 && <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            faList.map(politicsNews => <HomeSport politicsNews={politicsNews} ></HomeSport>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BodyContent;