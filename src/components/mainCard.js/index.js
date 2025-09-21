import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";

const MainCard = ({
  introText = "We'd like to say",
  mainText = "THANK YOU",
  closingText = "We hope you enjoy a fun day of shopping with your offer",
  variant,
  children,
}) => {
  return (
    <div>
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
        SPIN, WIN & SAVE
      </h1>
      <div
        className="rounded-lg p-6 shadow-lg max-w-md mx-auto border-solid border-8 relative"
        style={{
          backgroundColor: "#FF8C00",
          borderColor: `#F01414`,
        }}
      >
        <img
          src={ButterflyLeft}
          alt="butterfly-left"
          className="absolute -top-7 -left-4 size-20"
        />

        {/* Intro text */}
        {variant !== "register" ? (
          <>
            {" "}
            <p className="text-white text-lg font-medium text-center mb-4">
              {introText}
            </p>
            {/* Main thank you text */}
            <h2 className="text-black text-4xl md:text-6xl font-bold text-center mb-4">
              {mainText}
            </h2>
            {/* Closing text */}
            <p className="text-white text-lg font-medium text-center">
              {closingText}
            </p>{" "}
          </>
        ) : (
          ""
        )}
        {variant === "register" ? children : ""}
      </div>
    </div>
  );
};

export default MainCard;
