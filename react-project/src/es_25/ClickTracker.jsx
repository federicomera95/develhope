import React from "react";


export class ClickTracker extends React.Component {

    state = {
        tracker: ''
    };

    handleClickTracker = (t) => {
       this.setState({ tracker: t.name});
    }


    render(){
        return (
            <>
                <h1>Click: {this.state.tracker}</h1>
                <button name="button_1" type="button" onClick={({target}) => this.handleClickTracker(target)}>Button 1</button>
                <button name="button_2" type="button" onClick={({target}) => this.handleClickTracker(target)}>Button 2</button>
                <button name="button_3" type="button" onClick={({target}) => this.handleClickTracker(target)}>Button 3</button>
            </>
        )
    }
}