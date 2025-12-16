import React from "react";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import ECU from "assets/images/Eco-Logo-1.png";

import { Link, useNavigate, useLocation } from "react-router-dom";

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
  bottomImage,
  variant,
  brandLogo,
  children,
}) => {
  const Navigate = useNavigate();
  const location = useLocation();

  // Check if current route is home page
  const isHomePage = location.pathname === "/";

  // Pre-calculate split description for "offer" case

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
              <p className="text-white text-5xl font-medium  mx-auto">
                {description}
              </p>
            </div>
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
      case "offer":
        return children;

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-1/5 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 xl:px-4  md:px-6 xl:py-6 md:py-3 w-64 h-12 xl:h-[85px]  md:h-[60px]">
            <Link to={"/"}>
              <span className="text-gray-600 xl:text-3xl text-xl md:text-3xl font-bold">
                CLIENT LOGO
              </span>
            </Link>
          </div>
        </div>
        <div className=" w-3/5">
          <h1 className="text-4xl md:text-7xl font-bold text-red-600">
            SPIN, WIN & SAVE
          </h1>
        </div>
        <div className="w-1/5">
          {!isHomePage && (
            <Link
              to={"/spinwheel"}
              className=" bg-darkGreen  w-auto  text-white px-5 py-1 xl:px-8 xl:py-2 rounded font-medium  xl:font-semibold text-2xl xl:text-3xl"
            >
              Restart spinner
            </Link>
          )}
        </div>
      </div>

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
