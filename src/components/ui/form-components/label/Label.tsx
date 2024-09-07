import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="mb-1 font-medium">
      {props.children}
    </label>
  );
};

export default Label;
