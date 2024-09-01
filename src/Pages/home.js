import About from "../Components/about/about.js";
import NavBar from "../Components/navbar/navbar.js";
import Hero from "../Components/hero/hero.js";
import Projects from "../Components/respo/respo.js"
import Resume from "../Components/resume/resume.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <Resume />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
