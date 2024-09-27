import UnderlineHover from "./underline";

let about = `I enjoy working with digital agencies and creative individuals. 
My expertise relies on animations and interactivity.`;

let current = `Currently I’m freelancing.
Always open to collaborate with other devs or designers. Feel free to `;

export default function About() {
  return (
    <div className="about-section m-0 py-[9rem] px-[5rem] tracking-tight leading-[1.26] text-[1rem] uppercase sm:text-[1.5rem]">
      <h1 className="text-[3rem] mb-[2rem]">About</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <p className="font-light">{about}</p>
        <p className="font-thin">
          {current}
          <a href="mailto:mariosmaselli@gmail.com">
            <UnderlineHover>contact me</UnderlineHover>
          </a>
        </p>
      </div>
    </div>
  );
}
