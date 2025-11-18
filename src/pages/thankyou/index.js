import MainCard from "components/mainCard.js";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ThankYou = () => {
  // const navigate = useNavigate();
  const currentPrize = useSelector((state) => state.commonState.currentPrize);
  // const userData = useSelector((state) => state.commonState.userData);

  // Get offer information for display
  const getOfferText = () => {
    if (currentPrize) {
      const brand = currentPrize.brand || "";
      const discount = currentPrize.discount || "";
      return `${brand} ${discount}`;
    }
    return "your offer";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 w-5/6">
      <MainCard
        variant={"thankyou"}
        heading="We'd like to say"
        subHeading="THANK YOU"
        description={`Congratulations! You won ${getOfferText()}. We hope you enjoy a fun day of shopping with your offer!`}
        backgroundColor="#FF8C00"
        borderColor="#F01414"
      />
    </div>
  );
};

export default ThankYou;
