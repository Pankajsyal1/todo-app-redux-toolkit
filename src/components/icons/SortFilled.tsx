
import React from "react";
import { iconProps } from "@/types/iconTypes";

const SortFilled: React.FC<iconProps> = ({
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
      <path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z" />
    </svg>
  );
};

export default SortFilled;
