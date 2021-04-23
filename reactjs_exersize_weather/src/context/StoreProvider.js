
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const StoreContext = React.createContext()



export default function StoreProvider(props){
  


const [weatherData, setWeatherData] = useState([])
const [fiveDayData, setFiveDayData] = useState([])
const [arr, setArr] = useState([])

useEffect(()=> {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
    .then(response => {
    
 
        setWeatherData(response.data.list)

    })
    .catch(err => console.error(err))

        return 
}, [setWeatherData])


useEffect(()=>{
    setArr([])
}, [setArr])


const handleBargraph = (i)=> {

    weatherData.map((cardItem, index)=> {

        if(i === index ){
            console.log(i)
            console.log(index)
            arr.push(cardItem)
        } 
        else if (index < i+8 ){
            console.log(i)
            console.log(index)
            arr.push(cardItem)

        }else if(arr[7]){

            return
        }
       }) 
       console.log("arrItem", arr)
       setFiveDayData(arr)
       console.log("fiveDayDataAfterClick",fiveDayData)
     return
}


 return(
    <StoreContext.Provider
    value={{
       weatherData,
       setWeatherData,
       setFiveDayData,
       fiveDayData,
       handleBargraph
     
        
      
    }}>
    {props.children }
    </StoreContext.Provider>
 
 )



}


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
