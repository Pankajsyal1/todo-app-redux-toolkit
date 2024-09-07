import { CustomComponentProps } from "@/types/componentsTypes";
import React from "react";

const CardBody: React.FC<CustomComponentProps> = (props) => {
  return <div>{props.children}</div>;
};

export default CardBody;
