import React from "react";
import "./spinner.css";

const Spinner = props => (
  <div className={`${props.style} spinner-screen`}>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
