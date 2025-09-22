import MainCard from "components/mainCard.js";
import React from "react";
import burberryLogo from "assets/images/Burberry-logo-1.png";
import buttereflyBottomImg from "assets/images/Butterfly-4.png";
const WinDiscountOffer = () => {
  return (
    <MainCard
      variant={"dicountOffer"}
      heading="Glad you love today's offer of "
      subHeading="Glad you love today's offer of"
      description="To enjoy this offer, sign up now."
      offerLabel="20% OFF"
      brandLogo={burberryLogo}
      bottomImage={buttereflyBottomImg}
    />
  );
};

export default WinDiscountOffer;
