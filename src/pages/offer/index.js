import MainCard from "components/mainCard.js";
import React from "react";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const Navigate = useNavigate();
  return (
    <MainCard
      variant={"offer"}
      subHeading="Your Offer today is"
      description="Not Loving this offer? Here's your chance to spin again"
      buttons={[
        {
          title: "Tap to accept offer",
          onClick: () => Navigate("/winDiscountOffer"),
        },
        {
          title: "Tap to spin Again",
          onClick: () => Navigate("/spinwheel"),
        },
      ]}
    />
  );
};

export default Offer;
