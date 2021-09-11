import React from 'react';

const singleNews = (props) => {
    const {title,author,description,image}=props.detailsNews;
    console.log('fine')
    console.log(props.detailsNews)
    return (
        <div className="detailsNews">
        <h2 className="mt-4" >{title}</h2>
        <h6>Author - {author}</h6>
        <img src={`data:image/png;base64,${image.img}`} alt="" />
       <p>{description}</p>
    </div>
    );
};

export default singleNews;