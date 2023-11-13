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
  useEffect(() => {
      let tasks = [...allTasks, taskItem]
      setallTasks(tasks)
  }, [taskItem])
  
  return (
    <div id="container">
        <h2> <DateComponent/>  <Status/></h2>
        <div className="data">
          <div className="data-real">
            <ul>
            {
              allTasks ?allTasks.map((i,y)=>{
                return  y !== 0 ? <TaskItem key={y} taskName={i[0]} taskDay={i[1]} taskTime={i[2]}/> :""
              }) : "no tasks"
            }
            </ul>
          </div>
          <div className="data-detailes">
            <TimeTable/>
            <Timeing/>
          </div>
        </div>
        <CreateTask settaskItem={settaskItem} taskItem={taskItem}/>
    </div>
  )
}
export default Container