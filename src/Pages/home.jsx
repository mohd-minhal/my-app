import About from "../Components/about";
import Hero from "../Components/hero";
import Respository from "../Components/respo";
import Projects from "../Components/project";
import NavBarWrapper from "../Components/navBarWrapper";

export default function Home() {
  return (
    <>
      <NavBarWrapper />
      <Hero />
      <About />
      <Projects />
      <Respository />
    </>
  );
}
