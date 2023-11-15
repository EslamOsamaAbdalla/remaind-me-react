import React, { useState, useEffect, useRef } from "react";
import "./Container.css"
import Timeing from "../Timeing/Timeing";
import TimeTable from "../TimeTable/TimeTable";
import TaskItem from "../TaskItem/TaskItem";
import DateComponent from "../DateComponent/DateComponent";
import Status from "../Status/Status";
import CreateTask from "../CreateTask/CreateTask";
function Container() {
  const [taskItem, settaskItem] = useState([])
  const [allTasks, setallTasks] = useState([])
  const [tasksByDay, settasksByDay] = useState([])
  useEffect(() => {
    let tasks = [...allTasks, taskItem]
    setallTasks(tasks)
  }, [taskItem])
  useEffect(() => {
    showTasksByDate()
  }, [allTasks])
  useEffect(() => {
    let filterItAll = allTasks
    filterItAll.filter((i)=>{return i.length !== 0})
    setallTasks(filterItAll)
  }, [])
  let day = ()=>{
    let year = new Date().getFullYear()
    let mounth = new Date().getMonth()
    let day = new Date().getDate()
    return `${year} / ${mounth + 1} / ${day}`
  }
  let showTasksByDate = ()=>{
    let year = new Date().getFullYear()
    let mounth = new Date().getMonth() + 1
    let day = new Date().getDate()
    let thisDay = `${year}-${mounth}-${day}`
    let theFilter = allTasks.filter((x)=>{
      return x[1] == thisDay
    })
    settasksByDay(theFilter)
  }
  return (
    <div id="container">
      <h2> <DateComponent day={day}/>  <Status/></h2>
      <div className="data">
        <div className="data-real">
          <ul>
          {tasksByDay && tasksByDay.map((i,y)=>{
            return  <TaskItem key={y} taskName={i[0]} taskTime={i[2]} setallTasks={setallTasks} allTasks={allTasks}/>
          })}
          </ul>
        </div>
        <div className="data-detailes">
          <TimeTable tasksByDay={tasksByDay}/>
          <Timeing/>
        </div>
      </div>
      <CreateTask settaskItem={settaskItem}/>
    </div>
  )
}
export default Container