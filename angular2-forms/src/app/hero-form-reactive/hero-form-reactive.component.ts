import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Hero } from './../hero';

@Component({
  selector: 'hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html'
})
export class HeroFormReactiveComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  hero = new Hero(0, null, null);
  submitted = false;

  heroForm: FormGroup;
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    // creates the validators and copy the data model
    // into the form model (no two-way data binding)
    this.heroForm = this.fb.group({
      'name': [this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
      ],
      'alterEgo': [this.hero.alterEgo],
      'power':    [this.hero.power, Validators.required]
    });
    // when changed we validate to update the messages
    this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm;
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

  newHero() {
    this.hero = new Hero(42, '', '');
    this.buildForm();
  }

  onSubmit() {
    // copy the form model into the data model (no two-way data binding)
    this.hero = this.heroForm.value;
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.hero);
  }
}
