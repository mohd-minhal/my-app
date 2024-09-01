export default function Hero() {
  return (
    <>
      <div className="m-0 py-[4rem] px-[15rem] text-[#b3d7e0] bg-[#303030]">
        <h1 className="m-0 font-thin">Scroll</h1>
        <div className="ml-[35px] border-l border-[#b3d7e0] h-[300px] cursor-pointer animate-blinker">
          <h1
            onClick={() =>
              document
                .querySelector(".about-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            &#8213;&#8213;About
          </h1>
          <h1
            onClick={() =>
              document
                .querySelector(".live-projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            &#8213;&#8213;Live Projects
          </h1>
          <h1
            onClick={() =>
              document
                .querySelector(".project-header")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            &#8213;&#8213;Projects-Github
          </h1>
          <h1
            onClick={() => {
              const resumeClass = document.querySelector(".resume");
              if (resumeClass.style.right === "0%") {
                resumeClass.style.right = "-50%";
              } else {
                resumeClass.style.right = "0%";
              }
            }}
          >
            &#8213;&#8213;Resume
          </h1>
        </div>
      </div>
    </>
  );
}
