import React from "react";

type DividerVerticalProps = {
  color: string;
  height?: string
};

const DividerVertical = ({ color, height = "h-full" }: DividerVerticalProps) => {
  return <div className={`${color} ${height} w-[1px]  rounded-2xl`}></div>;
};

export default DividerVertical;
