import React, {useState, useEffect} from 'react'
import "./Status.css"
function Status({tasksByDay}) {
    const [status, setstatus] = useState(false)
    useEffect(() => {
        tasksByDay.length >= 1 ? setstatus(true) : setstatus(false)
    }, [tasksByDay])
    
    return (
        <span className="state">
            {status ? "Active" : "Not Active"}
        </span>
    )
}
export default Status