import React from "react";

export class Counter extends React.Component {
    
    state = {
        counter: this.props.initialValue
    }
    
    constructor(props) {
        super(props);
        
        setInterval(()=> {
            this.setState((state)=>{
                return {counter : this.state.counter + this.props.incrementBy}
            })
        }, this.props.timeout)
    }
    
    
    render() {
        return (
            <h1>{this.state.counter}</h1>
        );
    }
}