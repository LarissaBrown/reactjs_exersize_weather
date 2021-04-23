import React, {useContext} from 'react' 
import {v4} from 'uuid'
import Bar from './Bar'
import {StoreContext}from "../context/StoreProvider"




export default function Barchart(props){
   
const {fiveDayData} = useContext(StoreContext)
console.log("fivedaydata", fiveDayData)
const {tempChecked} = props

    return(

    <div className="barchart" >

       {fiveDayData.map( (day) => {

        


            // const tempColor = colorChanger(temp)

        
            // const analog = analogTimeDisplay(time)
           let time= day.dt_txt.split(" ")[1]
           let timeArr = time.split('').splice(0, 5)
           timeArr[0] == 0 && timeArr.shift()

            if(timeArr === `0:00`){
                    timeArr = '12:00'
                } else if(timeArr === `15:00`){
                    timeArr = '3:00'
                }else if(timeArr === '18:00'){
                    timeArr = '6:00'
                }else if(timeArr === '21:00'){
                    timeArr ='9:00'
                }

                if(timeArr === '0:00'||'3:00'||'6:00'||'9:00'){
                    timeArr = timeArr +"AM" 
                       }
       
                  else {
                           timeArr = timeArr+'PM'
                       } 
                timeArr = timeArr.split(',')

        return(
          
        <Bar           
            celcius={Math.floor(day.main.temp - 273.15)} 
            fahrenheit={Math.floor((day.main.temp - 273.15)* 9/5 + 32)} 
            key={v4()}
            temp={day.main.temp }
            tempChecked={!tempChecked}
            color={"pink"}
           
            timeDisplay={timeArr}
            description={day.weather.description}
        /> 
        )
        }
                      
        )
        }
    </div>    
    )
    }


    // if(timeArr === '12:00'||'15:00'||'18:00'||'21:00')


    // const [color, setColor] = useState("pink")
// const [timeDisplay, setTimeDisplay] = useState("")
// let time
// let temp


// const analogTimeDisplay = (time)=>{

        
//  if(time === '00:00:00'){

//       return  setTimeDisplay("12:00AM")
//     }
        
        
//    else if(time === '03:00:00'){

//         setTimeDisplay("3:00AM")
//    }
//    else if(time === '06:00:00'){

//         setTimeDisplay("6:00AM")
// }   
            
//    else if(time === '09:00:00'){

//         setTimeDisplay("9:00AM")
//    }
        
//    else if(time === '12:00:00'){

//         setTimeDisplay("12:00")
//    }
        
            
//    else if(time === '15:00:00'){

//         setTimeDisplay("3:00")
//    }
        

//    else if(time === '18:00:00'){

//         setTimeDisplay("6:00")
//    }
                
//    else if(time === '21:00:00'){

//         setTimeDisplay("9:00")
//    }
  
//    return timeDisplay
// }





// const colorChanger = (temp)=>{


    
//   if(temp > 274 && temp < 279){
 
//          setColor("blue")
       
//     }
         
//     else if(temp > 283 && temp < 288){
 
//         setColor("yellow")
      
//     }
         
//     else if(temp > 288 && temp < 300){
 
//         setColor("red")
        
//     }else {

//         setColor("green")
       
//     }
    
//     return color
// }
   

