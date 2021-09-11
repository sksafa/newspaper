import React from 'react';
import BodyContent from '../BodyContent/BodyContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BodyContent></BodyContent>
            <Footer></Footer>
        </div>
    );
};

export default Home;