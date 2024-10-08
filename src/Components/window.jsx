import { projects } from "../Static/data";

export function Window(value) {
  const id = value.value;

  const project = projects.find((project) => project.id === id);

  return (
    <div className="max-w-[30rem] mx-auto mb-4">
      <div className="border-5 border-gray-200 rounded-t-md">
        <div className="flex items-center p-2 bg-gray-200 rounded-t-md">
          <div className="flex space-x-2">
            <span className="dot bg-red-500 h-3 w-3 rounded-full"></span>
            <span className="dot bg-yellow-400 h-3 w-3 rounded-full"></span>
            <span className="dot bg-green-500 h-3 w-3 rounded-full"></span>
          </div>
          <div className="flex-grow px-4">
            <input
              type="text"
              value={project.html_url}
              className="w-full rounded-md border-none bg-white h-6 px-2 text-gray-600"
              readOnly
            />
          </div>
          <div className="flex-none">
            <button
              className="btn-window text-xl bg-transparent border-none cursor-pointer"
              onClick={handleClick}
              data-url={project.html_url}
            >
              &#128279;
            </button>
          </div>
        </div>

        <div className="p-2 bg-blue-100">
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.topics.slice(0, 4).map((topic, index) => (
              <span
                key={index}
                className="bg-white text-gray-800 rounded-full px-3 py-1 text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const handleClick = (event) => {
  const htmlUrl = event.currentTarget.getAttribute("data-url");
  window.open(htmlUrl, "_blank");
};
