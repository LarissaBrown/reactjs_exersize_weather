
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const StoreContext = React.createContext()



function StoreProvider(props){
  

const [tempChecked, setTempChecked] = useState(true)
const [weatherData, setWeatherData] = useState([])
const [fiveDayData, setFiveDayData] = useState([])

const [arrTimes, setArrTimes] = useState([])

useEffect(()=> {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
    .then(response => {
    
 
        setWeatherData(response.data.list)

    })
    .catch(err => console.error(err))
console.log("axios call")
        return 
}, [setWeatherData])




const handleBargraph = (i)=> {

    weatherData.map((cardItem, index)=> {

        if(i === index || index < i+7){

            setArrTimes(arrTimes.push(cardItem))
        }
        if(arrTimes.length === 8){
        setFiveDayData(arrTimes)

        }
        setArrTimes([])
        return arrTimes
        
    })
       
    return fiveDayData
    }





 return(
    <StoreContext.Provider
    value={{
       weatherData,
       setWeatherData,
       setFiveDayData,
       fiveDayData,
       handleBargraph,
       tempChecked, 
       setTempChecked,
    

    }}>
    {props.children }
    </StoreContext.Provider>
 
 )



}
export {StoreProvider}


//testData for fiveDayData
// [
//     {dt_txt: '04-2021-22 00:00:00', 
//     main: {temp: "295.654"},
//     weather:{description: "partly sunny"}},
    
//     {dt_txt: '04-2021-22 00:30:00', 
//     main: {temp: "200.654"},
//     weather: {description: "chance of rain"}},
    
//     {dt_txt: '04-2021-22 00:60:00', 
//     main: {temp: "340.654"},
//     weather: {description: "partly sunny"}},
    
//     {dt_txt: '04-2021-22 00:90:00', 
//     main: {temp: "236.654"},
//     weather: {description: "thunderstorms"}},
    
//     {dt_txt: '04-2021-22 00:00:00', 
//     main: {temp: "295.654"},
//     weather:{description: "partly sunny"}}
// ]

// Test data for weatherData
// [
//     {dt_txt: '04-2021-22 00:00:00', 
//     main: {temp: "295.654"},
//     weather:{description: "partly sunny"}},
//     {dt_txt: '04-2021-22 00:30:00', 
//     main: {temp: "200.654"},
//     weather: {description: "chance of rain"}},
//     {dt_txt: '04-2021-22 00:60:00', 
//     main: {temp: "340.654"},
//     weather: {description: "partly sunny"}},
//     {dt_txt: '04-2021-22 00:90:00', 
//     main: {temp: "236.654"},
//     weather: {description: "thunderstorms"}},
//     {dt_txt: '04-2021-22 00:00:00', 
//     main: {temp: "295.654"},
//     weather:{description: "partly sunny"}},
//     {dt_txt: '04-2021-22 00:30:00', 
//     main: {temp: "200.654"},
//     weather: {description: "chance of rain"}},
//     {dt_txt: '04-2021-22 00:60:00', 
//     main: {temp: "340.654"},
//     weather: {description: "partly sunny"}},
//     {dt_txt: '04-2021-22 00:90:00', 
//     main: {temp: "236.654"},
//     weather: {description: "thunderstorms"}}
// ]
