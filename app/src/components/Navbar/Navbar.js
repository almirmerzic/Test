import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <p className="navbar-brand" href="#">
                        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    </p>
                </nav>
            </div>
        );
    }
}

export default Navbar;