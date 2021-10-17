import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideContent = (props) => {
    const { title,description,category,image,author, _id } = props.news;
    return (
        <div className="leftSideContent">
           <div className="leftImageSection">
           <img src={`data:image/png;base64,${image.img}`} alt="" />
           </div>
           <div className="LeftTitleSection">
               <h5>{title}</h5>
               {/* <p>{description}</p> */}
               <Link  to={`/NewsDetails/${_id}`}> <p className="details">Details</p> </Link>
           </div>
        </div>
    );
};

export default LeftSideContent;