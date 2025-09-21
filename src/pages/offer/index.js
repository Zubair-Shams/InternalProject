import MainCard from "components/mainCard.js";
import React from "react";

const Offer = () => {
  return (
    <MainCard
      variant={"offer"}
      mainText="Your Offer today is"
      closingText="Not Loving this offer? Here's your chance to spin again"
      buttons={[
        {
          title: "Tap to accept offer",
          onClick: () => {},
          bgColor: "",
        },
        {
          title: "Tap to spin Again",
          onClick: () => {},
          bgColor: "",
        },
      ]}
    />
  );
};

export default Offer;
