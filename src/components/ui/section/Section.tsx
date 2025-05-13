import React from "react";
import { CustomComponentProps } from "@/types/componentsTypes";

const Section: React.FC<CustomComponentProps> = (props) => {
  return (
    <section className="py-10 px-3 px-md-0">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
