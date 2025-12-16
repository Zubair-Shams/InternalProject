import React, { useState, useEffect, useRef, useMemo } from "react"; // ✅ Imported useMemo
// @ import components
import MainCard from "components/mainCard.js";
import { CustomSpinWheel } from "components/SpinWheel";
// @ import dependencies
import { useNavigate } from "react-router-dom";
// @ import Media
import ECO from "assets/images/Eco-Logo-1.png";
import WinMessage from "components/winMessage";
import Gucci from "assets/images/Gucci-Logo-1.png";
import Tesla from "assets/images/Tesla-Logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";
import Armani from "assets/images/Armani-Logo-1.png";
import Natura from "assets/images/Natura-Logo-1.png";
import Burberry from "assets/images/Burberry-logo-1.png";
// @ import store
import { useDispatch, useSelector } from "react-redux";
import {
  startSpinning,
  stopSpinning,
  setWinner,
  hideWinMessage,
} from "store/slices/commonSlice";

const MASTER_DATA = [
  {
    id: 1,
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
    id: 2,
    option: "Giorgio_Armani 25% OFF",
    logo: Armani,
    style: { backgroundColor: "#EDC179", textColor: "black", fontSize: 16 },
  },
  {
    id: 3,
    option: "Prada 15% OFF",
    logo: Prada,
    style: {
      backgroundColor: "#955C40",
      textColor: "black",
      fontSize: 20,
    },
  },
  {
    id: 4,
    option: "Gucci 15% OFF",
    logo: Gucci,
    style: { backgroundColor: "#0D9494", textColor: "#000", fontSize: 20 },
  },
  {
    id: 5,
    option: "ECO 40% OFF",
    logo: ECO,
    style: { backgroundColor: "#F5F5F5", textColor: "#000", fontSize: 20 },
  },
  {
    id: 6,
    option: "Tesla 30% OFF",
    logo: Tesla,
    style: { backgroundColor: "#DF9B30", textColor: "black", fontSize: 20 },
  },
  {
    id: 7,
    option: "Natura 10% OFF",
    logo: Natura,
    style: { backgroundColor: "#087530", textColor: "#000", fontSize: 20 },
  },
];

export default function SpinWheel() {
  const dispatch = useDispatch();
  const { isSpinning, selectedBrands, showWinMessage, winner } = useSelector(
    (state) => state.commonState
  );
  const [prizeNumber, setPrizeNumber] = useState(0);
  const hasRedirectedRef = useRef(false);
  const navigate = useNavigate();

  // ✅ Wrapped dynamicData calculation in useMemo
  const dynamicData = useMemo(() => {
    return MASTER_DATA.filter((item) => selectedBrands.includes(item.id));
  }, [selectedBrands]); // Dependency array ensures recalculation only when selectedBrands changes

  // Helper functions (remain unchanged)
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
    if (!isSpinning && dynamicData.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * dynamicData.length);

      setPrizeNumber(newPrizeNumber);
      dispatch(startSpinning());

      dispatch(setWinner({ winner: null }));
      hasRedirectedRef.current = false;
    } else if (dynamicData.length === 0) {
      alert("Please select at least one brand to spin the wheel.");
    }
  };

  const handleStopSpinning = () => {
    if (dynamicData.length > 0) {
      const winningOption = dynamicData[prizeNumber].option;
      const logo = dynamicData[prizeNumber].logo;
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
    }
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
  ];

  // Redirect logic (remain unchanged)
  useEffect(() => {
    if (showWinMessage && !hasRedirectedRef.current) {
      hasRedirectedRef.current = true;
      const timer = setTimeout(() => {
        navigate("/offer");
        dispatch(hideWinMessage());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showWinMessage, navigate, dispatch]);

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
          <p className="text-2xl text-black/80 mb-2">
            The Brands you are interested in today are:
          </p>
        )}

        <div className="flex mt-3 space-x-4 justify-center items-center">
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
            data={dynamicData}
            mustStartSpinning={isSpinning}
            prizeNumber={prizeNumber}
            onStopSpinning={handleStopSpinning}
            size={700}
          />

          <button
            onClick={handleSpinClick}
            disabled={isSpinning || dynamicData.length === 0}
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
