import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="footer mt-5 pt-4 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2>Newspaper</h2>
                        <p>Sea, male stars darkn hess teno to deun dantly fifth face created aire one you are fly place for lesser firmament canbearin bathering think faces do perter common gender on cheap more</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2>News Category</h2>
                        <div className="footerLink">
                            <li><Link to="/politics">Politics </Link></li>
                            <li>  <Link to="/culture">Culture </Link></li>
                            <li> <Link to="/sports">Sports</Link></li>
                            <li><Link to="/fashion"> Fashion </Link></li>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-white">
                        <h2>Contact Info</h2>
                        <p>Morningview Lane Artland Latimer, NA 5045 / 23654</p>
                        <p>0023 - 25 365 2654</p>
                        <p>webtend@gmail.com</p>
                        <p>ariclawyerfirm.com</p>
                    </div>
                    <p className="text-center">Copyright © 2021 safawat All Rights Reserved</p>
                </div>

            </div>

        </footer>


    );
};

export default Footer;