import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  hero = new Hero(0, null, null);
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.hero = new Hero(0, '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.hero);
  }
}
