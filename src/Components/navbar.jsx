export default function NavBar() {
  const nav = [
    { name: "John Doe" },
    { name: "India" },
    { name: "LinkedIn", link: "https://www.linkedin.com/", svg: "In" },
    { name: "Instagram", link: "https://www.instagram.com/", svg: "I" },
    { name: "Contact", link: "Contact", svg: "C" }
  ];

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-8 sm:px-12">
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Navigation items (John Doe, India) */}
        <ul className="flex space-x-8 items-center">
          {nav.slice(0, 2).map((value, index) => (
            <li className="text-lg font-semibold" key={index}>
              {value.name.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Social media items - keeping icons in one line */}
        <ul className="flex space-x-4 mt-0 sm:mt-0">
          {nav.slice(2).map((value, index) => (
            <li key={index + 2} className="relative group flex items-center">
              <a
                className="flex items-center text-lg font-semibold transition-all duration-200 hover:text-blue-500"
                href={value.link}
              >
                {/* Display symbol or full name based on screen size */}
                <span className="sm:hidden">{value.svg || value.name}</span>
                <span className="hidden sm:inline">{value.name.toUpperCase()}</span>
              </a>
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
