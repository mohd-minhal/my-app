import "./window.css"
import { projects } from "../../Static/data";

export function Window(value) {
  const id = value.value;

  const project = projects.find((project) => project.id === id);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column left">
            <span className="dot" style={{ background: '#ED594A' }}></span>
            <span className="dot" style={{ background: '#FDD800' }}></span>
            <span className="dot" style={{ background: '#5AC05A' }}></span>
          </div>
          <div className="column middle">
            <input type="text" value={project.html_url} />
          </div>
          <div className="column right">
            <div style={{ float: "right" }}>
              <button className="btn-window" onClick={handleClick} data-url={project.html_url}>
                &#128279;
              </button>
            </div>
          </div>
        </div>

        <div className="content">
          <p>{project.description}</p>
          <h4>{project.topics.slice(0, 4).join(', ')}</h4>
        </div>
      </div>
    </>);
}

const handleClick = (event) => {
  const htmlUrl = event.currentTarget.getAttribute('data-url');
  window.open(htmlUrl, '_blank');
};
