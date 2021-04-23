import React, {useContext} from 'react'

// import {StoreContext}from "../context/StoreProvider"



export default function Bar(props){
  
    
     const {tempChecked, celcius,color,fahrenheit, timeDisplay} = props
    


    return(
        <div  className="bar" style={{backgroundColor: `${color}`}}>
            <div className="bar" >
                {tempChecked? <p>Temp: {celcius}C</p> : <p>Temp: {fahrenheit}C</p>}
                <p>Time: {timeDisplay}</p>
            </div>
        </div>
    )
}


