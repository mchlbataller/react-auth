import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { H1 } from "app/components/text";

function ProceedToHome() {
    let history = useHistory();
    history.push("/");
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            login: false,
            loginCount: 1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const input = e.target.type === "text" ? "username" : "password";
        this.setState({ [input]: e.target.value });
    }

    callAuthAPI() {
        let self = this;

        // The form details to be passed later
        var details = {
            username: this.state.username,
            password: this.state.password,
        };

        // Since the content-type is application/x-www-form-urlencoded,
        // the server will be expecting to receive 'user=username&pass=password'
        // data formatting.
        // Before passing the POST data to the server, we are encoding it first.
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        // Putting all the values together
        let url = `http://localhost:9000/auth`;
        let reqParams = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody,
        };

        fetch(url, reqParams)
            .then(function (res) {
                console.log(reqParams.body);
                return res.json();
            })
            .then(function (res) {
                // After receiving the data
                // we will move the token to the sessionStorage for future use

                // Set the login state as true for redirection
                self.setState({ login: true });
            })
            .catch(function (err) {
                self.setState((prevState) => {
                    return { loginCount: prevState.loginCount + 1 };
                });
            });
    }

    handleSubmit() {
        this.callAuthAPI();
    }

    render() {
        // Check the state 'login' if true, then redirect.
        return this.state.login === true ? (
            <Redirect to="/login/success" />
        ) : (
            <div className="flex flex-col bg-gray-200 p-10 w-1/3 mx-auto">
                <H1>Login</H1>

                {this.state.login === false && this.state.loginCount > 1 && (
                    <p className="text-center bg-red-900 text-white p-5">
                        Wrong username/password{" "}
                    </p>
                )}

                <p className="text-lg font-bold mx-auto mt-4 mb-2">Username</p>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="flex-1 border rounded mb-5 ml-5 mr-5 p-2"
                />

                <p className="text-lg font-bold mx-auto mt-1 mb-2">Password</p>
                <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="flex-1 border rounded mb-5 ml-5 mr-5 p-2"
                />
                <button
                    onClick={this.handleSubmit}
                    className="border-blue-700 h-12 border bg-blue-700 hover:shadow-outline w-40 rounded-full mx-auto text-gray-100"
                >
                    Submit
                </button>
                {this.state.login === true && <Redirect to="/success" />}
            </div>
        );
    }
}
export default Login;
