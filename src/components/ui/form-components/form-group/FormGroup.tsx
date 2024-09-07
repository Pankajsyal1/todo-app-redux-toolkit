import { CustomComponentProps } from "@/types/componentsTypes";
import React from "react";

interface FormGroupProps extends CustomComponentProps {
  className?: string,
  direction?: boolean
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  return <div className={`flex  ${props.direction ? 'flex-row' : 'flex-col'} ${props.className}`}>{props.children}</div>;
};

export default FormGroup;
