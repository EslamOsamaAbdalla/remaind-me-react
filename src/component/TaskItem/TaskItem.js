import React, { useState, useRef } from 'react'
import "./TaskItem.css"
function TaskItem({taskName, taskTime, allTasks, setallTasks}) {
    const [checkMark, setCheckMark] = useState(false)
    const taskElement = useRef("")
    const deleteIt = ()=>{
        let updatedData = allTasks.filter((i)=>{
            return i[0] !== taskName
        })
        setallTasks(updatedData)
    }
    const chekMark = (checked)=>{
        setCheckMark(checked)
        if (taskElement.current.style.backgroundColor == "green") {
            taskElement.current.style.textDecoration = "none"
            taskElement.current.style.backgroundColor = "yellow"
        } else {
            taskElement.current.style.textDecoration = "line-through"
            taskElement.current.style.backgroundColor = "green"
        }
    }
    return (
        <li ref={taskElement}>
            <span className="task-name">{taskName}</span> 
            <span className="task-time"> {taskTime}</span> 
            <button className="task-delete" onClick={deleteIt}>delete</button>
            <input type='checkbox' checked={checkMark} onChange={(e)=>{chekMark(e.target.checked)}}/>
        </li>
    )
}
export default TaskItem