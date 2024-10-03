import UnderlineHover from "./underline";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-wrap gap-[5px] justify-center px-8 sm:px-12 md:px-16">
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
            <pathx
              d="M122.5 1.5C78.5-2.2 1.6 6.7 6 39.5c5.5 41 90 40 158.5 44 32 1.9 201 12 178.5-38.5C325 4.5 139 6 120.5 6S-3.5 2.5 1 35.5s126 52.5 178.5 54S347 99 347 35.5"
              stroke="currentColor"
              className="stroke-current"
              style={{ strokeDasharray: "1259px", strokeDashoffset: "0px" }}
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
      </div>
    </div>
  );
}
