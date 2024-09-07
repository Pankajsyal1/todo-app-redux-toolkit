import React from "react";
import { iconProps } from "@/types/iconTypes";

const PlusFilled: React.FC<iconProps> = ({
  size = 24,
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    </svg>
  );
};

export default PlusFilled;
