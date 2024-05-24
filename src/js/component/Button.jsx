import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.color}  m-3 col-lg-2 col-md-6 col-sm-12`}
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
  icono: PropTypes.object,
  act: PropTypes.func,
};
export default Button;
