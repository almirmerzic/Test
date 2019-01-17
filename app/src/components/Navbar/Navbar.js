import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;