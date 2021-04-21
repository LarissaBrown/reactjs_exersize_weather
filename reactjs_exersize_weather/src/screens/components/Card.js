import React from 'react' 




export default function Card(props){

   const {
        date,    
        fahrenheit,
        celcius,
        tempChecked,
        description
    }=props

    return (

    <>
   
        
        <div   className="react-multi-carousel-item "  >
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

        </div>
        
    
    

    </>
    )
}