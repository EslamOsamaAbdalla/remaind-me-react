import React from 'react'
import "./TimeTable.css"
function TimeTable() {
    let dayArr = []
    let dayTime = ()=>{
    let days = 24;
        for (let i = 1; i <= days; i++) {
        dayArr.push(i)
        }
    }
    dayTime()
    return (
        <ul>
            {dayArr.map((i)=>{
                return  <li key={i} className="time-table"> {i} : 00</li>
            })}
        </ul>
    )
}
export default TimeTable