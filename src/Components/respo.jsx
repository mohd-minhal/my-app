import { projects } from "../Static/data";

export default function Respo() {
  return (
    <div>
      <p className="project-header text-3xl sm:text-4xl lg:text-5xl py-4 px-4 sm:px-12 lg:px-20 m-0">
        Side Projects{" "}
        <a
          href={projects[0].owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          &#128279;
        </a>
      </p>
      <ol className="project-list flex flex-col py-4 px-4 sm:px-12 lg:px-20 m-0">
        {projects.map((project, index) => (
          <li className="project-head flex justify-between items-center">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="project bg-transparent text-white border-none cursor-pointer text-lg sm:text-xl lg:text-2xl text-left px-4 sm:px-6 lg:px-8 rounded-full transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 w-full py-2 sm:py-3">
                {`${index + 1}. ${project.name.replace(/[-_]/g, " ")}`}
              </button>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
