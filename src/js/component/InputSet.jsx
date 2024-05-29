import React, { useState } from "react";
import PropTypes from "prop-types";

const InputSet = () => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "seconds" || e.target.name === "minutes") {
      if (e.target.value > 59) {
        setError(e.target.name);
        alert(`No puede ser mayor a 59 y hemos recibido: ${e.target.value}`);
        e.target.value = "";
        return false;
      }
    }
    if (e.target.value > 23) {
      setError(e.target.name);
      alert(`No puede ser mayor a 23 y hemos recibido: ${e.target.value}`);
      e.target.value = "";
      return false;
    }
    setError("");
  };

  return (
    <div className=" d-flex col-lg-6  col-sm-12 ">
      <input
        type="number"
        className={`form-control mx-2 my-5 ${
          error == "hours" ? "border border-danger" : ""
        }`}
        id="horasI"
        placeholder="h"
        aria-label="horas"
        name="hours"
        onChange={handleChange}
        min="1"
        max="23"
      />

      <input
        type="number"
        className={`form-control mx-2 my-5 ${
          error == "minutes" ? "border border-danger" : ""
        }`}
        id="minutosI"
        placeholder="m"
        aria-label="minutos"
        name="minutes"
        onChange={handleChange}
        min="0"
        max="59"
      />

      <input
        type="number"
        className={`form-control mx-2 my-5 ${
          error == "seconds" ? "border border-danger" : ""
        }`}
        id="segundosI"
        placeholder="s"
        aria-label="segundos"
        name="seconds"
        onChange={handleChange}
        min="0"
        max="59"
      />

      <div className="form-check mx-2 my-5">
        <label className="form-check-label" htmlFor="cuenta-atras">
          Cuenta atrás
        </label>
        <input type="checkbox" id="cuenta-atras" />
      </div>
    </div>
  );
};

export default InputSet;
