import React from "react";
import { Welcome } from "./Welcome";


export class InteractiveWelcome extends React.Component {

    state = { name: '' };

    handleNameInputChange = ({value}) => {
        this.setState({name: value})
    }

    render(){
        return(
            <>
                <input type="text" value={this.state.name} onChange={({target}) => this.handleNameInputChange(target)}/>
                <Welcome name={this.state.name}/>
            </>
        );
    }
}