import React from 'react';
import { Link } from 'react-router-dom';
import './RightSideContent.css'

const RightSideContent = (props) => {
    const { title,description,category,image,author, _id } = props.newsInfo;
    return (
        <div className="rightSideContent d-flex">
           <div className="imageSection">
           <img src={`data:image/png;base64,${image.img}`} alt="" />
           </div>
           <div className="TitleSection">
               <h5>{title}</h5>
               <Link to={`/NewsDetails/${_id}`}> <p>Details</p> </Link>
           </div>
        </div>
    );
};

export default RightSideContent;