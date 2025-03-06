import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Car Magazine
            </Link>
            <ul>
                <li>
                    <Link to="/">Carousel</Link>
                </li>
                <li>
                    <Link to="/card">Cards</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
