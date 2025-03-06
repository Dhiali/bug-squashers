import React from "react";


function Navbar() {
    return(
        <nav className="nav">
            <a href="/home" className="site-title">
                Car Magazine
            </a>
            <ul>
                <li>
                    <a href="/Carousel">Carousel</a>
                </li>
                <li>
                    <a href="/Cards">Cards</a>
                </li>
                <li>
                    <a href="/Accordion">Accordion</a>
                </li>
                <li>
                    <a href="/Form">Form</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;