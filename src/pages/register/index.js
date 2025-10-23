import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import MainCard from "components/mainCard.js";
import Button from "components/Button";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/brands");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 ">
      <MainCard variant={"register"}>
        {/* TAHNK YOU PAGE CONTENT */}

        <p className="text-white text-5xl font-medium text-center mb-4">
          We'd like to say
        </p>
        <h2 className="text-black text-6xl md:text-8xl font-bold text-center mb-4">
          THANK YOU
        </h2>
        <div className="text-center w-full ">
          <p className="text-white text-5xl font-medium  w-[37rem] mx-auto">
            We hope you enjoy a fun day of shopping with your offer
          </p>
        </div>
        <img
          src={ButterflyLeft}
          alt="butterfly-left"
          className="absolute -top-7 -left-4 size-20"
        />

        <form onSubmit={handleSubmit}>
          {/* Form Header */}
          <p className="text-white/80 text-5xl font-medium my-4 text-center">
            Please fill out your contact information below
          </p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex content-center justify-center">
            <Button
              title={"Tap to Register"}
              classes={
                "w-[240px] mt-6 bg-darkGreen text-2xl text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none"
              }
              type="submit"
            />
          </div>
        </form>
      </MainCard>
    </div>
  );
};

export default Register;
