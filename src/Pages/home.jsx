import About from "../Components/about/about";
import NavBar from "../Components/navbar/navbar";
import Hero from "../Components/hero/hero";
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
