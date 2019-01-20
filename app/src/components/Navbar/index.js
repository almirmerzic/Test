import React from 'react';
import logo from './logo.jpg';

const Navbar = () => (
    <div className="text-center">
        <nav className="navbar navbar-expand-lg">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </nav>
    </div>
);

export default Navbar;