import { Component } from "@angular/core";

import { FieldComponent } from './field.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FieldComponent],
  template: `
    <div>
      <h1>Interation Between Components</h1>

      <div>
        <app-field label="Name" [value]="model.name" (onChange)="log('name', $event)" />
        <app-field label="E-mail" [value]="model.email" (onChange)="log('email', $event)" />
      </div>
    </div>
  `
})
export class InputsOutputsComponent {
  model = {
    name: 'John Doe',
    email: 'johndoe@mail.com'
  };

  log(field: string, value: any) {
    console.log(`Field: ${field}, Value: ${value}`);
  }
}
