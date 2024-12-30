import { Component, OnInit } from '@angular/core';
import { ContactFormData } from '../profile.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactFormData: ContactFormData = {
    name: { input: '', invalid: false },
    subject: { input: '', invalid: false },
    email: { input: '', invalid: false },
    message: { input: '', invalid: false }
  };

  constructor(
    private http: HttpClient
  ) { }

  onSubmit(contactForm: any): void {
    const googleSheetsScriptURL = 'https://script.google.com/macros/s/AKfycbz-XJd51Q3oN-jKiGINIYYVQbuqH2bAhTrUtSBJ_HRKDUanZ-MrMo_n7T-g-syjKpo/exec';
    const isValid = this.checkFormData(this.contactFormData, contactForm);
    if (isValid) {
      const reformattedFormData = this.reformatFormData(this.contactFormData);
      this.http.post(googleSheetsScriptURL, reformattedFormData, { headers: { 'Content-Type': 'text/plain' } }
      ).subscribe({
        next: () => {
          console.log('Form data logged to Google Sheets.');
        },
        error: (err) => {
          console.error('Error logging data:', err);
        }
      });
      this.clearForm(contactForm);
    }
  }

  private checkFormData(submittedForm: ContactFormData, contactForm: any): boolean {
    const formData = contactForm.form;
    const formDataControls = formData.controls;

    submittedForm.name.invalid = formDataControls.name.errors != null;
    submittedForm.subject.invalid = formDataControls.subject.errors != null;
    submittedForm.email.invalid = formDataControls.email.errors != null;
    submittedForm.message.invalid = formDataControls.message.errors != null;
    return formData.status === 'VALID';
  }

  private clearForm(form: any): void {
    this.contactFormData = {
      name: { input: '', invalid: false },
      subject: { input: '', invalid: false },
      email: { input: '', invalid: false },
      message: { input: '', invalid: false }
    }
    form.resetForm();
  }

  private reformatFormData(formData: ContactFormData): any {
    return {
      name: formData.name.input,
      subject: formData.subject.input,
      email: formData.email.input,
      message: formData.message.input
    };
  }
}
