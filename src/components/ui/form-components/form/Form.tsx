import { CustomComponentProps } from "@/types/componentsTypes";
import React from "react";

interface FormProps extends CustomComponentProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <>{props.children}</>
    </form>
  );
};

export default Form;
