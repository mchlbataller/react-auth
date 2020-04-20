import React from "react";
import { Redirect } from "react-router-dom";
// Service for reauthentication using JSON Web Tokens
class VerifyJWT extends React.Component {
    constructor(props) {
        super(props);
        this.state = { verified: "false" };
        this.requestAPI = this.requestAPI.bind(this);
    }

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
                this.setState({ verified: res["reauth"] });
            });
    }

    render() {
        return <h1>Verified: {this.state.verified}</h1>;
    }
}

export default VerifyJWT;
