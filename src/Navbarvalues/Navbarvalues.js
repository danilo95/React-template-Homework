import React from "react";
import "./navbarvalues.css";

const Navbarvalues = props => {
  return (
    <>
  <div className="values-container">
              <span className="values-title">{props.props.title}</span>
              <span className="value">
              {props.props.value}<span className="subtitle">{props.props.subvalue}</span>
              </span>
            </div>
            <div className="divider" />
    </>
  );

};

export default Navbarvalues;