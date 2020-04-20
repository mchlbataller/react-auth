import React from "react";
import { Redirect } from "react-router-dom";
import Success from "app/pages/home/home";
import Navbar from "app/components/Navbar";
import Login from "app/pages/login/Login";
import Landing from "app/pages/landing/Landing";

// Service for reauthentication using JSON Web Tokens
class RouteProtector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { verified: false, count: 1 };
        this.requestAPI = this.requestAPI.bind(this);
    }

    // When the authService has been mounted, call the API for re-authentication.
    componentDidMount() {
        this.requestAPI();
    }

    requestAPI() {
        let token = sessionStorage.getItem("jwt");
        let url = "http://localhost:9000/reauth";
        let reqParams = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token }),
        };

        fetch(url, reqParams)
            .then((res) => res.json())
            .then((res) => {
                this.setState((prevState) => {
                    return {
                        verified: res.reauth,
                        count: prevState.count + 1,
                    };
                });
                this.setState({ verified: JSON.stringify(res.reauth) });
            });
    }

    render() {
        // If the token has not been verified when the API for reauth has been called,
        // redirect the user to login.
        return !this.state.verified && this.state.count > 1 ? (
            <Redirect to="/login" />
        ) : (
            this.props.children
        );
    }
}

async function reauthAPI() {
    let token = sessionStorage.getItem("jwt");
    let url = "http://localhost:9000/reauth";
    let reqParams = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
    };
    let fetchFunc = await fetch(url, reqParams);
    let proceed = await fetchFunc.json();

    return proceed.reauth;
}

function HomeAfterAuth() {
    // If authenticated, render the Home insted of the Landing page.
    let authenticated = JSON.stringify(reauthAPI());

    return <p>{authenticated}</p>;
}

export { RouteProtector, HomeAfterAuth };