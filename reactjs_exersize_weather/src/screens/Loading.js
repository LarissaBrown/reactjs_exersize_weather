import React , {useEffect,useState, useContext} from 'react'
import spin from './spin.svg'
import WeatherInfo from './WeatherInfo'

import {StoreContext} from "../context/StoreProvider"





export default function Loading(props){
    
    const [isHidden, setIsHidden] = useState(true)
    const {weatherData, setWeatherData} = useContext(StoreContext)


    useEffect(()=> {
        console.log("First Page")
        weatherData !== []
        &&
        setIsHidden(false? true : false)

    }, []
    )
       
        
        console.log("apiWeatherData",weatherData)

        
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
        
        <WeatherInfo weatherData={weatherData} setWeatherData={setWeatherData}/>
    }
    </>
 )  
}
