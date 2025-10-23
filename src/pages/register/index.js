import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainCard from "components/mainCard.js";
import Button from "components/Button";
import Input from "components/Form/input";
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

        <p className="text-white text-3xl md:text-4xl font-normal">
          We'd like to say
        </p>
        <h2 className="text-black text-6xl md:text-7xl font-black uppercase">
          THANK YOU
        </h2>
        <p className="text-white text-2xl md:text-3xl font-normal max-w-3xl mx-auto px-4">
          We hope you enjoy a fun day of shopping with your offer
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Form Header */}
          <p className="text-white text-2xl md:text-3xl font-bold">
            Please fill out your contact information below
          </p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-5 border-2 border-orange-500 bg-white text-black placeholder-black focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-5 border-2 border-orange-500 bg-white text-black placeholder-black focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-5 border-2 border-orange-500 bg-white text-black placeholder-black focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>

            <div>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-5 border-2 border-orange-500 bg-white text-black placeholder-black focus:outline-none focus:border-orange-600 transition-colors"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex content-center flex-col w-full items-center justify-center">
            <Button
              title={"Tap to Register"}
              classes={
                "w-[240px] mt-6 bg-darkGreen text-3xl text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none"
              }
              type="submit"
            />
            <Button
              title={"Spin Again"}
              classes={
                "bg-primary text-2xl font-semibold h-14 py-2 w-[200px] min-w-[150px] text-white my-5 rounded-lg"
              }
              onClick={() => navigate("/spinwheel")}
            />
          </div>
        </form>
      </MainCard>
    </div>
  );
};

export default Register;
