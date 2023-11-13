import React from 'react'
import "./TaskItem.css"
function TaskItem({taskName, taskDay, taskTime}) {
    const deleteIt = (e)=>{
        let elem = e.target.parentElement
        console.log(elem)
    }
    return (
        <li>
            <span className="task-name">{taskName}</span> 
            <span className="task-time"> {taskTime}</span> 
            <button className="task-edit">edit</button>
            <button className="task-delete" onClick={deleteIt}>delete</button>
            <input type='checkbox'/>
        </li>
    )
}
export default TaskItem