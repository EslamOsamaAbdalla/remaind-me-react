import React from 'react'
import "./DateComponent.css"
function DateComponent() {
    let day = ()=>{
        let year = new Date().getFullYear()
        let mounth = new Date().getMonth()
        let day = new Date().getDate()
        return `${year} / ${mounth + 1} / ${day}`
    }
  return (
    <>
    {day()}
    </>
  )
}
export default DateComponent