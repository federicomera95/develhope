import React from "react";
import { TodoList } from "./TodoList";


export class App extends React.Component {

    render() {
        return (
            <div>
               <TodoList render={(items, handleClick)=> {
                   return items.map((item) => {
                        return (<li key={items.indexOf(item)}>{item}
                        <button onClick={()=>handleClick(items.indexOf(item))}>Remove item</button>
                        </li>) 
                    })
               }} />
            </div>
        );
    }
}