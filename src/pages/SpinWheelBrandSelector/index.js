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

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <MainCard variant={"spinner"}>
      <div>
        <div className="relative">
          {/* Wheel */}
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
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
            textDistance={55}
          />

          {/* Pointer */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-[15px] border-l-transparent 
                        border-r-[15px] border-r-transparent 
                        border-b-[25px] border-b-red-600"
          ></div>
        </div>

        {/* Spin Button */}
        <button
          onClick={handleSpinClick}
          className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-bold hover:scale-105 transition-transform"
        >
          SPIN
        </button>
      </div>
    </MainCard>
  );
}
