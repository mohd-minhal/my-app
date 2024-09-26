export default function Hero() {
  function scroll(value) {
    document.querySelector(value).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col items-start justify-center h-screen px-6 md:px-16 text-white bg-gradient-to-r from-[#002541] to-[#003d5b]">
      <h1 className="font-bold text-5xl animate-blinker mb-6">Welcome</h1>
      <h2 className="text-2xl mb-8">Explore My Work</h2>
      <div className="flex flex-col border-l border-[#b3d7e0] pl-4 space-y-4 cursor-pointer">
        <h1
          className="hover:text-blue-400 transition transform hover:scale-105"
          onClick={() => scroll(".about-section")}
        >
          &#8213;&#8213; About
        </h1>
        <h1
          className="hover:text-blue-400 transition transform hover:scale-105"
          onClick={() => scroll(".live-projects")}
        >
          &#8213;&#8213; Live Projects
        </h1>
        <h1
          className="hover:text-blue-400 transition transform hover:scale-105"
          onClick={() => scroll(".project-header")}
        >
          &#8213;&#8213; Projects - GitHub
        </h1>
        <h1
          className="hover:text-blue-400 transition transform hover:scale-105"
          onClick={() => {
            const resumeClass = document.querySelector(".resume");
            resumeClass.style.right = resumeClass.style.right === "0%" ? "-50%" : "0%";
          }}
        >
          &#8213;&#8213; Resume
        </h1>
      </div>
    </div>
  );
}
