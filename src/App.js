import React from "react";
import NavBar from "./navbar/NavBar";
import GraphContent from "./GraphContent/GraphContent";
import ProjectList from "./projectlist/ProjectList";
import Commentlist from "./Commentlist/Commentlist";
import TeamList from "./Teamlist/TeamList";
import infotoshow from "./const/Defauldata"
import "./app.css";


let data = infotoshow.data;
let projects = infotoshow.projects;
let navalues = infotoshow.navalues;
let graphvalues=infotoshow.graph;
function App() {
  return (
    <>
      <NavBar navalues={navalues} />
      <div className="container">
        <div className="panel">
          <ProjectList projects={projects} />
          <Commentlist data={data} />
        </div>
        <div className="aside">
          <GraphContent graphvalues={graphvalues}/>
          <TeamList projects={projects} />
        </div>
      </div>
    </>
  );
}

export default App;
