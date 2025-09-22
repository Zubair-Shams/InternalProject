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
const Brands = () => {
  const brands = [
    { id: "burberry", name: "BURBERRY", logo: burberryLogo },
    { id: "armani", name: "GIORGIO ARMANI", logo: armaniLogo },
    { id: "prada", name: "PRADA", logo: pradaLogo },
    { id: "gucci", name: "GUCCI", logo: gucciLogo },
    { id: "eco", name: "ECO", logo: ecoLogo },
    { id: "tesla", name: "Tesla", logo: Tesla },
    { id: "natura", name: "natura&co", logo: naturaLogo },
  ];
  return (
    <MainCard variant={"brands"}>
      <div className="relative">
        <div className="flex flex-wrap justify-start  mb-6">
          {brands.map((brand, index) => (
            <div className="w-6/12 my-1">
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
                className="w-full h-8 object-contain"
              />
              {/* </button> */}
            </div>
          ))}
        </div>

        <button
          variant="outline"
          className="w-6/12 bg-black/60 border-white/30 text-white py-2 px-5 rounded hover:bg-white/30 transition-colors"
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
