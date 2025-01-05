import { Component, OnInit } from '@angular/core';
import { ContactFormData } from '../profile.interface';
import { HttpClient } from '@angular/common/http';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData: any;
  contactFormData: ContactFormData = {
    name: { input: '', invalid: false },
    phone: { input: '', invalid: false },
    email: { input: '', invalid: false },
    message: { input: '', invalid: false }
  };
  disableForm = false;
  displayErrorMessage = false;
  displaySuccessMessage = false;
  errorMessage: string;
  successMessage: string;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.contactData = PROFILE_CONSTANTS.contactData;
  }
  
  onSubmit(contactForm: any): void {
    const googleSheetsScriptURL = 'https://script.google.com/macros/s/AKfycbx45IpqLkb1p9VERNqoquKGIzrDIyu7gKkcLW9ejfBQ8KZv40dGU-GYEFtzkO9ddowJ/exec';
    const isValid = this.checkFormData(this.contactFormData, contactForm);  
    if (isValid) {
      const reformattedFormData = this.reformatFormData(this.contactFormData);
      this.displayErrorMessage = false;
      this.displaySuccessMessage = this.disableForm = true;
      this.successMessage = 'Sending message...';

      this.http.post(googleSheetsScriptURL, reformattedFormData, { headers: { 'Content-Type': 'text/plain' } }
      ).subscribe({
        next: () => {
          console.log('Contact form data sent successfully');
          this.successMessage = 'Message sent successfully! Have a great day!';
        },
        error: (err) => {
          console.error('Error sending contact form data:', err);
          this.displayErrorMessage = true;
          this.displaySuccessMessage = false;
          this.errorMessage = 'Uh-oh! There was an issue sending your message. Please try again later.';
        }
      });
      this.clearForm(contactForm);
      setTimeout(() => {
        this.displaySuccessMessage = this.displayErrorMessage = this.disableForm = false;
      }, 5000);
    } else {
      this.setErrorMessage(contactForm?.form?.controls);
      this.displayErrorMessage = true;
    }
  }

  private checkFormData(submittedForm: ContactFormData, contactForm: any): boolean {
    const formData = contactForm?.form;
    const formDataControls = formData?.controls;

    submittedForm.name.invalid = formDataControls?.name?.errors != null;
    submittedForm.phone.invalid = formDataControls?.phone?.errors != null;
    submittedForm.email.invalid = formDataControls?.email?.errors != null;
    submittedForm.message.invalid = formDataControls?.message?.errors != null;
    return formData?.status === 'VALID';
  }

  private clearForm(form: any): void {
    this.contactFormData = {
      name: { input: '', invalid: false },
      phone: { input: '', invalid: false },
      email: { input: '', invalid: false },
      message: { input: '', invalid: false }
    }
    form.resetForm();
  }

  private reformatFormData(formData: ContactFormData): any {
    return {
      name: formData.name.input,
      phone: formData.phone.input,
      email: formData.email.input,
      message: formData.message.input
    };
  }

  private setErrorMessage(formControls: any): void {
    if (this.contactFormData.name.invalid) {
      this.errorMessage = 'Missing name';
    } else if (this.contactFormData.phone.invalid) {
      if (formControls?.phone?.errors?.pattern) {
        this.errorMessage = 'Invalid phone number. Valid format: XXX-XXX-XXXX';
      } else {
        this.errorMessage = 'Missing phone number';
      }
    } else if (this.contactFormData.email.invalid) {
      if (formControls?.email?.errors?.pattern) {
        this.errorMessage = 'Invalid email address. Valid format: XXXXX@XXXXX.XXX';
      } else {
        this.errorMessage = 'Missing email address';
      }
    } else if (this.contactFormData.message.invalid) {
      this.errorMessage = 'Missing message';
    }
  }
}
