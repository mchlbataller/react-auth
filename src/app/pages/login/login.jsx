import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const input = e.target.type === 'text' ? 'username' : 'password';
        this.setState(
            {[input]: e.target.value}
        )
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.username} />
                <input type="password" onChange={this.handleChange} value={this.state.password} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default Login;