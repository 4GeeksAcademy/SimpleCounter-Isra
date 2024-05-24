import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { CiPlay1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { FiRotateCcw } from "react-icons/fi";
import { FaUserClock } from "react-icons/fa";
import InputSet from "./InputSet";

const ButtonsComponent = (props) => {
  return (
    <div className="row">
      <div className=" col-lg-10 container-fluid d-flex justify-content-center mb-5 ">
        <Button
          color="success"
          text="Play"
          icono={<CiPlay1 className="me-2 fs-4 text-black" />}
          act={props.playButton}
        />
        <Button
          color="danger"
          text="Stop"
          icono={<CiStop1 className="me-2 fs-4 text-black" />}
          act={props.stopButton}
        />
        <Button
          color="light"
          text="Reiniciar"
          icono={<FiRotateCcw className="me-2 fs-4" />}
          act={props.reiniciarButton}
        />
        <Button
          color="warning"
          text="Marcar Tiempo"
          icono={<FaUserClock className="me-2 fs-4" />}
          act={props.marcarTiempoButton}
        />

        <InputSet />
      </div>
    </div>
  );
};

export default ButtonsComponent;
