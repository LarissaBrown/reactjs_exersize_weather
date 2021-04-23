import React, {useContext} from 'react' 
import {v4} from 'uuid'
import Bar from './Bar'
import {StoreContext}from "../context/StoreProvider"



export default function Barchart(props){
   
const {fiveDayData} = useContext(StoreContext)
const {tempChecked} = props


    return (

    <div className="barchart" >

       {fiveDayData.map(day => {

            let time = day.dt_txt.split(" ")[1]
       
            let temp = day.main.temp 
           
        return(
          
        <Bar        
            time={time}    
            celcius={Math.floor(day.main.temp - 273.15)} 
            fahrenheit={Math.floor((day.main.temp - 273.15)* 9/5 + 32)} 
            key={v4()}
            tempChecked={tempChecked}
            temp={temp}
        /> 
        )
        }
                      
        )
        }
    </div>    
    )
}