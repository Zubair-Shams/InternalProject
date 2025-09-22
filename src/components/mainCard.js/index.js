import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import ECU from "assets/images/Eco-Logo-1.png";
import ButterflyBottom from "assets/images/Butterfly-7.png";
import ButterflyRight from "assets/images/Butterfly-2.png";

const VARIANTS_WITHOUT_TOP_LOGO = ["offer", "brands", "dicountOffer"];

const MainCard = ({
  heading = "We'd like to say",
  subHeading = "THANK YOU",
  description = "We hope you enjoy a fun day of shopping with your offer",
  offerLabel = "20% off",
  buttons = [],
  bottomImage,
  variant,
  brandLogo,
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

  const renderContent = () => {
    switch (variant) {
      case "thankyou":
        return (
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
        );

      case "offer":
        return (
          <>
            <p className="text-white text-xl font-medium text-center mb-2">
              {subHeading}
            </p>
            <img
              src={brandLogo || ECU}
              alt="eco-logo"
              className="size-20 w-44 block mx-auto"
            />
            <p className="text-black text-4xl font-extrabold text-center">
              {offerLabel}
            </p>
            <p className="text-white text-xl font-medium text-center">
              {descriptionPart1}
            </p>
            {descriptionPart2 && (
              <p className="text-white text-xl font-medium text-center">
                {descriptionPart2}
              </p>
            )}
            {buttons.length > 0 && (
              <div className="flex mt-2 mb-6 justify-between">
                {buttons.map((button, idx) => (
                  <button
                    key={idx}
                    className="bg-black text-white px-4 py-2 rounded"
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
          </>
        );
      case "dicountOffer":
        return (
          <>
            <p className="text-white text-xl font-medium text-center mb-2">
              {subHeading}
            </p>
            <img
              src={brandLogo || ECU}
              alt="eco-logo"
              className="size-20 w-44 block mx-auto"
            />
            <p className="text-black text-4xl font-extrabold text-center">
              {offerLabel}
            </p>
            <p className="text-white text-xl font-medium text-center my-2">
              {description}
            </p>

            <div className="flex m-auto mt-2 mb-6 justify-center">
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => {}}
              >
                {"Tap to accept this offer"}
              </button>
            </div>
            {/* Decorative Images */}
            <img
              src={bottomImage}
              className="absolute -bottom-8 size-20"
              alt="butterfly-bottom"
            />
          </>
        );

      case "brands":
      case "register":
      case "spinner":
        return children;

      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
        SPIN, WIN & SAVE
      </h1>
      <div
        className="relative rounded-lg p-6 shadow-lg max-w-md mx-auto border-8 border-solid"
        style={{
          backgroundColor: "#FF8C00",
          borderColor: "#F01414",
        }}
      >
        {!VARIANTS_WITHOUT_TOP_LOGO.includes(variant) && (
          <img
            src={ButterflyLeft}
            alt="butterfly-left"
            className="absolute -top-7 -left-4 size-20"
          />
        )}

        {renderContent()}
      </div>
    </div>
  );
};

export default MainCard;
