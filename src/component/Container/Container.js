import React, { useState, useEffect } from "react";
import "./Container.css";
import Timeing from "../Timeing/Timeing";
import TimeTable from "../TimeTable/TimeTable";
import TaskItem from "../TaskItem/TaskItem";
import DateComponent from "../DateComponent/DateComponent";
import Status from "../Status/Status";
import CreateTask from "../CreateTask/CreateTask";
function Container() {
  const [taskItem, settaskItem] = useState([]);
  const [allTasks, setallTasks] = useState([]);
  const [tasksByDay, settasksByDay] = useState([]);
  useEffect(() => {
    let tasks = [...allTasks, taskItem];
    setallTasks(tasks);
    // eslint-disable-next-line
  }, [taskItem]);
  useEffect(() => {
    showTasksByDate();
    // eslint-disable-next-line
  }, [allTasks]);
  useEffect(() => {
    let filterItAll = allTasks;
    filterItAll.filter((i) => {
      return i.length !== 0;
    });
    setallTasks(filterItAll);
    // eslint-disable-next-line
  }, []);
  let day = () => {
    let year = new Date().getFullYear();
    let mounth = new Date().getMonth();
    let day = new Date().getDate();
    return `${year} / ${mounth + 1} / ${day}`;
  };
  let showTasksByDate = () => {
    let year = new Date().getFullYear();
    let mounth = new Date().getMonth() + 1;
    let day = new Date().getDate();
    if (day < 10) {
      if (mounth < 10) {
        let thisDay = `${year}-0${mounth}-0${day}`;
        let theFilter = allTasks.filter((x) => {
          return x[1] === thisDay;
        });
        return settasksByDay(theFilter);
      }
      let thisDay = `${year}-${mounth}-0${day}`;
      let theFilter = allTasks.filter((x) => {
        return x[1] === thisDay;
      });
      return settasksByDay(theFilter);
    } else {
      let thisDay = `${year}-${mounth}-${day}`;
      let theFilter = allTasks.filter((x) => {
        return x[1] === thisDay;
      });
      return settasksByDay(theFilter);
    }
  };
  return (
    <div id="container">
      <h2>
        <DateComponent day={day} /> <Status tasksByDay={tasksByDay} />
      </h2>
      <div className="data">
        <div className="data-real">
          <ul>
            {tasksByDay
              ? tasksByDay.map((i, y) => {
                  return (
                    <TaskItem
                      key={y}
                      taskName={i[0]}
                      taskTime={i[2]}
                      setallTasks={setallTasks}
                      allTasks={allTasks}
                    />
                  );
                })
              : "no Tasks"}
          </ul>
        </div>
        <div className="data-detailes">
          <TimeTable tasksByDay={tasksByDay} />
          <Timeing />
        </div>
      </div>
      <CreateTask settaskItem={settaskItem} />
    </div>
  );
}
export default Container;
