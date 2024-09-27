import { projects } from "../Static/data";
import { Window } from "./window";
import Draggable from "react-draggable";
import { useState } from "react";

export default function Respo() {
  const [showWindow, setShowWindow] = useState(Array(projects.length).fill(false));

  const _checkStatus = (value) => {
    const newArray = showWindow.slice();
    newArray[value] = !newArray[value];
    setShowWindow(newArray);
  };

  const data = projects.map((project, index) => {
    return (
      <Proj
        value={project.name}
        id={index}
        projectId={project.id}
        onProjectClick={() => handleClick(project.id, index)}
      />
    );
  });

  function Proj({ value, id, projectId, onProjectClick }) {
    return (
      <li className="project-head flex justify-between items-center h-12">
        <button
          className="project bg-transparent text-white border-none cursor-pointer text-2xl text-left h-12 px-8 rounded-full transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500"
          onClick={onProjectClick}
        >
          {id + 1}. {value}
        </button>
        {showWindow[id] && (
          <Draggable>
            <div>
              <Window value={projectId} />
            </div>
          </Draggable>
        )}
      </li>
    );
  }

  function handleClick(value, index) {
    _checkStatus(index);
  }

  return (
    <>
      <p className="project-header text-5xl py-0 px-20 m-0">
        Projects{" "}
        <a
          href={projects[0].owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          &#128279;
        </a>
      </p>
      <ol className="project-list flex flex-col py-8 px-20 m-0">{data}</ol>
    </>
  );
}