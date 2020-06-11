import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-brand w-full lg:w-32 ml-0 lg:ml-12">
                <p className="text-center">
                    michael
                    <br />
                    bataller
                </p>
            </div>

            <div className="navbar-menu ml-0 lg:ml-0 lg:absolute lg:top-0">
                <ul className="text-center">
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
