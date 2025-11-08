import MainCard from "components/mainCard.js";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";
import Burberry from "assets/images/Burberry-logo-1.png";
import ECO from "assets/images/Eco-Logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";
import WinMessage from "components/winMessage";
// import Tesla from "assets/images/Tesla-Logo-1.png";
// import Armani from "assets/images/Armani-Logo-1.png";
// import Gucci from "assets/images/Gucci-Logo-1.png";
// import Natura from "assets/images/Natura-Logo-1.png";
import PointerSVG from "assets/images/pointer2.svg";
import { useDispatch } from "react-redux";
import { stopSpinning } from "store/slices/commonSlice";
const data = [
  {
    option: "Prada  15% OFF",
    style: {
      backgroundColor: "#FB8B00",
      textColor: "black",
      fontSize: 20,
    },
  },
  {
    option: "Burberry 25% OFF",
    style: {
      backgroundColor: "#00ACC2",
      textColor: "black",
      width: "50px",
      fontSize: 19,
    },
  },
  {
    option: "ECO 20% OFF",
    style: { backgroundColor: "#F5F5F5", textColor: "#000", fontSize: 20 },
  },
  {
    option: "Prada 30% OFF",
    style: { backgroundColor: "#DF3B37", textColor: "black", fontSize: 20 },
  },
  {
    option: "Burberry  35% OFF",
    style: { backgroundColor: "#00ACC2", textColor: "black", fontSize: 19 },
  },
];

export default function SpinWheel() {
  const dispatch = useDispatch();
  // const isSpinnig = useSelector((state) => state.commonState.isSpinning);
  const [isSpinnig, setIsSpinnig] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState("");
  const [postWin, setpostWin] = useState(false);

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
    if (!isSpinnig) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);

      // in case if we rotate the wheel
      // const adjustedPrizeNumber =
      //   (newPrizeNumber + Math.floor(data.length / 2)) % data.length;

      setPrizeNumber(newPrizeNumber);
      setIsSpinnig(true);
      setWinner(null); // Clear previous winner
    }
  };

  const handleStopSpinning = () => {
    setpostWin(true);
    setIsSpinnig(false);
    const winningOption = data[prizeNumber].option;
    setWinner(winningOption);
    // Store the offer in Redux
    dispatch(
      stopSpinning({
        option: winningOption,
        brand: getWinnerBrandFromOption(winningOption),
        discount: getWinnerDiscountFromOption(winningOption),
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

  const imsList = [
    { src: ECO, className: "h-16 w-34 mx-2" },
    { src: Burberry, className: "h-16 w-36" },
    { src: Prada, className: "h-16 w-34" },
  ];

  // ✅ Redirect after win
  useEffect(() => {
    if (postWin) {
      const timer = setTimeout(() => {
        navigate("/offer");
      }, 3000); // 3 sec delay

      return () => clearTimeout(timer); // cleanup
    }
  }, [postWin, navigate]);

  return (
    <MainCard variant={"spinner"}>
      <div className="flex flex-col items-center mt-20">
        {postWin ? (
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

        <div className="flex mt-8 ">
          {!postWin &&
            imsList.map((item, index) => (
              <div key={index} className="w-1/3 flex justify-center">
                <img
                  src={item.src}
                  alt={`brand-logo-${index}`}
                  className={item.className}
                />
              </div>
            ))}
        </div>
        {postWin && (
          <div className="w-[70vw] fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
            <WinMessage />
          </div>
        )}
        <div className="fixed rotate-[315deg] bottom-0 translate-y-[10rem] transform  z-10">
          {/* <div className=" rotate-[315deg] absolute top-1/2 translate-y-96"> */}
          <Wheel
            startingOptionIndex={0}
            mustStartSpinning={isSpinnig}
            prizeNumber={prizeNumber}
            data={data}
            radiusLineColor={["black"]}
            onStopSpinning={handleStopSpinning}
            textColors={["#000"]}
            outerBorderWidth={20}
            disableInitialAnimation={true}
            innerBorderColor="#000"
            outerBorderColor="#DF3B37"
            radiusLineWidth={2}
            textDistance={55}
            perpendicularText={true}
            pointerProps={{
              src: PointerSVG,
              style: {
                transform: "rotate(45deg)", // move pointer to bottom
                top: "36px",
                right: "9px",
                zIndex: 100,
              },
            }}
          />

          <button
            onClick={handleSpinClick}
            disabled={isSpinnig}
            style={{ backgroundColor: "#353333" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rotate-45
                     size-20  bg-wheel-dark text-white rounded-full text-2xl font-bold 
                     hover:scale-105 transition-transform z-20 disabled:cursor-not-allowed"
          >
            {"SPIN"}
          </button>
        </div>
      </div>
    </MainCard>
  );
}
