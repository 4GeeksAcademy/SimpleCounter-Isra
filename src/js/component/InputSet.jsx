import React from "react";
import PropTypes from "prop-types";

const InputSet = () => {
  return (
    <div className="container d-flex justify-content-end">
      <input
        type="number"
        className="form-control mx-2 my-5 "
        id="horasI"
        placeholder="h"
        aria-label="horas"
        min="1"
        max="23"
      />

      <input
        type="number"
        className="form-control mx-2 my-5"
        id="minutosI"
        placeholder="m"
        aria-label="minutos"
        min="0"
        max="59"
      />

      <input
        type="number"
        className="form-control mx-2 my-5"
        id="segundosI"
        placeholder="s"
        aria-label="segundos"
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
