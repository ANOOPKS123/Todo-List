import React from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'
import { useState } from 'react'

const Todo = () => {
    const [Task, setTask] = useState([])

const Addtask=(title)=>{
    const newTask=[...Task,{title}]
    setTask(newTask)
    
}
// remove chyan ulla conditions
const removeTask=(index)=>{
    const newTask=[...Task]
    newTask.splice(index,1)
    setTask(newTask)
}
  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
             <AddTask Addtask={Addtask} />
             </div>
        <div className='task'>
        {Task.map((task,index)=>(
            <ListTask task={task} removeTask={removeTask} index={index} key={index}/>
        ))}
            </div>
        </div>
    </>
  )
}

export default Todo