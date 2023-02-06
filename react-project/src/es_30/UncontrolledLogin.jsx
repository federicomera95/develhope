import React, { createRef } from "react";


export class UncontrolledLogin extends React.Component {

    _formRef = createRef() 

    

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value; 
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        this.props.onLogin();

        console.log({
            username,
            password,
            remember
        });
    }

    render() {



        return (
            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input type="text" name="username" />
                <input type="password" name="password"/>
                <input type="checkbox" name="remember" />
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
            
        );
    }
}