
export interface ContactFormData {
    name: FormInput;
    subject: FormInput;
    email: FormInput;
    message: FormInput;
}

export interface FormInput {
    input: string;
    invalid: boolean;
}