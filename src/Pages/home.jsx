import About from "../Components/about";
import NavBar from "../Components/navbar";
import Hero from "../Components/hero";
import Projects from "../Components/respo/respo"
import Resume from "../Components/resume/resume";

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
