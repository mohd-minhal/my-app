const RotatingTextCircle = () => {
  const size = Math.min(window.innerWidth, 500);

  return (
    <div
      className="fixed right-0 bottom-0"
      style={{
        transform: "translate(40%, 40%)",
          pointerEvents: "none", // Invisible to mouse events
      }}
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
