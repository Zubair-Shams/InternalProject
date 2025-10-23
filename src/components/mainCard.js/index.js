import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import ECU from "assets/images/Eco-Logo-1.png";
import ButterflyBottom from "assets/images/Butterfly-7.png";
import ButterflyRight from "assets/images/Butterfly-2.png";
import { useNavigate } from "react-router-dom";

const VARIANTS_WITHOUT_TOP_LOGO = [
  "offer",
  "brands",
  "dicountOffer",
  "spinner",
];

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
  const Navigate = useNavigate();
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
            <p className="text-white text-5xl font-medium text-center mb-4">
              {heading}
            </p>
            <h2 className="text-black text-6xl md:text-8xl font-bold text-center mb-4">
              {subHeading}
            </h2>
            <div className="text-center w-full ">
              <p className="text-white text-5xl font-medium  w-[37rem] mx-auto">
                {description}
              </p>
            </div>
          </>
        );

      case "offer":
        return (
          <>
            <p className="text-white/90 text-4xl font-medium text-center mb-2">
              {subHeading}
            </p>
            <img
              src={brandLogo || ECU}
              alt="eco-logo"
              className="size-20 w-72 block mx-auto"
            />
            <p className="text-black text-8xl mb-2 font-extrabold text-center">
              {offerLabel}
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
          </>
        );
      case "dicountOffer":
        return (
          <>
            <p className="text-white text-4xl font-medium text-center mb-2">
              {subHeading}
            </p>
            <img
              src={brandLogo || ECU}
              alt="eco-logo"
              className="size-20 w-80 block mx-auto"
            />
            <p className="text-black text-8xl font-extrabold text-center">
              {offerLabel}
            </p>
            <p className="text-white text-4xl font-medium text-center my-2">
              {description}
            </p>

            <div className="flex m-auto mt-2 mb-6 justify-center">
              <button
                className="bg-dark mt-4 w-auto h-14 text-white px-12 py-2 rounded-xl text-xl"
                onClick={() => Navigate("/thankyou")}
              >
                {"Tap to recieve  this offer"}
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
    <div className="w-full">
      <h1 className="text-7xl md:text-7xl font-bold text-red-600 mb-8 text-center ">
        SPIN, WIN & SAVE
      </h1>
      <div
        className={`relative rounded-lg p-6  min-w-[45vw] max-w-[50vw] min-h-[50vh] mx-auto no-scrollbar ${
          variant !== "spinner" ? "border-[14px] border-solid shadow-lg" : ""
        }`}
        style={
          variant !== "spinner"
            ? { backgroundColor: "#FF8C00", borderColor: "#F01414" }
            : {}
        }
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
