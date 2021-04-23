// After the weather data has been loaded the weather info screen is made visible. This screen is capable of showing a minimum of  5 days of weather forecasts for the same location. 
// Temperature checkbox 
// The screen contains a CheckboxGroup that switches between Celsius and Fahrenheit (Default). When the user selects i.e.  Celsius, all temperatures in the cards (BarChart) must switch to Celsius. 
// Card Arrows 
// Below the Checkboxes, there are two arrows to scroll through the weather cards (pageSize == 3) 

//
// Weather Cards 
// Below the arrows, a maximum of 3 weather cards are visible and they are laid out horizontally. Each card displays the weather  forecast for one day and must at least show the average temperature and date for that day.
import React , {useState, useEffect} from 'react' 
import Barchart from '../components/Barchart.js'
import CardCarousel from '../components/CardCarousel.js'





export default function WeatherInfo(props){
    const [tempChecked, setTempChecked] = useState(true)
    const {weatherData, setWeatherData} = props
    let dayData  = []

    // useEffect(() =>{
   
    //     setWeatherData(weatherData])
      
    //    }, [weatherData, setWeatherData])

    const handleKelvin=()=>{
       
      
        setTempChecked(!tempChecked)
       
    }
   

    return (

        <div>
             <h1 style={{color: "white"}}>The Weather Report Munich</h1>
              <h4 style={{color: "white", padding: '30px',}}>“If enough people think of a thing and work hard enough at it, I guess it’s pretty nearly bound to happen, wind and weather permitting.” – Laura Ingalls Wilder</h4>
        <form style={{display: "flex", flexDirection: "row"}}>

           
            <div className="radio">
                <label>
                    <input type="radio" value="fahrenheit" checked={tempChecked} onChange={handleKelvin}/>
                Fahrenheit
                </label>
        
            
                <label>
                    <input type="radio" value="celcius" checked={!tempChecked} onChange={handleKelvin}/>
                Celcius
                </label>
            </div>
        </form>

        <CardCarousel dayData={dayData} tempChecked={tempChecked} handleKelvin={handleKelvin} weatherData={weatherData}/>

        <Barchart dayData={dayData} tempChecked={tempChecked} handleKelvin={handleKelvin} weatherData={weatherData}/>


        </div>

        
    )
}