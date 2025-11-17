import MainCard from "components/mainCard.js";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButterflyBottom from "assets/images/Butterfly-7.png";
import ButterflyRight from "assets/images/Butterfly-2.png";

const Offer = () => {
  const Navigate = useNavigate();
  const { discount, logo } = useSelector(
    (state) => state.commonState.currentPrize
  );
  const description = "Not Loving this offer? Here's your chance to spin again";
  const offerSplitIndex = description.indexOf("offer?") + "offer?".length;
  const descriptionPart1 =
    offerSplitIndex > 0
      ? description.substring(0, offerSplitIndex)
      : description;
  const descriptionPart2 =
    offerSplitIndex > 0 ? description.substring(offerSplitIndex) : "";

  const buttons = [
    {
      title: "Tap to spin Again",
      classes: "bg-primary text-3xl font-semibold h-16 w-[260px] min-h-fit",
      onClick: () => Navigate("/spinwheel"),
    },
    {
      title: "Tap to accept offer",
      classes: "bg-darkGreen text-3xl font-semibold h-16 w-[260px] min-h-fit",
      onClick: () => Navigate("/register"),
    },
  ];

  return (
    <MainCard variant={"offer"}>
      <p className="text-white/90 text-4xl font-medium text-center mb-2">
        {"Your Offer today is"}
      </p>
      <img src={logo} alt="eco-logo" className="size-20 w-72 block mx-auto" />
      <p className="text-black text-8xl mb-2 font-extrabold text-center">
        {discount}
      </p>
      <p className="text-white/90 text-4xl font-medium text-center">
        {descriptionPart1}
      </p>
      {descriptionPart2 && (
        <p className="text-white/90 text-4xl font-medium text-center">
          {descriptionPart2}
        </p>
      )}
      {buttons.length > 0 && (
        <div className="flex my-5 w-full mb-6  justify-center">
          {buttons.map((button, idx) => (
            <button
              key={idx}
              className={`mt-4 text-white  rounded-xl  mx-4 ${button.classes}`}
              onClick={button.onClick}
            >
              {button.title}
            </button>
          ))}
        </div>
      )}
      {/* Decorative Images */}
      <img
        src={ButterflyBottom}
        className="absolute -bottom-8 size-20"
        alt="butterfly-bottom"
      />
      <img
        src={ButterflyRight}
        className="absolute -right-6 top-20 size-24"
        alt="butterfly-right"
      />
    </MainCard>
  );
};

export default Offer;
