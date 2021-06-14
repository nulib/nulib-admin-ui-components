import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Notification = ({
  children,
  className,
  isCentered,
  isDanger,
  isInfo,
  isPrimary,
  isSuccess,
  isWarning,
  ...restProps
}) => {
  return (
    <div
      className={classNames(["notification", "is-light", ...className], {
        "is-danger": isDanger,
        "is-info": isInfo,
        "is-primary": isPrimary,
        "is-success": isSuccess,
        "is-warning": isWarning,
        "has-text-centered": isCentered,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

Notification.propTypes = {
  /** Notification content */
  children: PropTypes.node.isRequired,
  /** Extra classes */
  className: PropTypes.string,
  /** Center notification content */
  isCentered: PropTypes.bool,
  /** Danger tag */
  isDanger: PropTypes.bool,
  /** General, informational tag */
  isInfo: PropTypes.bool,
  /** Primary color tag */
  isPrimary: PropTypes.bool,
  /** Success tag */
  isSuccess: PropTypes.bool,
  /** Warning  */
  isWarning: PropTypes.bool,
};
Notification.defaultProps = {
  className: "",
  isDanger: false,
  isInfo: false,
  isPrimary: false,
  isSuccess: false,
  isWarning: false,
};

export default Notification;
