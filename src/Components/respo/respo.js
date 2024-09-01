import "./respo.css"
import { projects } from "../../Static/data.js"
import { Window } from "../window/window.js"
import Draggable from 'react-draggable';
import { useState } from "react"

export default function Respo() {
  const [showWindow, setShowWindow] = useState(Array(projects.length).fill(false));

  const _checkStatus = (value) => {
    const newArray = showWindow.slice();
    if (newArray[value]) newArray[value] = false
    else newArray[value] = true
    setShowWindow(newArray);
  }

  const data = projects.map((project, index) => {
    return <Proj value={project.name} id={index} projectId={project.id} onProjectClick={() => handleClick(project.id, index)} />;
  })


  function Proj({ value, id, projectId, onProjectClick }) {
    return (
      <li className="project-head">
        <button className="project" onClick={onProjectClick}>
          {id+1}. {value}
        </button>
        {showWindow[id] && <Draggable><div><Window value={projectId} /></div></Draggable>}
      </li>
    );
  }

  function handleClick(value, index) {
    _checkStatus(index);
  }

  return (
    <>
      <p className="project-header">Projects <a href={projects[0].owner.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>&#128279;</a></p>
      <ol className="project-list">{data}</ol>
    </>
  )
}