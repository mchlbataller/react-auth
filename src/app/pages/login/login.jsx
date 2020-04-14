import React from "react";
import { Redirect } from "react-router-dom";
import { H1 } from  'app/components/text';

function ProceedToHome() {
  return <Redirect to="/success" />;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", login: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = e.target.type === "text" ? "username" : "password";
    this.setState({ [input]: e.target.value });
  }

  callAuthAPI() {
    let self = this;

    let url = `http://localhost:9000/auth?username=${this.state.username}&password=${this.state.password}`;

    fetch(url, {
      method: "GET"
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        self.setState({ login: res.auth });
        self.state.login === "true" ? window.location.href="/login/success" : alert("login failed");
      })
      .catch(function (err) {
        alert("Error Occurred:" + err);
      });
  }

  handleSubmit() {
    this.callAuthAPI();
  }


  render() {
    return (
      <div className="flex flex-col bg-gray-200 p-10 w-1/3 mx-auto">
        <H1>Login</H1>

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
        <button onClick={this.handleSubmit} className="border-blue-700 h-12 border bg-blue-700 hover:shadow-outline w-40 rounded-full mx-auto text-gray-100">Submit</button>
        {this.state.login === true && <Redirect to="/success" />}
      </div>
    );
  }
}
export default Login;
