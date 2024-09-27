import React from 'react';

const UnderlineHover = ({ children }) => {
  return (
    <span className="relative inline-block group font-semibold transition-all duration-200">
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </span>
  );
};

export default UnderlineHover