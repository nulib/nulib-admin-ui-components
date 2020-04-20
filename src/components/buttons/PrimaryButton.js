import React from "react";
import PropTypes from "prop-types";
import "./Buttons.module.scss";

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
