import React from 'react';
import { Link } from 'react-router-dom';
import './NavCss.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark customNav ">
        <div className="container-fluid px-5">
            <a className="navbar-brand" href="#">
              <Link className="nav-link navItem text-white fw-bold" to='/'>Newsprk</Link>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                       <Link to='/'></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link navItem text-white fw-bold" to='/home'>Home</Link>
                    </li>

                    <li className="nav-item">
                       <Link className="nav-link navItem text-white fw-bold" to='/culture'>Culture</Link>
                    </li>

                    <li className="nav-item">
                       <Link className="nav-link navItem text-white fw-bold" to='/politics'>Politics</Link>
                    </li>

                    <li className="nav-item">
                       <Link className="nav-link navItem text-white fw-bold" to='/sports'>Sports</Link>
                    </li>

                    
                    <li className="nav-item">
                       <Link className="nav-link navItem text-white fw-bold" to='/fashion'>Fashion</Link>
                    </li>

                    <li className="nav-item">
                            <Link className="nav-link navItem text-white fw-bold" to="/admin">Admin</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;