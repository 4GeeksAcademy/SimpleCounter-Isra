import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.color} col-2 me-3 my-5`}
      onClick={props.act}
    >
      {props.icono}
      {props.text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  icono: PropTypes.string,
  act: PropTypes.func,
};
export default Button;
