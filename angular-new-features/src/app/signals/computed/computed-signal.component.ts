import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
    template: `
    <div>
      <h1>Computed Signal</h1>

      <p>Current Count: {{ count() }}</p>
      <p>Double Count: {{ doubleCount() }}</p>
      <p>Triple Count: {{ tripleCount() }}</p>

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
export class ComputedSignalComponent {
  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  tripleCount: Signal<number> = computed(() => this.count() * 3);


  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }
}
