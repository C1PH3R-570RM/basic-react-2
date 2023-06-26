import React from 'react';
import { Link} from 'react-router-dom';




const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li className="list-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="list-item">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;