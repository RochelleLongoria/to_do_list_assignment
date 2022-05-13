import React, { useState } from "react";


const ToDoList = (props) => {
    const [item, setItem] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    props.addTask({
        item,
        completed:false
    });
    setItem("")
    }




    return (
        <fieldset>
            <legend>Create A To-Do</legend>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Create:</label>
                    <input type="text" onChange= {(e) => setItem(e.target.value)} value={item} />
                    <button>Add</button>
                </div>
            </form>
        </fieldset>

    );
}

export default ToDoList;
