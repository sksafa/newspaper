import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSport.css'

const HomeSport = (props) => {
    const { _id, title, image } = props.politicsNews;
    return (
        <div className="col-md-3">
            <div className="card ml-5 cardSewction">
                <img className="img-fluid" src={`data:image/png;base64,${image.img}`} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <Link to={`/NewsDetails/${_id}`}> Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSport;