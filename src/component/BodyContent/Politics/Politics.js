import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import LeftSide from '../LeftSide/LeftSide';
import PoliticsCategory from '../PoliticsCategory/PoliticsCategory';

const Politics = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        fetch(`https://secure-retreat-19674.herokuapp.com/politics`)
            .then(res => res.json())
            .then(data => setNewsList(data))
    }, [])
       
    return (
        <div>
          <Header/>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                      <LeftSide></LeftSide>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                newsList.length === 0 && <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            }
                            {
                                newsList.map(politicsNews => <PoliticsCategory politicsNews={politicsNews} ></PoliticsCategory> )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Politics;