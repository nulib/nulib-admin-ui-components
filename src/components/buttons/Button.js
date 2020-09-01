import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  isCancel,
  isDanger,
  isPrimary,
  ...passThruProps
}) => {
  let btnClass = "";

  if (isCancel) {
    btnClass = "is-text";
  } else if (isDanger) {
    btnClass = "is-danger";
  } else if (isPrimary) {
    btnClass = "is-primary";
  }

  return (
    <button className={`button ${btnClass}`} {...passThruProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Cancel button */
  isCancel: PropTypes.bool,
  /** Indicates destructive action to follow */
  isDanger: PropTypes.bool,
  /** Primary call to action button */
  isPrimary: PropTypes.bool,
};
Button.defaultProps = {
  isCancel: false,
  isDanger: false,
  isPrimary: false,
};

export default Button;
