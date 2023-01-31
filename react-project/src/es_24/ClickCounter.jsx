import React from "react";



export class ClickCounter extends React.Component {

    state = {
        counter: 0
    };

    handleCounterIncrement = () => {
        this.setState((state)=> {
            return {
               counter: state.counter + 1
            }
        })
    }

    render(){
        return (
        <div>
            {this.state.counter}
            <button type="button" onClick={this.handleCounterIncrement}>+</button>
        </div>);
    }
}