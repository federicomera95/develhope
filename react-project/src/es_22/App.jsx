import React from "react";
import { Counter } from "./Counter";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter initialValue={2} incrementBy={1} timeout={500}/>
            </div>
        );
    }
}