import MainCard from "components/mainCard.js";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register");
    }, 3000); // Auto-advance after 3 seconds

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 w-5/6">
      <MainCard
        variant={"thankyou"}
        heading="We'd like to say"
        subHeading="THANK YOU"
        description="We hope you enjoy a fun day of shopping with your offer"
        backgroundColor="#FF8C00"
        borderColor="#F01414"
      />
    </div>
  );
};

export default Home;
