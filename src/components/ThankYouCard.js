import React from "react";

const ThankYouCard = ({
  heading = "We'd like to say",
  subHeading = "THANK YOU",
  description = "We hope you enjoy a fun day of shopping with your offer",
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
        {heading}
      </p>

      {/* Main thank you text */}
      <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-4">
        {subHeading}
      </h2>

      {/* Closing text */}
      <p className="text-white text-lg font-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default ThankYouCard;
