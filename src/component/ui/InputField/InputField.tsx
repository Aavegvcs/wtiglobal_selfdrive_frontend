import React from "react";

type InputFieldProps = {
  value: string;
  type: string;
  readonly?: boolean;
  placeholder: string;
  name: string;
  bgColor: string;
  onChange: (value: string) => void;
};

const InputField = ({
  value,
  type,
  readonly = false,
  placeholder,
  name,
  bgColor,
  onChange,
}: InputFieldProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        readOnly={readonly}
        name={name}
        className={`${bgColor} border border-[#D8D8D8] py-4 px-6 rounded-xl placeholder:text-[#878787] font-medium text-xl`}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default InputField;
