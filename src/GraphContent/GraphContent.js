import React from "react";

import "./graphcontent.css";

const GraphContent = () => {
  return (
    <div className="graph-container">
      <div className="graph-header">
        <span>XX index</span>
      </div>
      <div className="grap-info">
        <img
          src="https://files.slack.com/files-pri/TAWQZDNSG-FLH3MNTJT/captura.png"
          className="img-graph zoom"
          alt="graph"
        />
        <div className="graph-info-container">
          <div className="graph-info">
            <div className="graph-title">
              <span className="title-container">Personal</span>
            </div>
            <div className="graph-value">156</div>
          </div>
          <div className="divider" />
          <div className="graph-info">
            <div className="graph-title">
              <span className="title-container">Team</span>
            </div>
            <div className="graph-value">156</div>
          </div>
          <div className="divider" />
          <div className="graph-info">
            <div className="graph-title">
              <span className="title-container">Departament</span>
            </div>
            <div className="graph-value">156</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContent;
