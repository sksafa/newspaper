import React from 'react';
import BodyContent from '../BodyContent/BodyContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ScrollingText from '../ScrollingText/ScrollingText';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ScrollingText/>
            <Navbar></Navbar>
            <BodyContent></BodyContent>
            <Footer></Footer>
        </div>
    );
};

export default Home;