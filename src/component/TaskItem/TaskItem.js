import React, { useState, useRef } from 'react'
import "./TaskItem.css"
function TaskItem({taskName, taskTime, allTasks, setallTasks}) {
    const [checkMark, setCheckMark] = useState(false)
    const deleteIt = ()=>{
        let updatedData = allTasks.filter((i)=>{return i[0] !== taskName})
        setallTasks(updatedData)
    }
    const chekMark = (checked)=>{setCheckMark(checked)}
    return (
        <li className={checkMark ?"checked":""}>
            <span className="task-name">{taskName}</span> 
            <span className="task-time"> {taskTime}</span> 
            <input type='checkbox' checked={checkMark} onChange={(e)=>{chekMark(e.target.checked)}}/>
            <button className="task-delete" onClick={deleteIt}>delete</button>
        </li>
    )
}
export default TaskItem