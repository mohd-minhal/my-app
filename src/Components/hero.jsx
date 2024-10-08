import UnderlineHover from "./underline";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");

    const to = gsap.fromTo(
      letters,
      { opacity: 0, y: 100, rotation: 10 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power3.inOut",
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split(" ").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char + "⠀"}
      </span>
    ));
  };

  return (
    <div className="h-screen flex flex-col justify-center  px-8 sm:px-12 md:px-16">
      <div className="flex flex-wrap gap-[5px] justify-center">
        <h1 className="font-fredoka-300 text-2xl transition-all duration-300 md:text-5xl sm:text-3xl">
          Developer Specializing in
        </h1>
        <div className="relative flex flex-col items-center">
          <h1 className="text-2xl transition-all duration-300 md:text-5xl sm:text-3xl font-fredoka-400">
            Interactive
          </h1>
          <svg
            className="absolute top-0 left-0"
            fill="none"
            viewBox="0 0 348 92"
          >
            <path
              d="M122.5 1.5C78.5-2.2 1.6 6.7 6 39.5c5.5 41 90 40 158.5 44 32 1.9 201 12 178.5-38.5C325 4.5 139 6 120.5 6S-3.5 2.5 1 35.5s126 52.5 178.5 54S347 99 347 35.5"
              stroke="currentColor"
              className="stroke-current animate-drawLine"
              style={{ strokeDasharray: "1259px", strokeDashoffset: "1259px" }}
            />
          </svg>
        </div>
        <h1 className="font-fredoka-400 text-2xl transition-all duration-300 md:text-5xl sm:text-3xl">
          Experiences
        </h1>
        <h1 className="text-2xl transition-all duration-300 md:text-5xl sm:text-3xl">
          <span className="font-fredoka-300">Available for </span>
          <span className="font-fredoka-400">Freelance</span>
        </h1>
        <h1 className="font-fredoka-300 text-2xl transition-all duration-300 md:text-5xl sm:text-3xl">
          Say{" "}
        </h1>
        <UnderlineHover>
          <a
            href="mailto:hello@johndoeindia"
            className="text-primary hover:underline font-fredoka-700 text-2xl transition-all duration-300 md:text-5xl sm:text-3xl"
          >
            hello@johndoeindia
          </a>
        </UnderlineHover>
        <p className="absolute bottom-10 w-3/5 sm:w-2/5 font-medium mb-[0.15em] tracking-wider last:mb-0 text-sm">
          {splitText(
            "Im a Software Developer who can create specialized websites with Spring and React"
          )}
          <br />
          {splitText(
            "TL;DR: I aim to turn visionary ideas into functional realities that elevate user experiences."
          )}
        </p>
      </div>
    </div>
  );
}
