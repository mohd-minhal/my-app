import { projects } from "../Static/data";

export function ProjectCard({ value }) {
  const id = value.value;
  const project = projects.find((project) => project.id === id);

  return (
    <div className="max-w-[30rem] mx-auto mb-4 shadow-lg border border-gray-300 rounded-md overflow-hidden">
      <div className="p-4 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.topics.slice(0, 4).map((topic, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
        <div className="mt-4 text-right">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;