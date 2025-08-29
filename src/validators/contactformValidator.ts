
import * as yup from "yup";

export const contactFormValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  location: yup.string().required("Location is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.string()
    .matches(/^[0-9]+$/, 'Contact number must be digits')
    .required('Contact number is required'),
  message: yup.string().required("Message is required"),
})

export const userRegisterFormValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  gender: yup.string().required("Gender is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.string()
    .matches(/^[0-9]+$/, 'Contact number must be digits')
    .required('Contact number is required'),

})


export const userContactSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(2),
  contact: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{7,15}$/, "Phone must be 7-15 digits"),
  email: yup.string().required("Email is required").email("Invalid email"),
  contactCode: yup.string().required("Contact code is required"),
});

export const userConsentSchema = yup.object().shape({
  isAbove25: yup.boolean().oneOf([true], "You must confirm you're above 25"),
  hasDrivingExperience: yup.boolean().oneOf([true], "Driving experience required"),
  agreedToTerms: yup.boolean().oneOf([true], "You must agree to terms"),
});