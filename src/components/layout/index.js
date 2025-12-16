import React from "react";
import BottomLogo from "assets/images/Spin Stable Logo Final Artwork BLK and WTE/SPIN STABLE LOGO Outlined BLK_FINAL-01.png";
// Layout Component with background
const GameLayout = ({ children }) => {
  return (
    <div className="w-max-[100vw] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/GARDEN-BG-1.png')",
        }}
      ></div>

      {/* Top Left Corner - Client Logo Placeholder */}

      {/* Bottom Right Corner - Spin Stable Logo */}
      <div className="absolute bottom-4 right-4 z-20">
        <img
          src={BottomLogo}
          alt="Spin Stable Logo"
          className="size-28 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-4 items-center">
        {children}
      </div>
    </div>
  );
};

export default GameLayout;
