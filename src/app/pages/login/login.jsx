import React from "react";
import { Redirect } from "react-router-dom";

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
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.login === true && <Redirect to="/success" />}
      </div>
    );
  }
}
export default Login;
