import React from "react";

const WinMessage = () => {
  return (
    <svg width="500" height="250" viewBox="0 0 500 250">
      <defs>
        <path id="curve1" d="M 50 180 A 200 100 0 0 1 450 180" fill="none" />
      </defs>
      <path d="M 50 180 A 200 100 0 0 1 450 180" fill="none" />
      <text
        fontSize="96" /* ~8xl */
        fontWeight="bold"
        fill="#FFD700"
        strokeWidth="4"
        fontFamily="Arial Black, sans-serif"
        style={{
          fontSize: "6.5rem", // similar to text-8xl
          fontWeight: "900",
          fill: "#FFD700", // gold
          textShadow:
            "4px 4px 0px #FF8C00, 8px 8px 0px #DC3545, -2px -2px 0px #FFA500",
        }}
      >
        <textPath href="#curve1" startOffset="50%" textAnchor="middle">
          YOU WIN!
        </textPath>
      </text>
    </svg>
  );
};

export default WinMessage;
