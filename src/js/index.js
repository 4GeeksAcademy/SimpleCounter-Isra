//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let hours = 0;
let minutes = 0;
let seconds = 0;
let targetHours = 0;
let targetMinutes = 0;
let targetSeconds = 0;
let counter = null;
let isCount = false;
let isCountdown = false;

function startCount() {
  if (isCountdown) {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      clearInterval(counter);
      isCount = false;
      alert("Tiempo terminado");
      return;
    }

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }
  } else {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    if (
      hours === targetHours &&
      minutes === targetMinutes &&
      seconds === targetSeconds
    ) {
      clearInterval(counter);
      isCount = false;
      alert("Tiempo objetivo alcanzado");
    }
  }
  displayTime();
}

function play() {
  if (!isCount) {
    isCount = true;
    counter = setInterval(startCount, 1000);
  } else if (isCount) {
    alert("El reloj ya está contando");
  }
}

function stop() {
  if (isCount) {
    clearInterval(counter);
    isCount = false;
  } else if (!isCount) {
    alert("El reloj no ha empezado a contar ");
  }
}

function reiniciar() {
  clearInterval(counter);
  seconds = 0;
  minutes = 0;
  hours = 0;
  targetHours = 0;
  targetMinutes = 0;
  targetSeconds = 0;
  isCount = false;
  document.getElementById("horasI").value = "";
  document.getElementById("minutosI").value = "";
  document.getElementById("segundosI").value = "";
  document.getElementById("cuenta-atras").checked = false;

  displayTime();
}

function marcarTiempo() {
  isCountdown = document.getElementById("cuenta-atras").checked;
  targetHours = parseInt(document.getElementById("horasI").value) || 0;
  targetMinutes = parseInt(document.getElementById("minutosI").value) || 0;
  targetSeconds = parseInt(document.getElementById("segundosI").value) || 0;

  if (isCountdown) {
    hours = targetHours;
    minutes = targetMinutes;
    seconds = targetSeconds;
  }

  alert(
    `Tiempo marcado: ${targetHours}h ${targetMinutes}m ${targetSeconds}s ${
      isCountdown ? "Cuenta atrás" : "Cuenta adelante"
    }`
  );
}

//render your react application
function displayTime() {
  ReactDOM.render(
    <Home
      hoursV={hours}
      minutesV={minutes}
      secondsV={seconds}
      playButton={play}
      stopButton={stop}
      reiniciarButton={reiniciar}
      marcarTiempoButton={marcarTiempo}
    />,
    document.querySelector("#app")
  );
}
counter = setInterval(startCount, 1000);
isCount = true;
displayTime();
