import { Component } from '@angular/core';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  errorOccurred: boolean = false;
  message: string = null;

  constructor(private _contactService: ContactService) { }

  get hasMessageToDisplay(): boolean {
    return !!this.message;
  }

  private showSuccessMessage(message: string) {
    this.errorOccurred = false;
    this.message = message;
  }

  private showErrorMessage(message: string) {
    this.errorOccurred = true;
    this.message = message;
  }

  sendContact() {
    this._contactService.sendContact(this.contact)
      .subscribe(
        result => this.showSuccessMessage('Your message has been sent!'),
        err => this.showErrorMessage('An error occurred while sending your message.')
      );
  }
}
