import React from "react";
import spinnerImage from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      src={spinnerImage}
      alt="Loading"
    />
  );
};

export default Spinner;
