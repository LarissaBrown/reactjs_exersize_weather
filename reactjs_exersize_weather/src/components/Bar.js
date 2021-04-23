import React, {useState} from 'react'


export default function Bar(props){
   
    let timeDisplay ="6:00AM"
     const {tempChecked, temp, time, celcius, fahrenheit} = props
     const [color, setColor] = useState('pink')

    console.log("time", time)
     switch (time){
        case time === '00:00:00':
            timeDisplay = "12:00AM"
            break;
            
        case time === '03:00:00':
            timeDisplay  = "3:00AM"
            break;

        case time === '06:00:00':
            timeDisplay  = "6:00AM"
            break;
                
        case time === '09:00':
            timeDisplay  = "9:00AM"
            break;
        case time === '12:00:00':
            timeDisplay  = "12:00PM"
            break;
                
        case time === '15:00:00':
            timeDisplay  = "3:00PM"
            break;

        case time === '18:00:00':
            timeDisplay  = "6:00PM"
            break;
                    
        case time === '21:00:00':
            timeDisplay  = "9:00PM"
            break;           
        default:
            break;
               
     }
     console.log("temp",temp)
     console.log("color1", color)
     switch (temp, setColor){
        
        case temp > 272.039 && temp < 283.15:
            setColor("blue")
            break;
        
        case temp > 283.14 && temp < 299.817:
            setColor("yellow")
            break;
        
        case temp > 299.816 && temp < 310.928:
            setColor("red")
            break;
            default:
                break;
       }
        console.log("color2", color)

    return(
        <div  className="bar" style={{backgroundColor: `${color}`}}>
            <div className="bar" >
                {tempChecked? <p>Temp: {celcius}C</p> : <p>Temp: {fahrenheit}C</p>}
                <p>Time: {timeDisplay}</p>
            </div>
        </div>
    )
}


