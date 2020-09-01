import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, isDanger, ...passThruProps }) => {
  return (
    <button
      className={`button ${isDanger ? "is-danger" : ""}`}
      {...passThruProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Indicates destructive action to follow */
  isDanger: PropTypes.bool,
};
Button.defaultProps = {
  isDanger: false,
};

export default Button;
