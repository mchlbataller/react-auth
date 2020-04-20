import React from "react";
import { Redirect } from "react-router-dom";
// Service for reauthentication using JSON Web Tokens
class VerifyJWT extends React.Component {
    constructor(props) {
        super(props);
        this.state = { verified: "false", count: 1 };
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
                this.setState((prevState) => {
                    return {
                        verified: JSON.stringify(res.reauth),
                        count: prevState.count + 1,
                    };
                });
                this.setState({ verified: JSON.stringify(res.reauth) });
            });
    }

    render() {
        return this.state.verified != "true" && this.state.count > 1 ? (
            <Redirect to="/login" />
        ) : (
            <div />
        );
    }
}

export default VerifyJWT;
