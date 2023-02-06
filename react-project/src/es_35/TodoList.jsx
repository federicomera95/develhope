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
       this.setState((state) => ({ items: state.items.push(state.value) }));
    }

    handleRemoveItem = (i) => {
        this.setState(state => ({items: state.items.splice(i,1)}));
    }

    handleResetItems = ()=> {
        this.setState({items: [], value: ''});
    }


    render() {
        return (
             <ul>
                {this.state.items.map((item)=> <li key={this.state.items.indexOf(item)}>{item}<button onClick={()=> this.handleRemoveItem(this.state.items.indexOf(item))}>Remove item</button></li>)}
                <input type="text" value={this.state.value} onChange={({target}) => this.handleChangeInput(target)}/>
                <button onClick={this.handleAddItem}>Add item</button>
                <button onClick={this.handleResetItems}>Reset item</button>
             </ul>
        );
    }
}