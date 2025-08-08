"use client";
import Button from "@/component/ui/Button/Button";
import InputField from "@/component/ui/InputField/InputField";
import TextAreaField from "@/component/ui/TextAreaField/TextAreaField";
import { bgColors, gradientColor } from "@/constant/colors";
import React from "react";

const ContactForm = () => {
  const onChangeHandler = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <form className="flex flex-col gap-8 w-full">
        <div className="grid grid-cols-2 gap-8">
          <InputField
            type="text"
            value=""
            placeholder="Your name"
            name="name"
            bgColor={bgColors.bgWhite}
            onChange={onChangeHandler}
          />
          <InputField
            type="text"
            value=""
            placeholder="Location"
            name="location"
            bgColor={bgColors.bgWhite}
            onChange={onChangeHandler}
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <InputField
            type="text"
            value=""
            placeholder="Contact Number"
            name="contact"
            bgColor={bgColors.bgWhite}
            onChange={onChangeHandler}
          />
          <InputField
            type="text"
            value=""
            placeholder="email"
            name="email"
            bgColor={bgColors.bgWhite}
            onChange={onChangeHandler}
          />
        </div>
        <div className="w-full">
          <TextAreaField
            value=""
            placeholder="message..."
            bgColor={bgColors.bgWhite}
            onChange={onChangeHandler}
          />
        </div>
        <Button title="Submit" bgColor={gradientColor.primaryGradientColor} />
      </form>
    </>
  );
};

export default ContactForm;
