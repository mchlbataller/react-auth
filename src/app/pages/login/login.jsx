import React from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', login: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const input = e.target.type === 'text' ? 'username' : 'password';
        this.setState(
            {[input]: e.target.value}
        )
    }

    handleSubmit() {
        if(true) {
            this.setState(state => ({login: !state.login}))
        }
    }

    render() {
        if(this.state.login === true)  
            return(<Redirect to="/success" />)  
        else 
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