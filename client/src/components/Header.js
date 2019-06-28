import React from "react";
import "./CSS/Header.css";

const Header = () => 

    <header className="top">
        <h3>H-E-ME</h3>
        <h3>Helping you navigate the aisles of HEB</h3>
        <nav className="nav">
            <ul className="logSign">
                <li className="login">
                    <a href="/login">Login</a> | <a href="/signup">Sign Up</a>
                </li>
            </ul>
        </nav>
    </header>;


export default Header;
