import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  styles: [`
    .error-msg {
      color: #a94442;
    }
    .fix-error-icon {
      top: 27px;
    }
  `],
  template: `
    <div *ngIf="displayError">
      <span class="glyphicon glyphicon-remove form-control-feedback fix-error-icon"></span>
      <span class="sr-only">(error)</span>
      <div class="error-msg">
        {{errorMsg}}
      </div>
    </div>
  `
})
export class FieldErrorDisplayComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
