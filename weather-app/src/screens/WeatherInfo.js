import React, {useEffect} from "react";
import TempToggle from "../components/TempToggle";
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from "react-redux";
import { fetchFiveDayData } from "../redux/actions";
import { connect } from "react-redux";



function WeatherInfo() {
  const dispatch = useDispatch();

  // const weather = useSelector((state) => state.weather);
  const fiveDayData = useSelector((state) => state.fiveDayData)
  const isLoaded = useSelector((state) => state.isLoaded)

  useEffect(() => {
    
    isLoaded && dispatch(fetchFiveDayData())
   
  }, [isLoaded, dispatch]);

  console.log("fetchFiveDayData", fiveDayData)

  return (
    <React.Fragment>
   
   <Grid container >
      <h1 style={{ paddingTop: "5%", color: "white" ,fontSize: "3em", width: "100%", textAlign: "center" }}>The Weather Report Munich</h1>
      <h2 style={{  color:'rgb(18, 48, 75)', padding: "40px" , fontWeight: "lighter"}}>
        “If enough people think of a thing and work hard enough at it, I guess
        it’s pretty nearly bound to happen, wind and weather permitting.” –
        Laura Ingalls Wilder
      </h2>
      <Grid container >
        <TempToggle />
      </Grid>
  
    </Grid>
    </React.Fragment>
  );
}
const mapStateToProps = function(state) {
  return {
    weather: state.weather,
    fiveDayData: state.fiveDayData
  }
}
export default connect(mapStateToProps)
  (WeatherInfo)