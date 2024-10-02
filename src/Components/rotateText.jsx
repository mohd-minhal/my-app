import React, { useEffect, useState } from "react";

const RotatingTextCircle = () => {
  const [size, setSize] = useState(Math.min(window.innerWidth, 700));

  useEffect(() => {
    const handleResize = () => {
      setSize(Math.min(window.innerWidth, 700));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed left-0 bottom-0 m-4"
      style={{ transform: "translate(-35%, 50%)", pointerEvents: "none" }}
    >
      <div
        className="relative"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          viewBox="0 0 300 300"
          className="absolute left-0 top-0 w-full h-full animate-rotate"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0 "
            />
          </defs>
          <circle cx="150" cy="150" r="75" fill="none" />
          <text fill="#000">
            <textPath xlinkHref="#circlePath">
              Always open to collaborate with other devs or designers
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RotatingTextCircle;
