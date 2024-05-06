import React from "react";
import "./DateComponent.css";
function DateComponent({ day }) {
  return <span className="day-format">{day()}</span>;
}
export default DateComponent;
