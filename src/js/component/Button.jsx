import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-12">
      <button
        className={`btn btn-${props.color}  m-3 px-4 `}
        onClick={props.act}
      >
        {props.icono}
        {props.text}
      </button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  icono: PropTypes.object,
  act: PropTypes.func,
};
export default Button;
