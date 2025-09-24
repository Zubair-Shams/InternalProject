import React, { useState, useRef, useEffect } from "react";

// You Win Modal Component - matches your design with wheel overlay
const YouWinModal = ({
  isVisible,
  onClose,
  discount = "20%",
  brand = "ECO",
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full h-full  overflow-hidden">
        <div className=" mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* <div
                className="text-8xl font-black leading-none"
                style={{
                  color: "#FFD700",
                  textShadow:
                    "4px 4px 0px #FF8C00, 8px 8px 0px #DC3545, -2px -2px 0px #FFA500",
                  fontFamily: "Arial Black, sans-serif",
                }}
              >
                YOU WIN
              </div> */}
              <svg width="500" height="250" viewBox="0 0 500 250">
                <defs>
                  <path
                    id="curve1"
                    d="M 50 180 A 200 100 0 0 1 450 180"
                    fill="none"
                  />
                </defs>

                {/* optional: debug path (remove stroke later) */}
                <path
                  d="M 50 180 A 200 100 0 0 1 450 180"
                  //   stroke="lightgray"
                  fill="none"
                />

                <text
                  fontSize="96" /* ~8xl */
                  fontWeight="bold"
                  fill="#FFD700"
                  //   stroke="maroon" /* outline */
                  strokeWidth="4"
                  fontFamily="Arial Black, sans-serif"
                  style={{
                    fontSize: "6.5rem", // similar to text-8xl
                    fontWeight: "900",
                    // fontFamily: "Arial Black, sans-serif",
                    fill: "#FFD700", // gold
                    textShadow:
                      "4px 4px 0px #FF8C00, 8px 8px 0px #DC3545, -2px -2px 0px #FFA500",
                  }}
                >
                  <textPath
                    href="#curve1"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    YOU WIN!
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm text-center">
              <div className="font-bold">SPIN AGAIN</div>
              <div className="text-xs">For a different offer</div>
            </div>
          </div>
        </div>

        {/* <button
          onClick={onClose}
          className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
        >
          Continue
        </button> */}
      </div>
    </div>
  );
};

export default YouWinModal;
