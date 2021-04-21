// The loading screen is the first screen that is shown and here 
//the weather data will be loaded from OpenWeatherMap at: https:// openweathermap.org/.
// You can use our OpenWeatherMap APPID to obtain weather information.  
//The URL provided below returns weather info 
//for a total of 5 days and each day contains a  maximum of 8 weather segments (3 hours). 
// Example request with our APPID: 
// http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40 

import React , {useEffect,useState} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'
import axios from 'axios'




export default function Loading(){
    
    const [weatherData, setWeatherData] = useState([])
    const [isHidden, setIsHidden] = useState(true)
  



    useEffect(()=> {
    
       axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
       .then(response => {


            setWeatherData(response.data.list)
            console.log(weatherData)
       
       })
        .catch(err => console.error(err))


        setIsHidden(false)
       
    return

}, [weatherData])
       
        


        
 return(
     <>
    {
     isHidden
        ?
   
        <div style={
            { display: "flex", 
            alignItems: 'center', 
            flexDirection: "column",  
            width: "100%", 
            viewHeight: "100%", 
            backgroundColor: "#282c34"}
            }>
                <p style={{color: "white", fontSize: "10vw"}}>
                    Weather App
                </p>
            <img src={spin} alt="spin" className="App-spin"/>
                <p style={{color: "white", fontSize: "5vw"}}>
                    Loading ...
                </p>
               
        </div>
 
        :
        
        <WeatherInfo weatherData={weatherData}/>
    }
    </>
 )  
}
