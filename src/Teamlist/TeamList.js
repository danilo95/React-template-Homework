import React from "react";
import Teaminfo from "../Teaminfo/TeamInfo";

import "./teamlist.css";

const TeamList = props => {
  let listofprojects = props.projects;
  return (
    <div className="team-container">
      <div className="team-header">
        <span>team</span>
      </div>
      <div className="teams-info-container">
        {listofprojects.map(list => {
          return <Teaminfo props={list} key={list.id} />;
        })}
      </div>
    </div>
  );
};

export default TeamList;
