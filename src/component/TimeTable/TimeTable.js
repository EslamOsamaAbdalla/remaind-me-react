import React , {useEffect} from 'react'
import "./TimeTable.css"
function TimeTable({tasksByDay}) {
    useEffect(() => {
        drawTime()
    }, [tasksByDay])
    
    let dayArr = []
    let dayTime = ()=>{
    let days = 24;
        for (let i = 1; i <= days; i++) {
        dayArr.push(i)
        }
    }
    const makeTimeGlow = time=>{
        let taskDone = tasksByDay.filter(i=>{
            return i[2] == time || i[2].slice(0,2)== time.slice(0,2)
        })
        if (taskDone.length != 0) {
            return true
        }
    }
    const drawTime=()=>{
        return dayArr.map(i=>{
            return  i < 10 ? <li key={i} className={`time-table ${makeTimeGlow("0"+i+":00") ? "glow" : ""}`}> 0{i}:00</li> 
            : <li key={i} className={`time-table ${makeTimeGlow(i+":00") ? "glow" : ""}`}> {i}:00</li>
        })
    }
    dayTime()
    return (
        <ul>
            {drawTime()}
        </ul>
    )
}
export default TimeTable