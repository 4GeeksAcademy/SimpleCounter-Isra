//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let hours = 0;
let minutes = 0;
let seconds = 0;
let counter = setInterval(startCount, 1000);

function startCount() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  displayTime(counter);
}

//render your react application
function displayTime() {
  ReactDOM.render(
    <Home hoursV={hours} minutesV={minutes} secondsV={seconds} />,
    document.querySelector("#app")
  );
}

displayTime();
