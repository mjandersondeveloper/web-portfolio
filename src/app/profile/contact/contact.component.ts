import { Component, OnInit } from '@angular/core';
import { ContactFormData } from '../profile.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  contactFormData: ContactFormData = {
    name: '',
    subject: '',
    email: '',
    message: ''
  };
  invalid = false;

  constructor(){}

  ngOnInit() {}

  onSubmit() {
    console.log('Form submitted:', this.contactFormData);
    this.invalid = true;
}


}
