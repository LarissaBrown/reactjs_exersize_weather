import React from 'react'

// import {StoreContext}from "../context/StoreProvider"



export default function Bar(props){
  
    
     const {tempChecked, celcius,height,fahrenheit, timeDisplay} = props

     console.log("barHeight", `"${height+200}px"`)
    


    return(
        <div  className="outer-bar" 
            style={{height: `"${parseInt(height)}px"` , backgroundColor: "white"}}>
            <div className="bar" style={{ backgroundColor: "pink"}}>
                {tempChecked? <p>Temp: {celcius}C</p> : <p>Temp: {fahrenheit}C</p>}
                <p>Time: {timeDisplay}</p>
            </div>
        </div>
    )
}


