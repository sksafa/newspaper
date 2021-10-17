import React from 'react';
import { Link } from 'react-router-dom';

const MiddleContent = (props) => {
    const { _id, title, image } = props.politicsNews;
    return (
        <div className="col-md-6">
        <div className="MiddleSideContent d-flex">
           <div className="imageSection">
           <img src={`data:image/png;base64,${image.img}`} alt="" />
           </div>
           <div className="middleTitleSection">
               <h5>{title}</h5>
               <Link  to={`/NewsDetails/${_id}`}>Details</Link>
           </div>
        </div>
        </div>
    );
};

export default MiddleContent;