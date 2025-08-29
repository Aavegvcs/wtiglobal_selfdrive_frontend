import React, { ChangeEvent } from 'react'
import Button from '../ui/Button/Button';
import { bgColors, gradientColor } from '@/constant/colors';
import { userRegisterFormValidationSchema } from '@/validators/contactformValidator';
import { InferType } from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../ui/InputField/InputField';


type RegisterFormData = InferType<typeof userRegisterFormValidationSchema>;


const LoginUser = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(userRegisterFormValidationSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      contact: "",
      gender: '',
      email: '',
    },
  });


  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log("Form submitted:", data);
  };

  console.log(errors, "errors")


  return (
    <>
      <div>
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                placeholder="Your name"
                bgColor={bgColors.bgWhite}
                value={field.value}
                padding='px-2 py-3'
                textSize='text-[14px]'
                onChange={(value: ChangeEvent<HTMLInputElement>) => field.onChange(value)}
                error={errors && errors?.name?.message}
              />
            )}
          />






          <Button
            padding='px-2 py-2'
            textSize='text-[14px]'
            title="Submit" bgColor={gradientColor.primaryGradientColor} />
        </form>

      </div>

    </>
  )
}

export default LoginUser