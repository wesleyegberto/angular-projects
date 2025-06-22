import { Component } from '@angular/core';

import { CommentsComponent } from './comments.component';

@Component({
  selector: 'app-defer-basic-usage',
  imports: [CommentsComponent],
  template: `
    <h2>Defer Basic Usage</h2>
    <p>
      This component demonstrates the basic usage of the <code>defer</code> block.
      It will loaded the defer block lazyly and render the placeholder and loading until the content is ready.
    </p>

    @defer {
      <p>Deferred content loaded.</p>
      <app-comments />
    } @loading (after 3s; minimum 2s) {
      <p>Loading...</p>
    } @placeholder (minimum 500ms) {
      <p>The loading has not started yet</p>
    }
  `
})
export class DeferBasicUsageComponent {
}
