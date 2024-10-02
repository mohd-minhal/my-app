import Hero from "../Components/hero";
import Respository from "../Components/respo";
import Projects from "../Components/project";
import NavBarWrapper from "../Components/navBarWrapper";
import RotatingTextCircle from "../Components/rotateText";

export default function Home() {
  return (
    <>
      <NavBarWrapper />
      <Hero />
      <RotatingTextCircle />
      <Projects />
      <Respository />
    </>
  );
}
