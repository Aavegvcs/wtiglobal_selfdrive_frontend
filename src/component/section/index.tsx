import React from "react";

type SectionProps = {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
  paddY? : string 
};

const Section = ({ children = "", bgColor, className , paddY = "py-14" }: SectionProps) => {
  return <section className={`${bgColor} ${className} ${paddY}`}>{children}</section>;
};

export default Section;
