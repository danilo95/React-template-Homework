import React from "react";
import "./graphcontent.css";
import GraphValues from "../GraphValues/GraphValues";
const GraphContent = props => {
  let datagraph = props.graphvalues;
  return (
    <div className="graph-container">
      <div className="graph-header">
        <span>XX index</span>
      </div>
      <div className="grap-info-top">
        <img
          src="https://files.slack.com/files-pri/TAWQZDNSG-FLH3MNTJT/captura.png"
          className="img-graph zoom"
          alt="graph"
        />
        <div className="graph-info-container">
          {datagraph.map(values => {
            return <GraphValues props={values} key={values.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphContent;
