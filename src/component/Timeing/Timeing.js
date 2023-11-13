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
        let tMinutes = new Date().getMinutes()
        let Seconds = new Date().getSeconds()
        return `${Hours} : ${tMinutes} : ${Seconds}`
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