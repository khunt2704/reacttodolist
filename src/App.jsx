import React, { useState } from "react";
import Todolist from "./Todolist";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container-fluid main_div">
        <div className="row center_div">
            
                <br />
                <br />
                <div className="col-md-6 mx-auto">
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
            </div>
        </>
    )
};

export default App;