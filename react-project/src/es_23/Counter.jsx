import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    
    state = {
        counter: this.props.initialValue
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState((state)=>{
                return {counter : this.state.counter + this.props.incrementBy}
            })
        }, this.props.timeout)
    }
    
    render() {
        return (
            <CounterDisplay counter={this.state.counter} />
        );
    }
}