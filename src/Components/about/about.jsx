import "./about.css"

let about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Duis aute irure dolor in reprehenderit in voluptate 
 velit esse cillum dolore eu fugiat nulla pariatur.`

let current = `Excepteur sint occaecat cupidatat non proident, 
 sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default function About() {
  return (
    <div className="about-section">
      <p className="about">{about}</p>
      <p className="current">{current}</p>
    </div>
  )
}