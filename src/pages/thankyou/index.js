import MainCard from "components/mainCard.js";
import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 w-5/6">
      <MainCard
        variant={"thankyou"}
        heading="We'd like to say"
        subHeading="THANK YOU"
        description="We hope you enjoy a fun day of shopping with your offer"
        backgroundColor="#FF8C00"
        borderColor="#F01414"
      />
    </div>
  );
};

export default ThankYou;
