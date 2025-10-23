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

  // Define the form fields array at the top of your component or outside
  const formFields = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
    },
  ];

  // In your JSX:

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
            {formFields.map((field) => (
              <div key={field.name}>
                <Input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="w-full px-6 py-5 border-2 border-orange-500 bg-white text-black text-xl font-medium placeholder-gray-600 placeholder:text-lg placeholder:font-semibold focus:outline-none focus:border-orange-600 transition-colors "
                  required={field.required}
                />
              </div>
            ))}
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
