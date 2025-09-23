import MainCard from "components/mainCard.js";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

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
    style: { backgroundColor: "#fff", textColor: "#000" },
  },
  {
    option: "Prada 30% OFF",
    style: { backgroundColor: "#ff9800", textColor: "black" },
  },
  {
    option: "Burberry 35% OFF",
    style: { backgroundColor: "#2196f3", textColor: "white" },
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
            outerBorderColor="#000"
            outerBorderWidth={4}
            innerBorderColor="#000"
            radiusLineColor="#000"
            radiusLineWidth={2}
            textDistance={60}
          />
          Pointer
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-[15px] border-l-transparent 
                        border-r-[15px] border-r-transparent 
                        border-b-[25px] border-b-red-600 z-10"
          ></div>
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
