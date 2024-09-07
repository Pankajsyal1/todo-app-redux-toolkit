import React from "react";
import { CustomComponentProps } from "@/types/componentsTypes";

interface CardProps extends CustomComponentProps{
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`p-4 rounded-md shadow hover:shadow-md bg-white ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
