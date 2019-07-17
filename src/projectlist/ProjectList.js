import React from "react";
import Singleproject from "../Singleprojectinfo/Singleproject";
import "./projectlist.css";

const ProyectList = props => {
  let listofprojects = props.projects;
  return (
    <div className="project-container">
      <div className="project-header">
        <span>Ongoing project</span>
        <span className="all-items"> All items</span>
      </div>
      <div className="projects-container">
        {listofprojects.map(list => {
          return <Singleproject props={list} key={list.id} />;
        })}
      </div>
    </div>
  );
};

export default ProyectList;
