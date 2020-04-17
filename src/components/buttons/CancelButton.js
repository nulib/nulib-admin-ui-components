import React from "react";
import "./button.scss";

const CancelButton = (props) => {
  return (
    <button className={`button is-text`} {...props}>
      Cancel
    </button>
  );
};

export default CancelButton;
