import React from "react";

const Input = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  className,
  required,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};

export default Input;
