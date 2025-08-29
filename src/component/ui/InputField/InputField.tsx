import React from "react";

type InputFieldProps = {
  value: string;
  type?: string;
  readonly?: boolean;
  placeholder?: string;
  name?: string;
  bgColor?: string;
  border?: string,
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: string,
  icon?: React.ReactNode,
  textSize?: string,
  error?: string
};

const InputField = ({
  error,
  value,
  type,
  readonly = false,
  placeholder,
  name,
  bgColor,
  onChange = () => { },
  textSize = "text-xl",
  icon,
  padding = "py-4 px-6",
  border = "border"
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className={`flex ${bgColor} ${border} rounded-xl gap-0 items-center w-full px-2`}>
        {icon}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          name={name}
          className={`${border} ${padding} ${textSize} rounded-xl border-[#D8D8D8]   placeholder:text-[#878787] font-medium  w-full border-none outline-none`}
          onChange={onChange}
        />
      </div>
      {
        error && <p className="text-red-500 text-[12px]">{error}</p>
      }

    </div>
  );
};

export default InputField;
