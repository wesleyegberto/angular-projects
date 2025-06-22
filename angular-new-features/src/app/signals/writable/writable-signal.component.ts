import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-usage',
  standalone: true,
  template: `
    <div>
      <h1>Writable Signal</h1>

      <p>Current Count: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: [`
    button {
      margin: 5px;
    }
  `]
})
export class WritableSignalComponent {
  // it uses a signal to manage a counter state.
  count: WritableSignal<number> = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }
}
