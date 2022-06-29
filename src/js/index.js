//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import PropTypes from "prop-types";

//render your react application
const Timer = (props) => {
    return (
      <div className="bg-light">
        <div className="text-dark d-flex justify-content-center">
          <div id="clock">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg>
        </div>
          <div className="number">{props.digitSix % 10}</div>
          <div className="number">{props.digitFive % 10}</div>
          <div className="number">{props.digitFour % 10}</div>
          <div className="number">{props.digitThree % 10}</div>
          <div className="number">{props.digitTwo % 10}</div>
          <div className="number">{props.digitOne % 10}</div>
        </div>
      </div>
    );
  };
  
  Timer.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
  };
  
  let counter = 0;
  setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(six, five, four, three, two, one)
    counter++;
    

  ReactDOM.render(<Timer digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
  document.querySelector("#app")
  );
}, 1000); 
