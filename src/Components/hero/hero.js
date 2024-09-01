import "./hero.css";

export default function Hero() {

  return (
    <>
      <div className="hero">
        <h1 className="scroll">Scroll</h1>
        <div className="line">
          <h1 onClick={() => document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' })}>&#8213;&#8213;About</h1>
          <h1 onClick={() => document.querySelector('.live-projects').scrollIntoView({ behavior: 'smooth' })}>&#8213;&#8213;Live Projects</h1>
          <h1 onClick={() => document.querySelector('.project-header').scrollIntoView({ behavior: 'smooth' })}>&#8213;&#8213;Projects-Github</h1>
          <h1 onClick={() => {
            const resumeClass = document.querySelector('.resume');
            if (resumeClass.style.right === "0%") {
              resumeClass.style.right = "-50%";
            }
            else {
              resumeClass.style.right = "0%"
            }
          }
          }>&#8213;&#8213;Resume</h1>
        </div>
      </div>
    </>
  )
}