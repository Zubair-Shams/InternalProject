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
          title: "Tap to spin Again",
          classes: "bg-primary text-2xl font-semibold h-14 py-2 w-[260px]",
          onClick: () => Navigate("/spinwheel"),
        },
        {
          title: "Tap to accept offer",
          classes: "bg-darkGreen text-2xl font-semibold h-14 py-2 w-[260px]",
          onClick: () => Navigate("/register"),
        },
      ]}
    />
  );
};

export default Offer;
