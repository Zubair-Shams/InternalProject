import React from "react";
import WinImage from "assets/images/youwin.png";
const WinMessage = () => {
  return (
    <img
      src={WinImage}
      alt="you-win"
      style={{
        animation: "bounceIn 0.8s ease-out",
      }}
    />
  );
};

export default WinMessage;
