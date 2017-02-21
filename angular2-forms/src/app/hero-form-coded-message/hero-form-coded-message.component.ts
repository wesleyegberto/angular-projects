import { AfterViewChecked, ViewChild,  Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './../hero';

@Component({
  selector: 'hero-form-coded-message',
  templateUrl: './hero-form-coded-message.component.html'
})
export class HeroFormCodedMessageComponent implements AfterViewChecked {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  hero = new Hero(0, null, null);
  submitted = false;

  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  formErrors = {
    'name': '',
    'power': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.hero = new Hero(0, '', '');
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    if (this.heroForm) {
      // when changed we validate to update the messages
      this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
