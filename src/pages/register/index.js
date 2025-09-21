import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButterflyLeft from "assets/images/Butterfly-1.png";
import MainCard from "components/mainCard.js";
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
    navigate("/thankyou");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 ">
      <MainCard variant={"register"}>
        <img
          src={ButterflyLeft}
          alt="butterfly-left"
          className="absolute -top-7 -left-4 size-20"
        />

        <form onSubmit={handleSubmit}>
          {/* Form Header */}
          <p className="text-black text-lg font-medium mb-6 text-center">
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
          <button
            type="submit"
            className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-black"
          >
            Tap to register
          </button>
        </form>
      </MainCard>
    </div>
  );
};

export default Register;
