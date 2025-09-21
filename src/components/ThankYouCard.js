import React from "react";

const ThankYouCard = ({
  introText = "We'd like to say",
  mainText = "THANK YOU",
  closingText = "We hope you enjoy a fun day of shopping with your offer",
  backgroundColor = "#FF8C00",
  borderColor = "#F01414",
}) => {
  return (
    <div
      className="rounded-lg p-6 shadow-lg max-w-md mx-auto"
      style={{
        backgroundColor: backgroundColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      {/* Intro text */}
      <p className="text-white text-lg font-medium text-center mb-4">
        {introText}
      </p>

      {/* Main thank you text */}
      <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-4">
        {mainText}
      </h2>

      {/* Closing text */}
      <p className="text-white text-lg font-medium text-center">
        {closingText}
      </p>
    </div>
  );
};

export default ThankYouCard;
