import React from "react";

import MainCard from "components/mainCard.js";
import ButterFluBottomLeft from "assets/images/Butterfly-3.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Brands = () => {
  const Navigate = useNavigate();
  const brands = useSelector((state) => state.commonState.brands);
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
