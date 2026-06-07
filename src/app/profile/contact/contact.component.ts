import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ContactFormData } from '../profile.interface';
import { HttpClient } from '@angular/common/http';
import { PROFILE_CONSTANTS } from '../profile-constants';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent implements OnInit {

  contactFormData: ContactFormData = {
    name: { input: '', invalid: false },
    phone: { input: '', invalid: false },
    email: { input: '', invalid: false },
    message: { input: '', invalid: false },
    company: { input: '' },
    referral: { input: '' }
  };
  disableForm = false;
  displayErrorMessage = false;
  displaySuccessMessage = false;
  errorMessage: string;
  referralOptions: any;
  resetDropdown = false;
  successMessage: string;

  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.referralOptions = PROFILE_CONSTANTS.referralOptions;
  }
  
  onSelected(value: string): void {
    this.contactFormData.referral.input = value;
    this.resetDropdown = false;
  }
  
  onSubmit(contactForm: any): void {
    const googleSheetsScriptURL = 'https://script.google.com/macros/s/AKfycbx45IpqLkb1p9VERNqoquKGIzrDIyu7gKkcLW9ejfBQ8KZv40dGU-GYEFtzkO9ddowJ/exec';
    const isValid = this.checkFormData(this.contactFormData, contactForm);  
    if (isValid) {
      const reformattedFormData = this.reformatFormData(this.contactFormData);
      this.displayErrorMessage = false;
      this.displaySuccessMessage = this.disableForm = true;
      this.successMessage = 'Sending message...';

      this.http.post(googleSheetsScriptURL, reformattedFormData, { headers: { 'Content-Type': 'text/plain' }, responseType: 'text' as 'json' }
      ).pipe(
        catchError((err) => {
          console.warn('HTTP post resulted in error/redirect (handled):', err);
          return of('');
        })
      ).subscribe({
        next: (res) => {
          this.ngZone.run(() => {
            this.successMessage = 'Message sent successfully! Have a great day!';
            // Clear the form only after successful send
            try {
              this.clearForm(contactForm);
            } catch (e) {
              console.warn('clearForm threw:', e);
            }
            // Start the reset timer after the success handler runs
            setTimeout(() => {
              this.displaySuccessMessage = this.displayErrorMessage = this.disableForm = false;
              // Force change detection in case it's needed
              try { this.cdr.detectChanges(); } catch {}
            }, 5000);
            // Immediate detection after immediate updates
            try { this.cdr.detectChanges(); } catch {}
          });
        },
        error: (err: any) => {
          console.error('Error sending contact form data (final):', err);
          this.ngZone.run(() => {
            this.displayErrorMessage = true;
            this.displaySuccessMessage = false;
            this.errorMessage = 'Uh-oh! There was an issue sending your message. Please try again later.';
            this.disableForm = false;
            try { this.cdr.detectChanges(); } catch {}
          });
        }
      });
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
      message: { input: '', invalid: false },
      company: { input: '' },
      referral: { input: '' }
    }
    this.resetDropdown = true;
    form.resetForm();
  }

  private reformatFormData(formData: ContactFormData): any {
    return {
      name: formData.name.input,
      phone: formData.phone.input,
      email: formData.email.input,
      company: formData.company.input || '',
      referral: formData.referral.input || '',
      message: formData.message.input
    };
  }

  private setErrorMessage(formControls: any): void {
    if (this.contactFormData.name.invalid) {
      this.errorMessage = 'Missing name';
    } else if (this.contactFormData.phone.invalid) {
        this.errorMessage = 'Missing phone number';
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