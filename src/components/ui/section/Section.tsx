import React from "react";
import { CustomComponentProps } from "@/types/componentsTypes";

const Section: React.FC<CustomComponentProps> = (props) => {
  return (
    <section className="py-10">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
