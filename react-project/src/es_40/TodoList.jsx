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
       this.setState((state) => state.items.push(state.value));
    }

    handleRemoveItem = (i) => {
        this.state.items.splice(i,1);
        this.setState(state => ({items: state.items}));
    }

    handleResetItems = ()=> {
        this.setState({items: [], value: ''});
    }


    render() {
        console.log(this.state)
        return (
             <ul>
                {this.props.render(this.state.items,this.handleRemoveItem)}
                <input type="text" value={this.state.value} onChange={({target}) => this.handleChangeInput(target)}/>
                <button onClick={this.handleAddItem}>Add item</button>
                <button onClick={this.handleResetItems}>Reset item</button>
             </ul>
        );
    }
}