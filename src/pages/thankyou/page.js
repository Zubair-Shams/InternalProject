import React from "react";

// Thank You Card Component
const ThankYouCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Client Logo placeholder */}
      <div className="mb-8">
        <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
          <span className="text-white font-semibold text-sm tracking-wide">
            CLIENT LOGO
          </span>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center tracking-tight">
        SPIN,WIN&SAVE
      </h1>

      {/* Thank you card */}
      <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-lg p-12 max-w-lg w-full mx-auto shadow-2xl relative overflow-hidden min-h-[300px]">
        {/* Card decorative elements */}
        <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-50"></div>

        {/* Card content */}
        <div className="text-center text-white relative z-10">
          <p className="text-xl font-medium mb-4">We'd like to say</p>
          <h2 className="text-4xl font-bold bg-black text-white px-6 py-3 rounded mb-6 inline-block">
            THANK YOU
          </h2>
          <p className="text-lg leading-relaxed">
            We hope you enjoy a fun day
            <br />
            of shopping with your offer
          </p>
        </div>

        {/* Small butterfly on card */}
        <div className="absolute top-4 right-4">
          <div className="w-6 h-4 relative">
            <div className="absolute w-2 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full transform -rotate-12 opacity-80"></div>
            <div className="absolute right-0 w-2 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full transform rotate-12 opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="mt-8">
        <div className="text-white text-sm opacity-70">
          SPIN{" "}
          <span className="bg-white text-black px-1 rounded text-xs">
            STABLE
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
