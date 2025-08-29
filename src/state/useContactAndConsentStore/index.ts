import { userConsentSchema, userContactSchema } from "@/validators/contactformValidator";
import { create } from "zustand";
import { devtools } from "zustand/middleware";



interface UserContactDetailsI {
    fullName: string;
    contact: string;
    email: string;
    contactCode: string
    //   preferPhoneOnly: boolean;
}

interface UserConsentI {
    isAbove25: boolean;
    hasDrivingExperience: boolean;
    agreedToTerms: boolean;
}

interface ErrorsI {
    fullName?: string;
    contact?: string;
    email?: string;
    isAbove25?: string;
    hasDrivingExperience?: string;
    agreedToTerms?: string;
}



type State = {
    userContact: UserContactDetailsI,
    userConsent: UserConsentI
    error: ErrorsI
}

type Actions = {
    addFieldOnChangeAction: (name: string, value: string) => void,
    validateContact: () => boolean;
    validateConsent: () => boolean;
    clearErrors: () => void;
}

export const userContactAndConsentStore = create<State & Actions>()(devtools((set, get) => ({
    userContact: {
        fullName: "",
        contact: "",
        email: "",
        contactCode: ""
    },
    error: {
        fullName: "",
        contact: "",
        email: "",
        contactCode: ""
    },

    addFieldOnChangeAction: (name: string, value: string) => {
        set((state) => {
            // Update the userContact field value
            const updatedUserContact = {
                ...state.userContact,
                [name]: value,
            };

            // Clone existing errors so we can update
            const newErrors = { ...state.error };

            try {
                // Run Yup's field-level validation for this specific field
                userContactSchema.validateSyncAt(name, updatedUserContact);

                // If validation passes, clear the error for this field
                 newErrors[name as keyof ErrorsI] = "";
            } catch (err: any) {
                // If validation fails, set the error message for this field
                newErrors[name as keyof ErrorsI] = err.message;
            }

            return {
                userContact: updatedUserContact,
                error: newErrors,
            };
        });

    }
    ,
    validateContact: () => {
        const { userContact } = get();
        try {
            userContactSchema.validateSync(userContact, { abortEarly: false });
            set({ error: {} });
            return true;
        } catch (err: any) {
            const newErrors: ErrorsI = {};
            if (err.inner) {
                err.inner.forEach((validationError: any) => {
                    newErrors[validationError.path as keyof ErrorsI] = validationError.message;
                });
            }
            set({ error: newErrors });
            return false;
        }
    },

    validateConsent: () => {
        const { userConsent } = get();
        try {
            userConsentSchema.validateSync(userConsent, { abortEarly: false });
            return true;
        } catch (err: any) {
            const newErrors: ErrorsI = {};
            if (err.inner) {
                err.inner.forEach((validationError: any) => {
                    newErrors[validationError.path as keyof ErrorsI] = validationError.message;
                });
            }
            set((state) => ({ error: { ...state.error, ...newErrors } }));
            return false;
        }
    },

    clearErrors: () => {
        set({ error: {} });
    },
})))