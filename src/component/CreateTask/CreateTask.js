import React, { useRef } from "react";
import "./CreateTask.css";
function CreateTask({ settaskItem }) {
  const elem = useRef();
  const taskName = useRef();
  const taskDay = useRef();
  const taskTime = useRef();
  const showPage = () => {
    elem.current.style.display = "block";
  };
  const hidePage = () => {
    elem.current.style.display = "none";
  };
  const taskData = (e) => {
    e.preventDefault();
    let taskData = [
      taskName.current.value,
      taskDay.current.value,
      taskTime.current.value,
    ];
    settaskItem(taskData);
    taskName.current.value = "";
    taskDay.current.value = "";
    taskTime.current.value = "";
    hidePage();
  };
  return (
    <>
      <button className="add-task-btn" onClick={showPage}>
        add task
      </button>
      <div className="add-task-page" ref={elem}>
        <div className="close" onClick={hidePage}>
          x
        </div>
        <form>
          <label>task</label>
          <input type="name" ref={taskName} />
          <label>day</label>
          <input type="date" ref={taskDay} />
          <label>time</label>
          <input type="time" ref={taskTime} />
          <button className="add-task-submist" onClick={taskData}>
            add
          </button>
        </form>
      </div>
    </>
  );
}
export default CreateTask;
