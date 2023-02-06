import React from "react";
import { Login } from "./Login";


export class App extends React.Component {

    onLogin = () => {
        console.log('Clicked');
    }

    render() {
        return (
            <div>
                <Login onLogin={this.onLogin}/>
            </div>
        );
    }
}