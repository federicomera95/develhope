import React from "react";
import { Welcome } from "./welcome";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age={25}/>
            </div>
        );
    }
}