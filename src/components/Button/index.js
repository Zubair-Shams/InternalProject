import React from "react";

const Button = ({ title, classes, ...rest }) => {
  return (
    <button className={`min-w-[16rem] ${classes}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
