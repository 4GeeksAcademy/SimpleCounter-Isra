import React from "react";
import Counter from "./Counter";
import "../index.js";
import ButtonsComponent from "./ButtonsComponent.jsx";

//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <Counter
        hoursV={props.hoursV}
        minutesV={props.minutesV}
        secondsV={props.secondsV}
      />
      <h3 className="mt-5">Controladores:</h3>
      <ButtonsComponent
        playButton={props.playButton}
        stopButton={props.stopButton}
        reiniciarButton={props.reiniciarButton}
        marcarTiempoButton={props.marcarTiempoButton}
      />
    </div>
  );
};

export default Home;
