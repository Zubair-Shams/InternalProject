import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import ECU from "assets/images/Eco-Logo-1.png";
import ButterflyBottom from "assets/images/Butterfly-7.png";
import ButterflyRight from "assets/images/Butterfly-2.png";

const VARIANTS_WITHOUT_TOP_LOGO = ["offer", "brands"];
const VARIANTS_CHILD_ONLY = ["brands", "register"];

const MainCard = ({
  heading = "We'd like to say",
  subHeading = "THANK YOU",
  description = "We hope you enjoy a fun day of shopping with your offer",
  offerLabel = "20% off",
  buttons = [],
  variant,
  children,
}) => {
  // Pre-calculate split description for "offer" case
  const offerSplitIndex = description.indexOf("offer?") + "offer?".length;
  const descriptionPart1 =
    offerSplitIndex > 0
      ? description.substring(0, offerSplitIndex)
      : description;
  const descriptionPart2 =
    offerSplitIndex > 0 ? description.substring(offerSplitIndex) : "";

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
        SPIN, WIN & SAVE
      </h1>
      <div
        className="rounded-lg p-6 shadow-lg max-w-md mx-auto border-solid border-8 relative"
        style={{
          backgroundColor: "#FF8C00",
          borderColor: `#F01414`,
        }}
      >
        {!VARIANTS_WITHOUT_TOP_LOGO.includes(variant) ? (
          <img
            src={ButterflyLeft}
            alt="butterfly-left"
            className="absolute -top-7 -left-4 size-20"
          />
        ) : (
          ""
        )}

        {variant === "thankyou" ? (
          <>
            <p className="text-white text-lg font-medium text-center mb-4">
              {heading}
            </p>
            <h2 className="text-black text-4xl md:text-6xl font-bold text-center mb-4">
              {subHeading}
            </h2>
            <p className="text-white text-lg font-medium text-center">
              {description}
            </p>
          </>
        ) : (
          ""
        )}
        {VARIANTS_CHILD_ONLY.includes(variant) ? children : ""}
        {variant === "offer" ? (
          <>
            <p className="text-white text-xl font-medium text-center mb-2">
              {subHeading}
            </p>
            <img src={ECU} alt="ECO" className=" size-20 w-44 block m-auto" />
            <p className="text-black text-4xl font-extrabold text-center">
              {offerLabel}
            </p>
            <p className="text-white text-xl font-medium text-center">
              {descriptionPart1}
            </p>
            <p className="text-white text-xl font-medium text-center">
              {descriptionPart2}
            </p>
            <div className="flex mt-2 mb-6 justify-between">
              {buttons.map((button) => (
                <div className="flex">
                  <button
                    className="bg-black text-white px-4 py-2 rounded"
                    onClick={button.onClick}
                  >
                    {button.title}
                  </button>
                </div>
              ))}
            </div>
            <img
              src={ButterflyBottom}
              className="absolute -bottom-8  size-20"
              alt="bufferfly-bottom"
            />
            <img
              src={ButterflyRight}
              className="absolute -right-6 top-20 size-24"
              alt="bufferfly-right"
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainCard;
