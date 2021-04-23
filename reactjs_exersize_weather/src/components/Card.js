import React, {useContext} from 'react' 
import {StoreContext} from "../context/StoreProvider"



export default function Card(props){
   

  const {handleBargraph} = useContext(StoreContext)
  const {
    date,    
    fahrenheit,
    celcius,
    tempChecked,
    description,
    i
    }=props
 




    return (

    <>
   
        
        <div  className="react-multi-carousel-item"  >
            <h3>{description}</h3>
            {tempChecked
            ?
            <>
            <h3> Temp: </h3>
            <p>{fahrenheit}F</p>
            </>
            :
            <>
            <h3>Temp: </h3>
            <p>{celcius}C</p>
            </>
            } 
            <h4>Date:</h4>
            <p>{date}</p>
            <button onClick={()=> handleBargraph(i)} >View Data</button>

        </div>
        
    
    

    </>
    )
}