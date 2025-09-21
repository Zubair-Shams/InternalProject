import MainCard from "components/mainCard.js";
import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 w-5/6">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
        SPIN, WIN & SAVE
      </h1>

      {/* Thank You Card */}
      <MainCard
        introText="We'd like to say"
        mainText="THANK YOU"
        closingText="We hope you enjoy a fun day of shopping with your offer"
        backgroundColor="#FF8C00"
        borderColor="#F01414"
      />
    </div>
  );
};

export default ThankYou;
