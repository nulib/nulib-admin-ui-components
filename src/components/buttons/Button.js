import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  className,
  isDanger,
  isLight,
  isPrimary,
  isText,
  type,
  ...restProps
}) => {
  return (
    <button
      className={classNames(["button", ...className], {
        "is-text": isText,
        "is-danger": isDanger,
        "is-primary": isPrimary,
        "is-light": isLight,
      })}
      type={type}
      {...restProps}
    >
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
