import { ButtonComponentProps } from "@/types/componentsTypes";
import React from "react";

const Button: React.FC<ButtonComponentProps> = ({
  type = "button",
  className,
  block,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${className} ${block ? "block w-full" : "inline-block"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;



