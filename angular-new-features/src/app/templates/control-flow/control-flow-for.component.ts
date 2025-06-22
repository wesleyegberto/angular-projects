import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  template: `
    <div>
      <h1>Loop with <code>&#64;for</code></h1>
      <div>
        <h2>Using <code>&#64;for</code> with <code>track</code></h2>
        <ul>
          @for (item of items; track item.id) {
            <li>{{ item.text }}</li>
          }
        </ul>

        <h2>Using <code>&#64;for</code> contextual variables</h2>
        <table border="1" width="100%">
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>$count</th>
            <th>$index</th>
            <th>$first</th>
            <th>$last</th>
            <th>$even</th>
            <th>$odd</th>
          </tr>
          @for (item of items; track item.id; let i = $index, isOdd = $odd, isEven = $even) {
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.text }}</td>
              <td>{{ $count }}</td>
              <td>{{ i }}</td>
              <td>{{ $first }}</td>
              <td>{{ $last }}</td>
              <td>{{ isEven }}</td>
              <td>{{ isOdd }}</td>
            </tr>
          }
        </table>

        <h2>Using <code>&#64;for</code> with <code>&#64;empty</code></h2>
        <ul>
          @for (item of emptyItems; track item.id) {
            <li>{{ item.text }}</li>
          } @empty {
            <li>No items available</li>
          }
        </ul>

    </div>
  `
})
export class ControlFlowForComponent {
  items: Item[] = [{ id: '1', text: 'Item 1' }, { id: '2', text: 'Item 2' }, { id: '3', text: 'Item 3' }];

  emptyItems: Item[] = [];
}

type Item = { id: string; text: string };
