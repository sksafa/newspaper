import React from 'react';
import { Link } from 'react-router-dom';

const PoliticsCategory = (props) => {
    const { _id, title, image } = props.politicsNews;
    return (
        <div className="col-md-6 card">
            <img className="img-fluid" src={`data:image/png;base64,${image.img}`} alt="" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <Link to={`/NewsDetails/${_id}`}> <p>Details</p> </Link>
            </div>
        </div>

    );
};

export default PoliticsCategory;