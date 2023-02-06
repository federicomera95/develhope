import React from "react";


export class Login extends React.Component {

    state = { username: '', password: '', remember: false};

    handleInputChange = ({name, value}) => {
        this.setState({ [name]: value });
    }

    handleCheckboxChange = ({value}) => {
        this.setState({ remember: value});
    }

    render() {
        return (
             <div>
                <input type="text" name="username" onChange={({target}) => this.handleInputChange(target)} value={this.state.username}/>
                <input type="password" name="password" onChange={({target}) => this.handleInputChange(target)} value={this.state.password}/>
                <input type="checkbox" name="remember" onChange={({target}) => this.handleCheckboxChange(target)} value={this.state.remember}/>
                <button disabled={this.state.username === '' || this.state.password === ''} onClick={this.props.onLogin}>Login</button>
            </div>
            
        );
    }
}