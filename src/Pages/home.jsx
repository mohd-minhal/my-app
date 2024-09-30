import About from "../Components/about";
import NavBar from "../Components/navbar";
import Hero from "../Components/hero";
import Respository from "../Components/respo";
import Projects from "../Components/project";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Respository />
    </>
  );
}
