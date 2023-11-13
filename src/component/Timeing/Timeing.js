import React, { useEffect,useState } from 'react'
import "./Timeing.css"
function Timeing() {
    const [timing, setTiming] = useState("");
    useEffect(() => {
        setInterval(() => {
            setTiming(time())
        }, 1000);
    }, [])
    let time = ()=>{
        let Hours = new Date().getHours()
        let Minutes = new Date().getMinutes()
        let Seconds = new Date().getSeconds()
        let HoursEnd = Hours < 10 ? `0${Hours}` : `${Hours}`
        let MinutesEnd = Minutes < 10 ? `0${Minutes}` : `${Minutes}`
        let SecondsEnd = Seconds < 10 ? `0${Seconds}` : `${Seconds}`
        return  `${HoursEnd} : ${MinutesEnd} : ${SecondsEnd}`
    }
    return (
        <div className="time-now">
            <h2>time now</h2>
            <div className="time-now-count">
            {timing}
            </div>
        </div>
    )
}
export default Timeing