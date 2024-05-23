import React from "react";
import Counter from "./Counter";
import "../index.js";

//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <Counter
        hoursV={props.hoursV}
        minutesV={props.minutesV}
        secondsV={props.secondsV}
      />
    </div>
  );
};

export default Home;
