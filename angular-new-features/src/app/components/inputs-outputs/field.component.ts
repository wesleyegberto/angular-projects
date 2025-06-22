import { Component, input, InputSignal, output } from "@angular/core";

@Component({
  selector: 'app-field',
  standalone: true,
  template: `
    <div class="field">
      <label>{{ label() }}</label>
      <input class="value" [value]="value()" (input)="emitChange($event.target)" />
    </div>
  `,
  styles: [`
    .field {
      margin-bottom: 10px;
    }
    label {
      font-weight: bold;
      margin-right: 1em;
    }
    .value {
      color: #555;
      border: 1px solid #ccc;
    }
  `],
})
export class FieldComponent {
  label: InputSignal<string | undefined> = input<string>();
  value: InputSignal<any> = input<any>();

  onChange = output<any>();

  emitChange(event: any): void {
    if (event) {
      this.onChange.emit(event);
    }
  }
}
