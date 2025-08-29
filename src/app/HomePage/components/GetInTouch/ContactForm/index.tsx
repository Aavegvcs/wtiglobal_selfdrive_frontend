"use client";
import Button from "@/component/ui/Button/Button";
import InputField from "@/component/ui/InputField/InputField";
import TextAreaField from "@/component/ui/TextAreaField/TextAreaField";
import { bgColors, gradientColor } from "@/constant/colors";
import { contactFormValidationSchema } from "@/validators/contactformValidator";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InferType } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname } from "next/navigation";
import { AddUserContactQueryI } from "@/types/interface";

type ContactFormData = InferType<typeof contactFormValidationSchema>;


const ContactForm = () => {
  const pathName: string = usePathname();

  const { control, register, handleSubmit, formState: { errors, isValid } } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormValidationSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      location: '',
      contact: '',
      email: '',
      message: '',
    },
  });




  // const onChangeHandler = (val: string) => {
  //   console.log(val);
  // };

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Form submitted:", data);

    const payloadData: AddUserContactQueryI = {
      "name": data.name,
      "email": data.email,
      "contact": data.contact,
      "location": data.location,
      "description": data.message,
      "slug": pathName,
    }

  };

  return (
    <>
      <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                placeholder="Your name"
                bgColor={bgColors.bgWhite}
                value={field.value}
                onChange={(value: string) => field.onChange(value)}
                error={errors && errors?.name?.message}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                value={field.value}
                placeholder="Location"
                bgColor={bgColors.bgWhite}
                onChange={(value: string) => field.onChange(value)}
                error={errors && errors?.location?.message}
              />
            )}
          />

        </div>
        <div className="grid grid-cols-2 gap-8">
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                value={field.value}
                placeholder="Contact Number"
                bgColor={bgColors.bgWhite}
                onChange={(value: string) => field.onChange(value)}
                error={errors && errors?.contact?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                value={field.value}
                placeholder="email"
                bgColor={bgColors.bgWhite}
                onChange={(value: string) => field.onChange(value)}
                error={errors && errors?.email?.message}
              />
            )} />

        </div>
        <div className="w-full">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextAreaField
                value={field.value}
                placeholder="message..."
                bgColor={bgColors.bgWhite}
                onChange={(value: string) => field.onChange(value)}
                error={errors && errors?.message?.message}
              />
            )}
          />

        </div>
        <Button title="Submit" bgColor={gradientColor.primaryGradientColor} />
      </form>
    </>
  );
};

export default ContactForm;
