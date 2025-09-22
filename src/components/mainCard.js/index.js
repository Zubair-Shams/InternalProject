import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import ECU from "assets/images/Eco-Logo-1.png";
import ButterflyBottom from "assets/images/Butterfly-7.png";
import ButterflyRight from "assets/images/Butterfly-2.png";
const MainCard = ({
  introText = "We'd like to say",
  mainText = "THANK YOU",
  closingText = "We hope you enjoy a fun day of shopping with your offer",
  offerText = "20% off",
  buttons = [],
  variant,
  children,
}) => {
  const NOT_TOP_LOGO = ["offer", "brands"];
  const RENDER_ONLY_CHILD = ["brands", "register"];
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
        {!NOT_TOP_LOGO.includes(variant) ? (
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
              {introText}
            </p>
            <h2 className="text-black text-4xl md:text-6xl font-bold text-center mb-4">
              {mainText}
            </h2>
            <p className="text-white text-lg font-medium text-center">
              {closingText}
            </p>
          </>
        ) : (
          ""
        )}
        {RENDER_ONLY_CHILD.includes(variant) ? children : ""}
        {variant === "offer" ? (
          <>
            <p className="text-white text-xl font-medium text-center mb-2">
              {mainText}
            </p>
            <img src={ECU} alt="ECO" className=" size-20 w-44 block m-auto" />
            <p className="text-black text-4xl font-extrabold text-center">
              {offerText}
            </p>
            <p className="text-white text-xl font-medium text-center">
              {closingText.substring(
                0,
                closingText.indexOf("offer?") + "offer?".length
              )}
            </p>
            <p className="text-white text-xl font-medium text-center">
              {closingText.substring(
                closingText.indexOf("offer?") + "offer?".length
              )}
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
