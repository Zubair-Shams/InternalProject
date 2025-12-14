import MainCard from "components/mainCard.js";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Burberry from "assets/images/Burberry-logo-1.png";
import ECO from "assets/images/Eco-Logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";
import WinMessage from "components/winMessage";
import Tesla from "assets/images/Tesla-Logo-1.png";
import Armani from "assets/images/Armani-Logo-1.png";
import Gucci from "assets/images/Gucci-Logo-1.png";
import Natura from "assets/images/Natura-Logo-1.png";
// import PointerSVG from "assets/images/pointer2.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  startSpinning,
  stopSpinning,
  setWinner,
  nextStep,
  setUserData,
  selectBrand,
  resetGame,
} from "store/slices/commonSlice";
import { CustomSpinWheel } from "components/SpinWheel";
const data = [
  {
    option: "Prada  15% OFF",
    logo: Prada,
    style: {
      backgroundColor: "#FB8B00",
      textColor: "black",
      fontSize: 20,
    },
  },
  {
    option: "Burberry 25% OFF",
    logo: Burberry,
    style: {
      backgroundColor: "#00ACC2",
      textColor: "black",
      width: "50px",
      fontSize: 20,
    },
  },
  {
    option: "ECO 20% OFF",
    logo: ECO,
    style: { backgroundColor: "#F5F5F5", textColor: "#000", fontSize: 20 },
  },
  {
    option: "Prada 30% OFF",
    logo: Prada,
    style: { backgroundColor: "#DF3B37", textColor: "black", fontSize: 20 },
  },
  {
    option: "Burberry  35% OFF",
    logo: Burberry,
    style: { backgroundColor: "#00ACC2", textColor: "black", fontSize: 20 },
  },
];

export default function SpinWheel() {
  const dispatch = useDispatch();
  const { isSpinning, spinCount, selectedBrands, showWinMessage, winner } =
    useSelector((state) => state.commonState);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const navigate = useNavigate(); // ✅ initialize router navigation

  // Helper functions to extract brand and discount from option text
  const getWinnerBrandFromOption = (option) => {
    if (!!option) {
      const spaceIndex = option.indexOf(" ");
      return option.substring(0, spaceIndex).trim();
    }
    return "";
  };

  const getWinnerDiscountFromOption = (option) => {
    if (!!option) {
      const spaceIndex = option.indexOf(" ");
      return option.substring(spaceIndex).trim();
    }
    return "";
  };

  const handleSpinClick = () => {
    if (!isSpinning) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);

      setPrizeNumber(newPrizeNumber);
      dispatch(startSpinning());

      dispatch(setWinner({ winner: null })); // Clear previous winner
    }
  };

  const handleStopSpinning = () => {
    const winningOption = data[prizeNumber].option;
    const logo = data[prizeNumber].logo;
    console.log("on stop spinning", winningOption);

    // Set winner in Redux
    dispatch(setWinner({ winner: winningOption }));

    // Store the offer in Redux
    dispatch(
      stopSpinning({
        currentPrize: winningOption,
        brand: getWinnerBrandFromOption(winningOption),
        discount: getWinnerDiscountFromOption(winningOption),
        logo,
      })
    );
  };

  const getWinnerBrand = () => {
    if (!!winner) {
      const spaceIndex = winner.indexOf(" ");
      return winner.substring(0, spaceIndex);
    }
    return "";
  };

  const getWinnerDiscount = () => {
    if (!!winner) {
      const spaceIndex = winner.indexOf(" ");
      return winner.substring(spaceIndex, winner.length + 1);
    }
    return "";
  };

  const InterestedBrands = [
    { id: 1, src: Burberry, className: "h-16 w-36" },
    { id: 2, src: Armani, className: "h-16 w-34" },
    { id: 3, src: Prada, className: "h-16 w-34" },
    { id: 4, src: Gucci, className: "h-16 w-34" },
    { id: 5, src: ECO, className: "h-16 w-34 mx-2" },
    { id: 6, src: Tesla, className: "h-16 w-34" },
    { id: 7, src: Natura, className: "h-16 w-34" },
    { id: 8, src: ECO, className: "h-16 w-34" },
  ];

  // ✅ Redirect after win
  useEffect(() => {
    if (showWinMessage) {
      const timer = setTimeout(() => {
        navigate("/offer");
      }, 3000); // 3 sec delay

      return () => clearTimeout(timer); // cleanup
    }
  }, [showWinMessage, navigate]);

  return (
    <MainCard variant={"spinner"}>
      <div className="flex flex-col items-center mt-3">
        {showWinMessage ? (
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            YOU WON A{" "}
            <span className="text-red-600">{getWinnerDiscount()}</span> DISCOUNT
            FROM {getWinnerBrand()}
          </h2>
        ) : (
          <p className="text-2xl text-black/80 mb-3">
            The Brands you are interested in today are:
          </p>
        )}

        <div className="flex mt-8 space-x-4 justify-center items-center">
          {!showWinMessage &&
            InterestedBrands.filter((item) =>
              selectedBrands.includes(item.id)
            ).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 max-w-40 flex justify-center "
              >
                <img
                  src={item.src}
                  alt={`brand-logo-${index}`}
                  className={item.className}
                />
              </div>
            ))}
        </div>
        {showWinMessage && (
          <div className="w-[70vw] fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
            <WinMessage />
          </div>
        )}
        <div className="fixed  bottom-0 translate-y-[17rem] transform  z-10">
          <CustomSpinWheel
            data={data}
            mustStartSpinning={isSpinning}
            prizeNumber={prizeNumber}
            onStopSpinning={handleStopSpinning}
            size={700}
          />

          <button
            onClick={handleSpinClick}
            disabled={isSpinning}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
                     size-32 rounded-full text-white  text-2xl font-bold 
                     hover:scale-105 transition-transform z-20 disabled:cursor-not-allowed bg-transparent`}
          >
            {isSpinning ? "" : ""}
          </button>
        </div>
      </div>
    </MainCard>
  );
}
