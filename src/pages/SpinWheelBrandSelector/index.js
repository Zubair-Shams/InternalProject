import MainCard from "components/mainCard.js";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Burberry from "assets/images/Burberry-logo-1.png";
import Tesla from "assets/images/Tesla-Logo-1.png";
import Armani from "assets/images/Armani-Logo-1.png";
import ECO from "assets/images/Eco-Logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";
import Gucci from "assets/images/Gucci-Logo-1.png";
import Natura from "assets/images/Natura-Logo-1.png";
const data = [
  {
    option: "Prada 15% OFF",
    style: { backgroundColor: "#f44336", textColor: "white" },
  },
  {
    option: "Burberry 25% OFF",
    style: { backgroundColor: "#03a9f4", textColor: "white" },
  },
  {
    option: "ECO 20% OFF",
    style: { backgroundColor: "#F5F5F5", textColor: "#000" },
  },
  {
    option: "Prada 30% OFF",
    style: { backgroundColor: "#FF8C00", textColor: "black" },
  },
  {
    option: "Burberry 35% OFF",
    style: { backgroundColor: "#1E90FF", textColor: "white" },
  },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setWinner(null); // Clear previous winner
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setWinner(data[prizeNumber].option);
  };

  return (
    <MainCard variant={"spinner"}>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-black/80 mb-3">
          The Brands you are interested in today are:
        </p>
        <div className="flex w-full">
          <div className="w-1/3">
            <img src={Burberry} alt="brand-logo" className="h-16 w-34" />
          </div>
          <div className="w-1/3">
            <img src={Gucci} alt="brand-logo" className="h-16 w-36" />
          </div>
          <div className="w-1/3">
            <img src={Armani} alt="brand-logo" className="h-16 w-34" />
          </div>
        </div>
        <div className="relative">
          {/* Wheel */}
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
            backgroundColors={[
              "#ff9800",
              "#2196f3",
              "#f44336",
              "#03a9f4",
              "#fff",
            ]}
            textColors={["#000"]}
            outerBorderWidth={12}
            innerBorderColor="#000"
            radiusLineColor={["tranparent"]}
            outerBorderColor="#F01414"
            radiusLineWidth={2}
            textDistance={55}
            pointerProps={{ style: { display: "none" } }}
          />
          Pointer
          {/* Centered Spin Button */}
          <button
            onClick={handleSpinClick}
            disabled={mustSpin}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     px-3 py-3 bg-black text-white rounded-full text-lg font-bold 
                     hover:scale-105 transition-transform z-20
                     disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {mustSpin ? "SPINNING..." : "SPIN"}
          </button>
        </div>

        {/* Winner Display */}
        {winner && (
          <div className="mt-6 p-6 bg-green-100 border-2 border-green-300 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-2">You won:</p>
            <p className="text-xl font-bold text-green-600">{winner}</p>
            <button
              onClick={() => handleSpinClick()}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Spin Again
            </button>
          </div>
        )}
      </div>
    </MainCard>
  );
}
