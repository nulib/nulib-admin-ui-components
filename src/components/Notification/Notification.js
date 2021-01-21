import React from "react";
import PropTypes from "prop-types";

const Notification = ({ children, className, ...props }) => (
  <p {...props} className={`notification ${props}`}>
    <button className="delete"></button>
    {children}
  </p>
);

let notificationClass = "";

if (isText) {
  notificationClass = "is-text";
} else if (isDanger) {
  notificationClass = "is-danger";
} else if (isPrimary) {
  notificationClass = "is-primary";
} else if (isLight) {
  notificationClass = "is-light";
}

Notification.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Extra classes */
  className: PropTypes.string,
  /** Danger notification */
  isDanger: PropTypes.bool,
  /** Warning notification */
  isWarning: PropTypes.bool,
  /** Info notification */
  isInfo: PropTypes.bool,
};
Notification.defaultProps = {
  className: "",
  isDanger: false,
  isWarning: false,
  isInfo: false,
};

export default Notification;
