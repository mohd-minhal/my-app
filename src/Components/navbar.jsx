import UnderlineHover from "./underline";
import { useEffect } from "react";

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

  useEffect(() => {
    const navbarItems = document.querySelectorAll(".nav-item");
    setTimeout(() => {
      navbarItems.forEach((item) => {
        item.classList.remove("opacity-0", "-translate-y-5");
        item.classList.add("opacity-100", "translate-y-0");
      });
    }, 1000);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000]  flex flex-col sm:flex-row justify-between items-center py-4 px-8">
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Navigation items (John Doe, India) */}
        <ul className="flex space-x-8 items-center">
          {nav.slice(0, 2).map((value, index) => (
            <li
              className="nav-item sm:text-lg md:text-md text-sm font-semibold opacity-0 -translate-y-5 transition-all duration-500 ease-in-out"
              key={index}
            >
              {value.name.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Social media items */}
        <ul className="flex space-x-4 mt-0">
          {nav.slice(2).map((value, index) => (
            <li
              key={index + 2}
              className="nav-item relative group flex items-center opacity-0 -translate-y-5 transition-all duration-500 ease-in-out"
            >
              <a
                className="flex items-center transition-all duration-200"
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <UnderlineHover>
                  <img
                    src={value.svg}
                    alt={value.name}
                    className="inline font-bold h-6 sm:h-12 transition duration-300"
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
