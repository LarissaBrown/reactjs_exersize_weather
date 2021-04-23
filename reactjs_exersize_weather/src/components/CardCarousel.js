import React from 'react'
import {v4} from 'uuid'
import Card from './Card'
import Carousel from 'react-multi-carousel'




export default function CardCarousel(props){

   const {weatherData} = props


    return (


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
  

      {console.log("cardCarousel")}
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



    )
}