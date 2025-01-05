
export interface ContactFormData {
    name: FormInput;
    phone: FormInput;
    email: FormInput;
    message: FormInput;
}

export interface FormInput {
    input: string;
    invalid: boolean;
}