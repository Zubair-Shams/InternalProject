import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
        SPIN, WIN & SAVE
      </h1>

      <div className="text-center">
        <p className="text-white text-xl mb-6">
          Welcome to Spin Stable! Ready to win amazing prizes?
        </p>

        <Link
          to="/register"
          className="inline-block bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-8 rounded-lg border-2 border-red-500 transition-colors duration-200"
        >
          Start Playing Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
