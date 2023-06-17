import React, {useState} from 'react'
import Todo from './Todo';

function TodoMain() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);

    const onTaskChange = (event) => {
        setTask(event.target.value)
    }

    const addTask = () => {
        if(task !== ""){
            setTaskArray((prevTasks) => {
                return [...prevTasks, task]
            })
            setTask("")
        }
    }

  return (
    <div>
        <div>
            <input type='text' value={task} placeholder='Add task' onChange={onTaskChange}/>
            <button onClick={addTask}>Add</button>
        </div>
        <div>
            <ol>
                {taskArray.map((val, index) => {
                    return <Todo key={index} text={val}/>
                })}
            </ol>
        </div>
    </div>
  )
}

export default TodoMain