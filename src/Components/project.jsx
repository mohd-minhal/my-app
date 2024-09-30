import { projects } from "../Static/data";
import { Window } from "./window";
import Draggable from "react-draggable";

function Projects() {
  return (
    <>
      <p className="text-5xl py-0 px-20 m-0 mb-10">Work</p>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mx-20">
        {projects.map(
          (project, index) =>
            project.description && (
              <Draggable>
                <div className="break-inside-avoid mb-10 cursor-move" key={index}>
                  <Window value={project.id} />
                </div>
              </Draggable>
            )
        )}
      </div>
    </>
  );
}

export default Projects;
