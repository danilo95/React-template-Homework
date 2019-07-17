import React from "react";

import "./teaminfo.css";

const Teaminfo = props => {
  return (
    <div className="team-data-container">
      <img src={props.props.img} alt="team img" className="team-logo" />
      <span className="team-title">{props.props.footer}</span>
    </div>
  );
};

export default Teaminfo;
