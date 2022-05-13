import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import ToDoDisplay from './components/ToDoDisplay';

function App() {
  const[item, setItem] = useState([]);
  // const [theseToDo, settheseToDO] = useState([]);
  const addTask = (newToDo) =>{
    setItem([...item, newToDo]);
  }

  const deleteTask = (i) =>{
    const task = item.filter((task, index) => i !== index)
    setItem(task)
  }

  return (
    <div className="App">

      <ToDoList addTask = {addTask}/>
      <hr/>
      <ToDoDisplay item={item}
      setItem={setItem}
      deleteTask={deleteTask}/>
    </div>
      
  );
}

export default App;
