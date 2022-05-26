import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todo";

export type filterValuesType ="all" | "completed" | 'active'
function App() {
  let[tasks, setTasks] = useState<Array<TaskType>>([
    {id:1, title:"CSS", isDone: true},
    {id:2, title:"Angular", isDone: false},
    {id:3, title:"Nest Js", isDone: true},
    {id:4, title:"Next Js", isDone: false},
    {id:5, title:"Node JS", isDone: true},
    {id:6, title:"RxJs", isDone: false},
    {id:7, title:"NgRx", isDone: true},
    {id:8, title:"JS", isDone: false},
    {id:9, title:"React", isDone: true},
    {id:10, title:"Redux", isDone: false}
  ])
  let[filter,setFilter] = useState<filterValuesType>('all')
  let tasksForTodolist = tasks;
  if(filter === 'completed'){
    tasksForTodolist = tasks.filter(t => t.isDone)
  }
  if(filter === 'active'){
    tasksForTodolist = tasks.filter(t => !t.isDone)
  }
  const removeTask = (id:number) =>{
    let filteredTasks = tasks.filter(t => t.id !== id);
    setTasks(filteredTasks)
  }
  const changeFilter = (value:filterValuesType) =>{
    setFilter(value)
  }



  return (
      <div className="App">
        <Todolist title="What to learn"
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
        />
      </div>
  );
}

export default App;
