import React, { useState } from "react";

import MainCard from "components/mainCard.js";
import ButterFluBottomLeft from "assets/images/Butterfly-3.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "store/slices/commonSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const Navigate = useNavigate();
  const brands = useSelector((state) => state.commonState.brands);

  const toggleBrand = (brandId) => {
    const newSelected = new Set(selectedBrands);
    if (newSelected.has(brandId)) {
      newSelected.delete(brandId);
    } else if (newSelected.size < 3) {
      newSelected.add(brandId);
    }
    setSelectedBrands(newSelected);
    dispatch(selectBrand({ brands: newSelected }));
  };
  return (
    <MainCard variant={"brands"}>
      <div className="relative">
        <div className="text-center text-white/80 text-4xl">
          <p>Top 3 brands that interest you today:</p>
        </div>
        <div className="flex flex-wrap justify-start mb-6 ">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`w-6/12 my-3 ${
                index === brands.length - 1 ? "flex justify-center w-full" : ""
              }`}
            >
              <button
                key={brand.id}
                onClick={() => toggleBrand(brand.id)}
                className={`
                      relative rounded-lg p-4 transition-all duration-200 
                      hover:shadow-md active:scale-95 w-full
                      ${
                        selectedBrands.has(brand.id)
                          ? "ring-2 ring-primary bg-brand-selected"
                          : "hover:bg-brand-hover"
                      }
                    `}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={brand.className}
                />
                {selectedBrands.has(brand.id) && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
              </button>
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
