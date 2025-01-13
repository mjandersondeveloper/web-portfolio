
export interface ContactFormData {
    name: FormInput;
    phone: FormInput;
    email: FormInput;
    message: FormInput;
    test: FormInput;
}

export interface FormInput {
    input: string;
    invalid: boolean;
}