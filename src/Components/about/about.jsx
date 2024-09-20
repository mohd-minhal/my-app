let about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Duis aute irure dolor in reprehenderit in voluptate.`;

let current = `Excepteur sint occaecat cupidatat non proident, 
 sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function About() {
  return (
    <div className="about-section m-0 py-[9rem] px-[5rem] tracking-tight leading-[1.26] lg:text-[2rem] uppercase sm:text-[1.5rem]">
      <h1 className="text-[3rem] mb-[2rem]">About</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <p className="font-light">{about}</p>
        <p className="font-thin">{current}</p>
      </div>
    </div>
  );
}
