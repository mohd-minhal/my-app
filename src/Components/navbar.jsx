import UnderlineHover from "./underline";

export default function NavBar() {
  const nav = [
    { name: "John Doe" },
    { name: "India" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
      svg: "src/Static/linkedin.svg",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
      svg: "src/Static/instagram.svg",
    },
    { name: "Contact", link: "Contact", svg: "src/Static/ask.svg" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-[1000] shadow flex flex-col sm:flex-row justify-between items-center py-4 px-8">
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Navigation items (John Doe, India) */}
        <ul className="flex space-x-8 items-center">
          {nav.slice(0, 2).map((value, index) => (
            <li className="text-lg font-semibold" key={index}>
              {value.name.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Social media items */}
        <ul className="flex space-x-4 mt-0 sm:mt-0">
          {nav.slice(2).map((value, index) => (
            <li key={index + 2} className="relative group flex items-center">
              <a
                className="flex items-center text-lg font-semibold transition-all duration-200"
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <UnderlineHover>
                  <img
                    src={value.svg}
                    alt={value.name}
                    className="inline h-12 transition duration-300 hover:filter hover:invert-[0.5] hover:sepia hover:saturate-[5] hover:hue-rotate-[175deg]"
                  />
                </UnderlineHover>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
