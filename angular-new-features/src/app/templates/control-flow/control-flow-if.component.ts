import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  standalone: true,
  template: `
    <div>
      <h1>Condition with <code>&#64;if</code>, <code>&#64;else if</code> and <code>&#64;else</code></h1>

      <div>
        <button (click)="flag = !flag">Toggle Content</button>

        <h2>Using <code>&#64;if</code> and <code>&#64;else</code></h2>
        @if (flag) {
          <p>The flag is true, so this content is displayed.</p>
        } @else {
          <p>The flag is false, so this content is not displayed.</p>
        }

        <h2>Using <code>&#64;if</code>, <code>&#64;else if</code> and <code>&#64;else</code></h2>
        @if (flag) {
          <p>Flag is true, showing this content.</p>
        } @else if (!flag) {
          <p>Flag is false, showing this alternative content.</p>
        } @else {
          <p>This will never be shown.</p>
        }

        <h2>Using <code>&#64;if</code> with <code>as</code> to reference expression result</h2>
        @if (object.internal.value; as value) {
          <p>The internal value is: {{ value }}</p>
        } @else {
          <p>No internal value found.</p>
        }
      </div>
    </div>
  `
  })
export class ControlFlowIfComponent {
  flag: boolean = true;

  object = {
    internal: {
      value: 'This is an internal value'
    }
  }
}
