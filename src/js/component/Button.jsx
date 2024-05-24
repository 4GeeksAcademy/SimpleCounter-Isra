import React from "react";
import PropTypes from "prop-types";
import { CiPlay1 } from "react-icons/ci";

const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.color}  mx-3 my-5 col-lg-2 col-md-6 col-sm-12`}
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
