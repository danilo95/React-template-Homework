import React from "react";
import "./graphvalues.css";

const GraphValues = props => {
  return (
    <>
      <div className="graph-info">
        <div className="graph-title">
          <span className="title-container">{props.props.title}</span>
        </div>
        <div className="graph-value">{props.props.value}</div>
      </div>
      <div className="divider" />
    </>
  );
};

export default GraphValues;
