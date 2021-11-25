import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
    const [inputlist, setInputlist] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputlist(event.target.value)
    };

    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems, inputlist];
        });
        setInputlist('');
    };

    const deleteitems = (id) => {
        console.log('deletd');
        setItems((oldItems) => {
            return oldItems.filter((arr,index) => {
                return index !== id;
            })
        })

    };

    return(
        <>
            <div className="main_div">
            <div className="center_div">
                <br />
                <br />
                <h1>Todo List</h1>
                <br />
                <input type='text' placeholder=" Add a Items" onChange={itemEvent}
                    value={inputlist}
                />
                <button onClick={listOfItems}> + </button>
                <ol>
                    {/* <li> {inputlist} </li> */}
                   { Items.map( (itemval, index) => {
                       return (<Todolist 
                        key ={index} 
                        id={index} 
                        text = {itemval}
                        onSelect = {deleteitems}
                        />)
                        
                    } ) }

                </ol>
            </div>
            </div>
        </>
    )
};

export default App;