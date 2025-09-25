import MainCard from "components/mainCard.js";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom"; // ✅ add this
import Burberry from "assets/images/Burberry-logo-1.png";
import Tesla from "assets/images/Tesla-Logo-1.png";
import Armani from "assets/images/Armani-Logo-1.png";
import ECO from "assets/images/Eco-Logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";
import Gucci from "assets/images/Gucci-Logo-1.png";
import Natura from "assets/images/Natura-Logo-1.png";
import WinMessage from "components/winMessage";

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
  const [isSpinnig, setIsSpinnig] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState("");
  const [postWin, setpostWin] = useState(false);

  const navigate = useNavigate(); // ✅ initialize router navigation

  const handleSpinClick = () => {
    if (!isSpinnig) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setIsSpinnig(true);
      setWinner(null); // Clear previous winner
    }
  };

  const handleStopSpinning = () => {
    setpostWin(true);
    setIsSpinnig(false);
    setWinner(data[prizeNumber].option);
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
      <div className="flex flex-col items-center">
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

        <div className="flex ">
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

        <div className="relative">
          <Wheel
          
            mustStartSpinning={isSpinnig}
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
            width={"800px"} // ⬅️ wheel diameter
            height={400}
            pointerProps={{ style: { display: "none" } }}
          />

          <button
            onClick={handleSpinClick}
            disabled={isSpinnig}
            style={{ backgroundColor: "#353333" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     size-20  bg-black text-white rounded-full text-2xl font-bold 
                     hover:scale-105 transition-transform z-20 disabled:cursor-not-allowed"
          >
            {"SPIN"}
          </button>

          {postWin && (
            <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <WinMessage />
            </div>
          )}
        </div>
      </div>
    </MainCard>
  );
}
