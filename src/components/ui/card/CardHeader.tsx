import { CustomComponentProps } from "@/types/componentsTypes";
import React from "react";

const CardHeader: React.FC<CustomComponentProps> = (props) => {
  return <div>{props.children}</div>;
};

export default CardHeader;
