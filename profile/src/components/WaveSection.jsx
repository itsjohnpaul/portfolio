import React from "react";

export default function WaveSection() {
  return (
    <div className="relative bg-blue-700 w-full h-40 overflow-hidden">
      {/* Responsive SVG wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1d4ed8" // same as bg-blue-700
          d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,240C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
