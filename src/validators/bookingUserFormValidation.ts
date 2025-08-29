
import * as yup from "yup";

export const bookingSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required").min(2).max(100),
    userContact: yup.string().required("Phone is required").matches(/^[0-9]+$/, "Enter valid contact").min(7, "Contact should greater 7 and less then 13").max(15, "Contact should greater 7 and less then 13"),
    userEmail: yup.string().required("Email is required").email(),
    isAbove25: yup.boolean().oneOf([true], "You must confirm you are above 25"),
    hasDrivingExperience: yup.boolean().oneOf([true], "You must confirm driving experience"),
});