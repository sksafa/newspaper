import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import singleNews from '../singleNews/singleNews';

const NewsDetails = () => {
    const { _id } = useParams();

    const [ detailsNews, setDetailsNews  ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/newsId/`+_id)
            .then(res => res.json())
            .then(data =>{
                setDetailsNews(data);
            });
    }, [_id]);
    console.log(detailsNews)
    const {title,author,description,image}=detailsNews;
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container">
                <div className="row">
                <div className="detailsNews">
                    <h2 className="mt-4" >{title}</h2>
                    <h6>Author - {author}</h6>
                    {/* <img src={`data:image/png;base64,${image.img}`} alt="" /> */}
                    {/* <img src="data:image/png/<%=image.img.contentType%>;base64,
                     <%=image.img%>"/> */}
                    <p>{description}</p>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;