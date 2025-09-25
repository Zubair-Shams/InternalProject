import MainCard from "components/mainCard.js";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

// === Logos shown above the wheel (target design wants ECO, BURBERRY, PRADA) ===
import ECO from "assets/images/Eco-Logo-1.png";
import Burberry from "assets/images/Burberry-logo-1.png";
import Prada from "assets/images/Prada-Logo-1.png";

// Optional: keep others around if you’ll switch brands later
// import Tesla from "assets/images/Tesla-Logo-1.png";
// import Armani from "assets/images/Armani-Logo-1.png";
// import Gucci from "assets/images/Gucci-Logo-1.png";
// import Natura from "assets/images/Natura-Logo-1.png";

const slices = [
  { option: "PRADA 15% OFF", style: { backgroundColor: "#FF8C2A", textColor: "#000" } },
  { option: "BURBERRY 25% OFF", style: { backgroundColor: "#39B4D3", textColor: "#000" } },
  { option: "ECO 20% OFF", style: { backgroundColor: "#FFFFFF", textColor: "#000" } },
  { option: "PRADA 30% OFF", style: { backgroundColor: "#FF8C2A", textColor: "#000" } },
  { option: "BURBERRY 35% OFF", style: { backgroundColor: "#39B4D3", textColor: "#000" } },
];

export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState("");
  const [postWin, setPostWin] = useState(false);

  const handleSpinClick = () => {
    if (isSpinning) return;
    // choose a random slice
    const idx = Math.floor(Math.random() * slices.length);
    setPrizeNumber(idx);
    setIsSpinning(true);
    setPostWin(false);
    setWinner("");
  };

  const handleStopSpinning = () => {
    setIsSpinning(false);
    setPostWin(true);
    setWinner(slices[prizeNumber].option);
  };

  // --- Helpers (fixed spacing/trim bugs) ---
  const getWinnerBrand = () => (winner ? winner.split(" ")[0] : "");
  const getWinnerDiscount = () =>
    winner ? winner.substring(winner.indexOf(" ") + 1).trim() : "";

  return (
    <MainCard variant="spinner">
      <div className="flex flex-col items-center">

        {/* Header / Subheader */}
        {postWin ? (
          <h2 className="text-3xl md:text-4xl text-black font-extrabold mb-8 text-center tracking-tight">
            You won <span className="text-red-600">{getWinnerDiscount()}</span> from{" "}
            <span className="uppercase">{getWinnerBrand()}</span>
          </h2>
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-red-600 mb-2">
              SPIN,WIN&SAVE
            </h1>
            <p className="text-2xl text-black/80 mb-6">
              The brands you are interested in today are:
            </p>
            <div className="flex items-center justify-center gap-10 mb-6">
              <img src={ECO} alt="ECO" className="h-12 md:h-14 object-contain" />
              <img src={Burberry} alt="BURBERRY" className="h-10 md:h-12 object-contain" />
              <img src={Prada} alt="PRADA" className="h-10 md:h-12 object-contain" />
            </div>
          </>
        )}

        <div className="relative">
          {/* Top pointer (matches design). This sits above the wheel center. */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
            aria-hidden
            style={{
              width: 0,
              height: 0,
              borderLeft: "18px solid transparent",
              borderRight: "18px solid transparent",
              borderBottom: "28px solid #D72E2E", // red pointer
            }}
          />

          {/* Wheel */}
          <Wheel
            mustStartSpinning={isSpinning}
            prizeNumber={prizeNumber}
            data={slices}
            onStopSpinning={handleStopSpinning}
            // visual tuning to match the target look
            outerBorderWidth={18}
            outerBorderColor="#D72E2E"      // thicker red rim
            innerBorderColor="#000000"
            radiusLineColor={"#ffffff"}
            radiusLineWidth={2}
            textDistance={65}
            fontSize={16}
            spinDuration={0.75}             // snappy like the mock (seconds)
            // hide library pointer; we’re drawing our own
            pointerProps={{ style: { display: "none" } }}
            // NOTE: you already set per-slice colors in 'data'. No need for backgroundColors here.
          />

          {/* Center Spin Button */}
          {!postWin && (
            <button
              onClick={handleSpinClick}
              disabled={isSpinning}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         h-24 w-24 md:h-28 md:w-28 rounded-full bg-black text-white
                         text-2xl font-extrabold tracking-wide z-30
                         hover:scale-105 transition-transform
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Spin"
            >
              SPIN
            </button>
          )}
        </div>
      </div>
    </MainCard>
  );
}
