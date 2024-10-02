import UnderlineHover from "./underline";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center h-screen px-6 md:px-16">
      <h1 className="text-2xl font-fredoka-300 m-4 transition-all duration-300 md:text-5xl sm:text-3xl">
        <span> Developer Specializing in </span>
        <span> Interactive Experiences </span>
        <span> Available for Freelance </span>
        <br></br>
        <span> Say </span>
        <span>
          <UnderlineHover>
            <a
              href="mailto:hello@pauloferreirajorge.com"
              className="text-primary hover:underline"
            >
              hello@johndoeindia.com
            </a>
          </UnderlineHover>
        </span>
      </h1>
    </div>
  );
}
