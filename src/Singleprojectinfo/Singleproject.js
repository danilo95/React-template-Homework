import React from "react";

import "./singleproject.css";

const Singleproject = props => {
  return (
    <div className="single-container">
      <div className="project-title">
        <div className="project-data-container">
          <img src={props.props.img} alt="Logo" className="team-logo" />
          <span className="team-title"> {props.props.name}</span>
        </div>
      </div>
      <div className="project-description">
        <span>{props.props.description}</span>
      </div>
      <div className="project-extrainfo">
        <span className="project-extrainfo-footer">{props.props.footer}</span>
        <span className="project-date">{props.props.date}</span>
      </div>
    </div>
  );
};

export default Singleproject;
