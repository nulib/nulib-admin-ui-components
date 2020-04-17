import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const PrimaryButton = ({ children, ...passThruProps }) => {
  return (
    <button className="button is-primary" {...passThruProps}>
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
