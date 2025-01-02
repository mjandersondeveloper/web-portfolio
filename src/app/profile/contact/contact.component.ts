import { Component, OnInit } from '@angular/core';
import { ContactFormData } from '../profile.interface';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData: any;
  contactFormData: ContactFormData = {
    name: { input: '', invalid: false },
    subject: { input: '', invalid: false },
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
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.contactData = this.profileService.contactData;
  }
  
  onSubmit(contactForm: any): void {
    const googleSheetsScriptURL = 'https://script.google.com/macros/s/AKfycbz-XJd51Q3oN-jKiGINIYYVQbuqH2bAhTrUtSBJ_HRKDUanZ-MrMo_n7T-g-syjKpo/exec';
    const isValid = this.checkFormData(this.contactFormData, contactForm);  
    if (isValid) {
      const reformattedFormData = this.reformatFormData(this.contactFormData);
      this.displayErrorMessage = false;
      this.displaySuccessMessage = this.disableForm = true;
      this.successMessage = 'Sending message...';

      this.http.post(googleSheetsScriptURL, reformattedFormData, { headers: { 'Content-Type': 'text/plain' } }
      ).subscribe({
        next: () => {
          console.log('Form data logged successfully');
          this.successMessage = 'Message sent successfully! Have a great day!';
        },
        error: (err) => {
          console.error('Error logging data:', err);
          this.successMessage = 'Uh-oh! There was an issue sending your message. Please try again later.';
        }
      });
      this.clearForm(contactForm);
      setTimeout(() => {
        this.displaySuccessMessage = this.disableForm = false;
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
    submittedForm.subject.invalid = formDataControls?.subject?.errors != null;
    submittedForm.email.invalid = formDataControls?.email?.errors != null;
    submittedForm.message.invalid = formDataControls?.message?.errors != null;
    return formData?.status === 'VALID';
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

  private setErrorMessage(formControls: any): void {
    if (this.contactFormData.name.invalid) {
      this.errorMessage = 'Missing name';
    } else if (this.contactFormData.subject.invalid) {
      this.errorMessage = 'Missing subject';
    } else if (this.contactFormData.email.invalid) {
      if (formControls?.email?.errors?.pattern) {
        this.errorMessage = 'Invalid email address. Valid format example: test@gmail.com';
      } else {
        this.errorMessage = 'Missing email address';
      }
    } else if (this.contactFormData.message.invalid) {
      this.errorMessage = 'Missing message';
    }
  }
}
