import { Component } from '@angular/core';
import { ButtonState } from './button-state';

@Component({
  selector: 'app-simple-switch-button',
  templateUrl: './simple-switch-button.component.html',
  styles: [`
    button {
      padding: 0.5em 1.5em;
      font-weight: bold;
    }
  `]
})
export class SimpleSwitchButtonComponent {
  state: ButtonState = ButtonState.OFF;

  constructor() { }

  get buttonLabel() {
    return this.state === ButtonState.ON ? 'Turn off' : 'Turn on';
  }

  get buttonColor() {
    return this.state === ButtonState.ON ? 'green' : 'red';
  }

  toggle() {
    this.state = this.state === ButtonState.ON ? ButtonState.OFF : ButtonState.ON;
  }
}
