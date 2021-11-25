import React from "react";

const Todolist = (props) => {
    

    return (
    <>
    <div className="todo_style">
    <i className="fas fa-times" 
    onClick={() => {
        props.onSelect(props.id);
    }}></i>
    <li> {props.text} </li>
    </div>
    </>);
};

export default Todolist;