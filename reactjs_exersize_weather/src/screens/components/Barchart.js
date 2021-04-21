import React from 'react' 
import {v4} from 'uuid'
import Bar from './Bar'




export default function Barchart(props){
const {tempChecked, weatherData } = props
    return (

    <div className="barchart">
       {weatherData.map(item => <Bar        
            time={item.dt_txt.split("")[1]}    
            celcius={Math.floor(item.celcius)} 
            fahrenheit={Math.floor((item.celcius - 32) * 5/9)} 
            key={v4()}
            tempChecked={tempChecked}/>

                        
       )}
    </div>




        
    )
}