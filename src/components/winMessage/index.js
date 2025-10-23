import React from "react";
import WinImage from "assets/images/youwin.png";
const WinMessage = () => {
  return (
    <img
      src={WinImage}
      alt="you-win"
      className="w-full"
      style={{
        animation: "bounceIn 0.8s ease-out",
      }}
    />
  );
};

export default WinMessage;
