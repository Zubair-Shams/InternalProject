import React from "react";
// Import brand logos
import burberryLogo from "assets/images/Burberry-logo-1.png";
import armaniLogo from "assets/images/Armani-Logo-1.png";
import pradaLogo from "assets/images/Prada-Logo-1.png";
import gucciLogo from "assets/images/Gucci-Logo-1.png";
import ecoLogo from "assets/images/Eco-Logo-1.png";
import naturaLogo from "assets/images/Natura-Logo-1.png";
import Tesla from "assets/images/Tesla-Logo-1.png";
import MainCard from "components/mainCard.js";
import ButterFluBottomLeft from "assets/images/Butterfly-3.png";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    name: "Burberry",
    logo: burberryLogo,
    className: "w-full h-14 object-contain",
  },
  {
    name: "Giorgio Armani",
    logo: armaniLogo,
    className: "w-full h-14 object-contain",
  },
  { name: "Prada", logo: pradaLogo, className: "w-full h-18 object-contain" },
  { name: "Gucci", logo: gucciLogo, className: "w-full h-18 object-contain" },
  { name: "ECO", logo: ecoLogo, className: "w-full h-14 object-contain" },
  { name: "Tesla", logo: Tesla, className: "w-full h-14 object-contain" },
  {
    name: "Natura & Co",
    logo: naturaLogo,
    className: "w-[60%] h-20 object-contain mx-auto",
  }, // ✅ centered & smaller
];

const Brands = () => {
  const Navigate = useNavigate();
  return (
    <MainCard variant={"brands"}>
      <div className="relative">
        <div className="text-center text-white/80 text-4xl">
          <p>Top 3 brands that interest you today:</p>
        </div>
        <div className="flex flex-wrap justify-start mb-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`w-6/12 my-3 ${
                index === brands.length - 1 ? "flex justify-center w-full" : ""
              }`}
            >
              {/* <button
              key={brand.id}
              className={`w-full
         rounded-lg p-2 transition-all duration-200 
        ${index === brands.length - 1 ? "mx-auto" : ""}
      `}
            > */}
              <img
                src={brand.logo}
                alt={brand.name}
                className={brand.className}
              />
              {/* </button> */}
            </div>
          ))}
        </div>

        <button
          variant="outline"
          className="bg-dark mt-4 w-auto h-14 text-white px-12 py-2 rounded-xl text-xl"
          onClick={() => Navigate("/spinwheel")}
        >
          Tap for more options
        </button>
        <img
          src={ButterFluBottomLeft}
          alt="butterefly-bottom-left"
          className="absolute bottom-2 -left-18 size-20"
        />
      </div>
    </MainCard>
  );
};

export default Brands;
