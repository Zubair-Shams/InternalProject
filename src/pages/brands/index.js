import React, { useState } from "react";

import MainCard from "components/mainCard.js";
import ButterFluBottomLeft from "assets/images/Butterfly-3.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "store/slices/commonSlice";
import Button from "components/Button";

const Brands = () => {
  const dispatch = useDispatch();
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const Navigate = useNavigate();
  const brands = useSelector((state) => state.commonState.brands);

  const toggleBrand = (brandId) => {
    const newSelected = new Set(selectedBrands);
    if (newSelected.has(brandId)) {
      newSelected.delete(brandId);
    } else  {
      newSelected.add(brandId);
    }
    setSelectedBrands(newSelected);
    dispatch(selectBrand({ brandIds: Array.from(newSelected) }));
  };
  return (
    <MainCard variant={"brands"}>
      <div className="relative">
        <div className="text-center text-white/80 text-4xl">
          <p>Top 3 brands that interest you today:</p>
        </div>
        <div className="flex flex-wrap mb-3 md:justify-center">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`w-6/12 my-2 px-2 ${
                index === brands.length - 1 ? "flex justify-center " : ""
              }`}
            >
              <button
                key={brand.id}
                onClick={() => toggleBrand(brand.id)}
                className={`
                      relative rounded-lg p-2 transition-all duration-200 
                      hover:shadow-md active:scale-95 w-full border-2 
                      ${
                        selectedBrands.has(brand.id)
                          ? " border-darkGreen bg-brand-selected"
                          : "hover:bg-brand-hover border-transparent "
                      }
                    `}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={brand.className}
                />
                {selectedBrands.has(brand.id) && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-darkGreen text-white rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <Button
          title={" Tap to Spin to Win!"}
          classes={`mt-4 w-auto px-12 py-5 rounded-xl font-semibold text-3xl ${
            selectedBrands.size >= 3
              ? "bg-darkGreen text-white"
              : "bg-gray-400 text-white/70 cursor-not-allowed"
          }`}
          disabled={selectedBrands.size < 3}
          onClick={() => {
            if (selectedBrands.size > 0) {
              Navigate("/spinwheel");
            }
          }}
        />
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
