import React from "react";


export class TodoList extends React.Component {

    state = { 
        items:['javascript','php','python','java'],
        value: '',
    };

    handleChangeInput = ({value}) => {
        this.setState({value: value});
    }

    handleAddItem = ()=> {
       this.setState((state) => ({ items: state.items.push(state.value), value: '' }));
    }


    render() {
        return (
             <ul>
                {this.state.items.map((item)=> <li key={this.state.items.indexOf(item)}>{item}</li>)}
                <input type="text" value={this.state.value} onChange={({target}) => this.handleChangeInput(target)}/>
                <button onClick={this.handleAddItem}>Add item</button>
             </ul>
        );
    }
}