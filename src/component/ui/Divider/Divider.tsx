import React from "react";

type DividerProps = {
  color: string;
};

const Divider = ({ color }: DividerProps) => {
  return <div className={`${color} w-full h-[1px] rounded-2xl my-2`}></div>;
};

export default Divider;
