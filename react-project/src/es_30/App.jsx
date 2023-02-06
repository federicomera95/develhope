import React from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";


export class App extends React.Component {

    onLogin = () => {
        console.log('Clicked');
    }

    render() {
        return (
            <div>
                <UncontrolledLogin onLogin={this.onLogin}/>
            </div>
        );
    }
}