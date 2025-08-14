import React from "react";

const SpinLoader = ({ size = "w-12 h-12", className = "" }) => {
  return (
    <div
      className={`relative ${size} aspect-square grid place-items-center ${className} animate-spin-slow`}
    >
      <div className="absolute inset-0 border-[6px] border-t-red-500 border-r-red-500 border-b-transparent border-l-transparent rounded-full mix-blend-darken animate-spin-fast" />
      <div className="absolute inset-0 border-[6px] border-b-blue-500 border-l-blue-500 border-t-transparent border-r-transparent rounded-full mix-blend-darken animate-spin-fast-reverse" />
    </div>
  );
};

export default SpinLoader;
