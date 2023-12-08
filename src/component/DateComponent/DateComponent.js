import React from 'react'
import "./DateComponent.css"
function DateComponent({day}) {
  return (
    <>
    {day()}
    </>
  )
}
export default DateComponent