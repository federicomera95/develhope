import React from "react";


export class TodoList extends React.Component {

    items=['javascript','php','python','java'];

    handleAddNewItem = ()=> {
       this.setState((items)=>{
            this.items.push(document.getElementById('item').value);
            document.getElementById('item').value = '';
            return this.items;
       });
    }

    handleRemoveItem = (i) => {
        this.setState((items)=> {
            this.items.splice(i,1);
            return this.items;
        })
    }

    handleResetItems = () => {
        this.setState((items)=> {
            return this.items = [];
        })
    }

    render() {
        return (
             <ul>
                {this.items.map((name,index)=> <li key={name+index}>{name}<button onClick={() =>this.handleRemoveItem(index)}>Remove</button></li>)}
                <input type="text" id="item"/>
                <button onClick={this.handleAddNewItem}>Add item</button>
                <button onClick={this.handleResetItems}>Reset items</button>
             </ul>
        );
    }
}