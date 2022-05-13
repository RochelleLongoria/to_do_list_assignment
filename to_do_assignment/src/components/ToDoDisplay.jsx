import React, { useState } from 'react';
import "../App.css";


const ToDoDisplay = (props) => {
    const {item, setItem, deleteTask} = props

    // const[thingys, setThingys] = useState([]);
    // if(props.item && props.item !== thingys[thingys.length -1]){
    //     setThingys([...thingys, props.item]);
    //     console.log(thingys);
    // }


function updateCompleted(e,i){
    // e.preventDefault();
    const newItem = [...item]
    // if(newThingys[i].completed === false){
    //     newThingys[i].completed = true;
    // }else{
    //     newThingys[i].complete = false;
    // }
    newItem[i].completed = !newItem[i].completed;
    setItem(newItem);

}

const deleteHandler = (e,i) =>{
    deleteTask(i)
}


    return (
        <div>
            <form>
                {item.map((thingy,i) => (
                    <div key={i}> 
                        <input type="checkbox"  onClick={(e) => updateCompleted(e,i)} />
                        <p className={`${thingy.completed && "strike"}`}>{thingy.item}</p>
                        <button onClick={(e) => deleteHandler(e, i)} >Delete</button>
                    </div>
                )
                )}
            </form>
        </div>
    )
}

export default ToDoDisplay