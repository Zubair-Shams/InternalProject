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

const Brands = () => {
  const brands = [
    { id: "burberry", name: "BURBERRY", logo: burberryLogo },
    { id: "armani", name: "GIORGIO ARMANI", logo: armaniLogo },
    { id: "prada", name: "PRADA", logo: pradaLogo },
    { id: "tesla", name: "Tesla", logo: Tesla },
    { id: "gucci", name: "GUCCI", logo: gucciLogo },
    { id: "eco", name: "ECO", logo: ecoLogo },
    { id: "natura", name: "natura&co", logo: naturaLogo },
  ];
  return (
    <MainCard variant={"register"}>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {brands.map((brand) => (
          <button
            key={brand.id}
            // onClick={() => toggleBrand(brand.id)}
            className={`
          relative bg-white rounded-lg p-4 transition-all duration-200 
          hover:shadow-md hover:scale-105 active:scale-95

        `}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-8 object-contain"
            />
          </button>
        ))}
      </div>
      {/* Selection Counter */}
      {/* <div className="mb-4">
        <p className="text-spin-text-muted text-sm">
          {selectedBrands.size}/3 brands selected
        </p>
      </div> */}
      Action Button
      <button
        variant="outline"
        className="w-full bg-white/20 border-white/30 text-spin-text hover:bg-white/30 transition-colors"
        // disabled={selectedBrands.size === 0}
      >
        {/* {selectedBrands.size === 3 ? "Start Spinning!" : "Go for more options"} */}
      </button>
    </MainCard>
  );
};

export default Brands;
