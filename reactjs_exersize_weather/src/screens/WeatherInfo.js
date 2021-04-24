// After the weather data has been loaded the weather info screen is made visible. This screen is capable of showing a minimum of  5 days of weather forecasts for the same location. 
// Temperature checkbox 
// The screen contains a CheckboxGroup that switches between Celsius and Fahrenheit (Default). When the user selects i.e.  Celsius, all temperatures in the cards (BarChart) must switch to Celsius. 
// Card Arrows 
// Below the Checkboxes, there are two arrows to scroll through the weather cards (pageSize == 3) 

//
// Weather Cards 
// Below the arrows, a maximum of 3 weather cards are visible and they are laid out horizontally. Each card displays the weather  forecast for one day and must at least show the average temperature and date for that day.
import React , {useContext} from 'react' 
import Barchart from '../components/Barchart.js'
import {StoreContext} from '../context/StoreProvider'
import Carousel from 'react-multi-carousel'
import {v4} from 'uuid'
import Card from '../components/Card'



export default function WeatherInfo(props){
    const {tempChecked, setTempChecked} = useContext(StoreContext)
    console.log("tempChecked",tempChecked)
    const {weatherData} = props


    // useEffect(() =>{
   
    //     setWeatherData(weatherData])
      
    //    }, [weatherData, setWeatherData])

    const handleKelvin=()=>{
       
      
        setTempChecked(!tempChecked)
        console.log(tempChecked)
       
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

    <Carousel
     showDots={true}
     sliderClass=""
     slidesToSlide={0}
     swipeable
     additionalTransfrom={0}
     arrows
     autoPlaySpeed={3000}
     centerMode={false}
     containerClass="container"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite={false}
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
     responsive={{
       desktop: {
           breakpoint: {
               max: 3000,
               min: 1024
           },
           items: 3,
           partialVisibilityGutter: 40
       },
        mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: 30
         },
         tablet: {
          breakpoint: {
             max: 1024,
             min: 464
          },
           items: 2,
           partialVisibilityGutter: 30
         }
       }}
    >
             
             {weatherData.map((item, index) => 
        
               <Card 
                  description={item.weather.description}                 
                  date={item.dt_txt.split(" ")[0]}    
                  celcius={Math.floor(item.main.temp - 273.15)} 
                  fahrenheit={Math.floor((item.main.temp - 273.15)* 9/5 + 32)} 
                  key={v4()}
                  weatherData={weatherData}
                  item = {item}
                  i ={index}
                            />
                
            )
              

             }  
    </Carousel>
        <Barchart weatherData={weatherData}/>


        </div>

        
    )
}