import React from "react";

type TextAreaField = {
  value: string;
  placeholder?: string;
  bgColor?: string;
  onChange?: (value: string) => void;
  error?: string
};

const TextAreaField = ({
  value,
  placeholder,
  bgColor,
  onChange,
  error
}: TextAreaField) => {
  return (
    <div className="flex flex-col">
      <textarea
        value={value}
        placeholder={placeholder}
        className={`${bgColor}  border border-[#D8D8D8] py-4 px-6 rounded-xl placeholder:text-[#878787] font-medium text-xl w-full`}
        onChange={(e) => {
          onChange(e.target.value);
        }}


      ></textarea>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextAreaField;
