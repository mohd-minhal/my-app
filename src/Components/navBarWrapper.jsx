import React, { useState, useEffect } from "react";
import NavBar from "../Components/navbar";

const NavBarWrapper = () => {
  const [width, setWidth] = useState("100%");
  const [top, setTop] = useState("0px");
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Adjusting the width based on viewport size
    const viewportWidth = window.innerWidth;
    let newWidth;

    if (viewportWidth >= 1024) { // Large screens (1024px and above)
      newWidth = Math.max(25, 100 - scrollY / 5); // Minimum width 25%
    } else if (viewportWidth >= 640) { // Medium screens (640px to 1023px)
      newWidth = Math.max(40, 100 - scrollY / 5); // Minimum width 40%
    } else {
      newWidth = "100%"; // For small screens
    }

    const newTop = Math.min(scrollY, viewportHeight - 150);

    console.log(newTop, newWidth);

    setWidth(`${newWidth}%`);
    setTop(`${newTop}px`);

    if (scrollY > lastScrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }

    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed left-0 z-[1000] backdrop-opacity-0 transition-all duration-300 ease-in-out mx-auto ${
          showNavBar ? "" : ""
        } hidden sm:block`}
        style={{
          width: width,
          top: top,
        }}
      >
        <NavBar />
      </div>
      <div
        className={`fixed left-0 z-[1000] transition-all duration-300 ease-in-out p-5 mx-auto ${
          showNavBar ? "translate-y-0" : "-translate-y-[200%]"
        } block sm:hidden`}
        style={{
          width: "100%",
        }}
      >
        <NavBar />
      </div>
    </>
  );
};

export default NavBarWrapper;
