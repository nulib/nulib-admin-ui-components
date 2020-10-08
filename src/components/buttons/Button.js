import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className,
  isDanger,
  isLight,
  isPrimary,
  isText,
  type,
  ...passThruProps
}) => {
  let btnClass = "";

  if (isText) {
    btnClass = "is-text";
  } else if (isDanger) {
    btnClass = "is-danger";
  } else if (isPrimary) {
    btnClass = "is-primary";
  } else if (isLight) {
    btnClass = "is-light";
  }

  btnClass = `${btnClass} ${className || ""}`;

  return (
    <button className={`button ${btnClass}`} type={type} {...passThruProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Extra classes */
  className: PropTypes.string,
  /** Indicates destructive action to follow */
  isDanger: PropTypes.bool,
  /** Light, secondary button */
  isLight: PropTypes.bool,
  /** Primary call to action button */
  isPrimary: PropTypes.bool,
  /** Text button */
  isText: PropTypes.bool,
  /** Type of button */
  type: PropTypes.string,
};
Button.defaultProps = {
  className: "",
  isDanger: false,
  isLight: false,
  isPrimary: false,
  isText: false,
  type: "button",
};

export default Button;
