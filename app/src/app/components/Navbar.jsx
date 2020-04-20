import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <p className="text-center">
                    michael
                    <br />
                    bataller
                </p>
            </div>

            <div className="navbar-menu">
                <ul>
                    <li>
                        <Link to={props.linkToHome}>Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-login-btn">
                            {props.loginPrompt}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
