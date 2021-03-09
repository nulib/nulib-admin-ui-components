import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Tag = ({
  children,
  className,
  isDanger,
  isInfo,
  isPrimary,
  isWarning,
  ...restProps
}) => {
  return (
    <span
      className={classNames(["tag", "is-light", "is-uppercase", ...className], {
        "is-danger": isDanger,
        "is-info": isInfo,
        "is-primary": isPrimary,
        "is-warning": isWarning,
      })}
      {...restProps}
    >
      {children}
    </span>
  );
};

Tag.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Extra classes */
  className: PropTypes.string,
  /** Danger tag */
  isDanger: PropTypes.bool,
  /** General, informational tag */
  isInfo: PropTypes.bool,
  /** Primary color tag */
  isPrimary: PropTypes.bool,
  /** Warning  */
  isWarning: PropTypes.bool,
};
Tag.defaultProps = {
  className: "",
  isDanger: false,
  isInfo: false,
  isPrimary: false,
  isWarning: false,
};

export default Tag;
