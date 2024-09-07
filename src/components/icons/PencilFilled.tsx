import { iconProps } from "@/types/iconTypes";
import React from "react";

const PencilFilled: React.FC<iconProps> = ({
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
      <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
    </svg>
  );
};

export default PencilFilled;
